import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import {
  DurationExpressionTailContext,
} from '$root/generated/context/duration-expression-tail-context';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';

describe('DurationExpressionTailContext', () => {
  const listener: DurationListener = {
    enterDurationExpressionTail: jest.fn(),
    exitDurationExpressionTail: jest.fn(),
    visitTerminal: jest.fn(),
    visitErrorNode: jest.fn(),
    enterEveryRule: jest.fn(),
    exitEveryRule: jest.fn(),
  };

  const parser = DurationGrammarUtils.getParser('10d + 1w');
  const context = parser.durationExpression().durationExpressionTail(0);

  test('should return correct ruleIndex', () => {
    expect(context.ruleIndex).toBe(DurationParser.RULE_durationExpressionTail);
  });

  test('should call enterRule on listener', () => {
    context.enterRule(listener);
    expect(listener.enterDurationExpressionTail).toHaveBeenCalledWith(context);
  });

  test('should call exitRule on listener', () => {
    context.exitRule(listener);
    expect(listener.exitDurationExpressionTail).toHaveBeenCalledWith(context);
  });

  test('should get duration expression', () => {
    expect(context.durationExpression().getText()).toBe('1w');
  });

  test('should get SUB token', () => {
    expect(context.SUB()?.getText()).toBeUndefined();
  });

  test('should get ADD token', () => {
    expect(context.ADD()?.getText()).toBe('+');
  });
});
