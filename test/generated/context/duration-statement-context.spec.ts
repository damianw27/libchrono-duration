import { DurationStatementContext } from '$generated/context/duration-statement-context';
import { DurationParser } from '$generated/duration-parser';
import { DurationListener } from '$generated/duration-listener';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';

describe('DurationStatementContext', () => {
  const listener: DurationListener = {
    enterDurationStatement: jest.fn(),
    exitDurationStatement: jest.fn(),
    visitTerminal: jest.fn(),
    visitErrorNode: jest.fn(),
    enterEveryRule: jest.fn(),
    exitEveryRule: jest.fn(),
  };

  const parser = DurationGrammarUtils.getParser('1w 2d 10h 5m 30s 300ms');
  const context = parser.durationStatement();

  test('should return correct ruleIndex', () => {
    expect(context.ruleIndex).toBe(DurationParser.RULE_durationStatement);
  });

  test('should call enterRule on listener', () => {
    context.enterRule(listener);
    expect(listener.enterDurationStatement).toHaveBeenCalledWith(context);
  });

  test('should call exitRule on listener', () => {
    context.exitRule(listener);
    expect(listener.exitDurationStatement).toHaveBeenCalledWith(context);
  });

  test('should get week statement', () => {
    expect(context.weeksStatement()?.getText()).toBe('1w');
  });

  test('should get days statement', () => {
    expect(context.daysStatement()?.getText()).toBe('2d');
  });

  test('should get hours statement', () => {
    expect(context.hoursStatement()?.getText()).toBe('10h');
  });

  test('should get minutes statement', () => {
    expect(context.minutesStatement()?.getText()).toBe('5m');
  });

  test('should get seconds statement', () => {
    expect(context.secondsStatement()?.getText()).toBe('30s');
  });

  test('should get milliseconds statement', () => {
    expect(context.millisecondsStatement()?.getText()).toBe('300ms');
  });
});
