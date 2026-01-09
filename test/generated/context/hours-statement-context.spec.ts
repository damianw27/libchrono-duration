import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import { HoursStatementContext } from '$root/generated/context/hours-statement-context';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';

describe('HoursStatementContext', () => {
  const listener: DurationListener = {
    enterHoursStatement: jest.fn(),
    exitHoursStatement: jest.fn(),
    visitTerminal: jest.fn(),
    visitErrorNode: jest.fn(),
    enterEveryRule: jest.fn(),
    exitEveryRule: jest.fn(),
  };

  const parser = DurationGrammarUtils.getParser('10h');
  const context = parser.hoursStatement();

  test('should return rule index', () => {
    expect(context.ruleIndex).toEqual(DurationParser.RULE_hoursStatement);
  });

  test('should call enterRule on listener', () => {
    context.enterRule(listener);
    expect(listener.enterHoursStatement).toHaveBeenCalledWith(context);
  });

  test('should call exitRule on listener', () => {
    context.exitRule(listener);
    expect(listener.exitHoursStatement).toHaveBeenCalledWith(context);
  });

  test('should get NUMBER token', () => {
    expect(context.NUMBER().getText()).toBe('10');
  });

  test('should get HOUR token', () => {
    expect(context.HOUR().getText()).toBe('h');
  });
});
