import { DurationErrorListener } from '$core/duration-error-listener';
import { ValidationResult } from '$core/types/validation-result';
import { DurationParseError } from '$core/duration-parse-error';
import { Duration } from '$core/duration';
import { PlainDuration } from '$core/types/plain-duration';
import { DurationStatement } from '$terms/duration-statement';
import { DurationExpression } from '$terms/duration-expression';
import { PlainDurationUtils } from '$core/plain-duration-utils';
import { isDurationExpressionContext } from '$terms/contexts-guards';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import { ParseDurationContext } from '$generated/context/parse-duration-context';
import { Options } from '$core/types/options';
import { defaultOptions } from '$core/default-options';
import { parseOptions } from '$core/option-utils';
import { ParsedOptions } from '$core/types/parsed-options';

/**
 * Utils class witch allows to convert and validate duration string literals.
 */
export class DurationUtils {
  /**
   * Method witch allows to parse duration string literals to Duration class.
   * @param {string} input - duration string literal
   * @param {Options} opt
   */
  public static parse = (input: string, opt: Options = defaultOptions): Duration => {
    const parsedOpt = parseOptions(opt);
    const errorListener = new DurationErrorListener();
    const parser = DurationGrammarUtils.getParser(input, errorListener);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    try {
      const result = parser.parseDuration();
      const plain = DurationUtils.compute(result, parsedOpt);
      return Duration.of(plain, parsedOpt);
    } catch (e) {
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

  private static compute = (context: ParseDurationContext, opt: ParsedOptions): PlainDuration => {
    const childContext = context.durationStatement() ?? context.durationExpression();

    if (childContext === null) {
      throw new Error('Invalid duration input provided.');
    }

    const resultTimestamp = isDurationExpressionContext(childContext)
      ? DurationExpression.of(childContext).solve(opt)
      : new DurationStatement(childContext).solve(opt);

    return PlainDurationUtils.getPlainDuration(resultTimestamp, opt);
  };
}
