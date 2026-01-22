import { defaultOptions } from '$core/default-options';
import { Duration } from '$core/duration';
import { DurationErrorListener } from '$core/duration-error-listener';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import { DurationParseError } from '$core/duration-parse-error';
import { parseOptions } from '$core/option-utils';
import { PlainDurationUtils } from '$core/plain-duration-utils';
import type { Options } from '$core/types/options';
import type { ParsedOptions } from '$core/types/parsed-options';
import type { PlainDuration } from '$core/types/plain-duration';
import type { ValidationResult } from '$core/types/validation-result';
import type { ParseDurationContext } from '$generated/context/parse-duration-context';
import { isDurationExpressionContext } from '$terms/contexts-guards';
import { DurationExpression } from '$terms/duration-expression';
import { DurationStatement } from '$terms/duration-statement';

/**
 * Utils class witch allows to convert and validate duration string literals.
 */
export class DurationUtils {
	/**
	 * Method witch allows to parse duration string literals to Duration class.
	 * @param {string} input - duration string literal
	 * @param {Options} opt
	 */
	public static parse = (
		input: string,
		opt: Options = defaultOptions,
	): Duration => {
		const parsedOpt = parseOptions(opt);
		const errorListener = new DurationErrorListener();
		const parser = DurationGrammarUtils.getParser(input, errorListener);
		parser.removeErrorListeners();
		parser.addErrorListener(errorListener);

		try {
			const result = parser.parseDuration();
			const plain = DurationUtils.compute(result, parsedOpt);
			return Duration.of(plain, parsedOpt);
		} catch (_e) {
			throw new DurationParseError(errorListener);
		}
	};

	/**
	 * Method witch allows to validate correctness of duration string literals.
	 * @param {string} input - duration string literal
	 */
	public static validate = (input: string): ValidationResult => {
		const parser = DurationGrammarUtils.getParser(input);
		const errorListener = new DurationErrorListener();
		parser.removeErrorListeners();
		parser.addErrorListener(errorListener);
		parser.parseDuration();

		return {
			errors: errorListener.errors,
			isValid: errorListener.errors.length === 0,
		};
	};

	private static compute = (
		context: ParseDurationContext,
		opt: ParsedOptions,
	): PlainDuration => {
		const childContext =
			context.durationStatement() ?? context.durationExpression();

		if (childContext === null) {
			throw new Error('Invalid duration input provided.');
		}

		const resultTimestamp = isDurationExpressionContext(childContext)
			? DurationExpression.of(childContext).solve(opt)
			: new DurationStatement(childContext).solve(opt);

		return PlainDurationUtils.getPlainDuration(resultTimestamp, opt);
	};
}
