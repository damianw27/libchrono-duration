import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

describe('DurationTermContext', () => {
	const listener: DurationListener = {
		enterDurationTerm: jest.fn(),
		exitDurationTerm: jest.fn(),
		visitTerminal: jest.fn(),
		visitErrorNode: jest.fn(),
		enterEveryRule: jest.fn(),
		exitEveryRule: jest.fn(),
	};

	const parser = DurationGrammarUtils.getParser('10d * 2');
	const context = parser.durationTerm();

	test('should return correct ruleIndex', () => {
		expect(context.ruleIndex).toBe(DurationParser.RULE_durationTerm);
	});

	test('should call enterRule on listener', () => {
		context.enterRule(listener);
		expect(listener.enterDurationTerm).toHaveBeenCalledWith(context);
	});

	test('should call exitRule on listener', () => {
		context.exitRule(listener);
		expect(listener.exitDurationTerm).toHaveBeenCalledWith(context);
	});

	test('should get duration factor', () => {
		expect(context.durationFactor()?.getText()).toBe('10d');
	});

	test('should get duration factor', () => {
		expect(context.durationTermTail_list().length).toBe(1);
	});
});
