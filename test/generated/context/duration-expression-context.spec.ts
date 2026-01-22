import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

describe('DurationExpressionContext', () => {
	const listener: DurationListener = {
		enterDurationExpression: jest.fn(),
		exitDurationExpression: jest.fn(),
		visitTerminal: jest.fn(),
		visitErrorNode: jest.fn(),
		enterEveryRule: jest.fn(),
		exitEveryRule: jest.fn(),
	};

	const parser = DurationGrammarUtils.getParser('10d + 1w');
	const context = parser.durationExpression();

	test('should return correct ruleIndex', () => {
		expect(context.ruleIndex).toBe(DurationParser.RULE_durationExpression);
	});

	test('should call enterRule on listener', () => {
		context.enterRule(listener);
		expect(listener.enterDurationExpression).toHaveBeenCalledWith(context);
	});

	test('should call exitRule on listener', () => {
		context.exitRule(listener);
		expect(listener.exitDurationExpression).toHaveBeenCalledWith(context);
	});

	test('should get duration term', () => {
		expect(context.durationTerm().getText()).toBe('10d');
	});

	test('should get duration expression tail', () => {
		expect(context.durationExpressionTail_list().length).toBe(1);
	});
});
