import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

describe('DurationFactorContext', () => {
	const listener: DurationListener = {
		enterDurationFactor: jest.fn(),
		exitDurationFactor: jest.fn(),
		visitTerminal: jest.fn(),
		visitErrorNode: jest.fn(),
		enterEveryRule: jest.fn(),
		exitEveryRule: jest.fn(),
	};

	const parser = DurationGrammarUtils.getParser('(10d + 1m)');
	const context = parser.durationFactor();

	test('should return correct ruleIndex', () => {
		expect(context.ruleIndex).toBe(DurationParser.RULE_durationFactor);
	});

	test('should call enterRule on listener', () => {
		context.enterRule(listener);
		expect(listener.enterDurationFactor).toHaveBeenCalledWith(context);
	});

	test('should call exitRule on listener', () => {
		context.exitRule(listener);
		expect(listener.exitDurationFactor).toHaveBeenCalledWith(context);
	});

	test('should get duration statement', () => {
		expect(context.durationStatement()?.getText()).toBeUndefined();
	});

	test('should get duration expression', () => {
		expect(context.durationExpression()?.getText()).toBe('10d+1m');
	});

	test('should get LP token', () => {
		expect(context.LP()?.getText()).toBe('(');
	});

	test('should get RP token', () => {
		expect(context.RP()?.getText()).toBe(')');
	});
});
