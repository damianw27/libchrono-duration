import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';

describe('ParseDurationContext', () => {
  const listener: DurationListener = {
    enterParseDuration: jest.fn(),
    exitParseDuration: jest.fn(),
    visitTerminal: jest.fn(),
    visitErrorNode: jest.fn(),
    enterEveryRule: jest.fn(),
    exitEveryRule: jest.fn(),
  };

  const parser = DurationGrammarUtils.getParser('10m + 2m');
  const context = parser.parseDuration();

  test('should return rule index', () => {
    expect(context.ruleIndex).toEqual(DurationParser.RULE_parseDuration);
  });

  test('should call enterRule on listener', () => {
    context.enterRule(listener);
    expect(listener.enterParseDuration).toHaveBeenCalledWith(context);
  });

  test('should call exitRule on listener', () => {
    context.exitRule(listener);
    expect(listener.exitParseDuration).toHaveBeenCalledWith(context);
  });

  test('should get undefined from duration statement', () => {
    expect(context.durationStatement()?.getText()).toBeUndefined();
  });

  test('should get duration expression', () => {
    expect(context.durationExpression()?.getText()).toBe('10m+2m');
  });

  test('should get EOF token', () => {
    expect(context.EOF().getText()).toBe('<EOF>');
  });
});
