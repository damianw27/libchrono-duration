import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

describe('MinutesStatementContext', () => {
	const listener: DurationListener = {
		enterMinutesStatement: jest.fn(),
		exitMinutesStatement: jest.fn(),
		visitTerminal: jest.fn(),
		visitErrorNode: jest.fn(),
		enterEveryRule: jest.fn(),
		exitEveryRule: jest.fn(),
	};

	const parser = DurationGrammarUtils.getParser('10m');
	const context = parser.minutesStatement();

	test('should return rule index', () => {
		expect(context.ruleIndex).toEqual(DurationParser.RULE_minutesStatement);
	});

	test('should call enterRule on listener', () => {
		context.enterRule(listener);
		expect(listener.enterMinutesStatement).toHaveBeenCalledWith(context);
	});

	test('should call exitRule on listener', () => {
		context.exitRule(listener);
		expect(listener.exitMinutesStatement).toHaveBeenCalledWith(context);
	});

	test('should get NUMBER token', () => {
		expect(context.NUMBER().getText()).toBe('10');
	});

	test('should get MINUTE token', () => {
		expect(context.MINUTE().getText()).toBe('m');
	});
});
