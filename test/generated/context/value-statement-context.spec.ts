import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

describe('ValueStatementContext', () => {
	const listener: DurationListener = {
		enterValueStatement: jest.fn(),
		exitValueStatement: jest.fn(),
		visitTerminal: jest.fn(),
		visitErrorNode: jest.fn(),
		enterEveryRule: jest.fn(),
		exitEveryRule: jest.fn(),
	};

	const parser = DurationGrammarUtils.getParser('10');
	const context = parser.valueStatement();

	test('should return rule index', () => {
		expect(context.ruleIndex).toEqual(DurationParser.RULE_valueStatement);
	});

	test('should call enterRule on listener', () => {
		context.enterRule(listener);
		expect(listener.enterValueStatement).toHaveBeenCalledWith(context);
	});

	test('should call exitRule on listener', () => {
		context.exitRule(listener);
		expect(listener.exitValueStatement).toHaveBeenCalledWith(context);
	});

	test('should get NUMBER token', () => {
		expect(context.NUMBER().getText()).toBe('10');
	});
});
