import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';

describe('SecondsStatementContext', () => {
  const listener: DurationListener = {
    enterSecondsStatement: jest.fn(),
    exitSecondsStatement: jest.fn(),
    visitTerminal: jest.fn(),
    visitErrorNode: jest.fn(),
    enterEveryRule: jest.fn(),
    exitEveryRule: jest.fn(),
  };

  const parser = DurationGrammarUtils.getParser('10s');
  const context = parser.secondsStatement();

  test('should return rule index', () => {
    expect(context.ruleIndex).toEqual(DurationParser.RULE_secondsStatement);
  });

  test('should call enterRule on listener', () => {
    context.enterRule(listener);
    expect(listener.enterSecondsStatement).toHaveBeenCalledWith(context);
  });

  test('should call exitRule on listener', () => {
    context.exitRule(listener);
    expect(listener.exitSecondsStatement).toHaveBeenCalledWith(context);
  });

  test('should get NUMBER token', () => {
    expect(context.NUMBER().getText()).toBe('10');
  });

  test('should get NUMBER token', () => {
    expect(context.SECOND().getText()).toBe('s');
  });
});
