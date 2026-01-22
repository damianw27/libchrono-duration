import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

describe('DurationTermTailContext', () => {
	const listener: DurationListener = {
		enterDurationTermTail: jest.fn(),
		exitDurationTermTail: jest.fn(),
		visitTerminal: jest.fn(),
		visitErrorNode: jest.fn(),
		enterEveryRule: jest.fn(),
		exitEveryRule: jest.fn(),
	};

	const parser = DurationGrammarUtils.getParser('10d * 2');
	const context = parser.durationTerm().durationTermTail(0);

	test('should return correct ruleIndex', () => {
		expect(context.ruleIndex).toBe(DurationParser.RULE_durationTermTail);
	});

	test('should call enterRule on listener', () => {
		context.enterRule(listener);
		expect(listener.enterDurationTermTail).toHaveBeenCalledWith(context);
	});

	test('should call exitRule on listener', () => {
		context.exitRule(listener);
		expect(listener.exitDurationTermTail).toHaveBeenCalledWith(context);
	});

	test('should get NUMBER token', () => {
		expect(context.valueStatement()?.getText()).toBe('2');
	});

	test('should get DIV token', () => {
		expect(context.DIV()?.getText()).toBeUndefined();
	});

	test('should get MUL token', () => {
		expect(context.MUL()?.getText()).toBe('*');
	});
});
