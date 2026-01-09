import { DurationExpression } from '$terms/duration-expression';
import { AntlrMocks } from '$test/_helpers_/antlr-mocks';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';
import { parseOptions } from '$core/option-utils';
import { defaultOptions } from '$core/default-options';

describe('DurationExpression', () => {
  const opt = parseOptions(defaultOptions);
  const antlrMocks = new AntlrMocks();

  describe('#of', () => {
    test('should create a DurationExpression with a base term and no tails', () => {
      const context: DurationExpressionContext = antlrMocks.durationExpressionContextNoTailsMock;
      const durationExpression = DurationExpression.of(context);
      expect(durationExpression).toBeInstanceOf(DurationExpression);
      expect(durationExpression.solve(opt)).toEqual(173045100);
    });

    test('should create a DurationExpression with a base term and tails', () => {
      const context: DurationExpressionContext = antlrMocks.durationExpressionContextOneTailMock;
      const durationExpression = DurationExpression.of(context);
      expect(durationExpression).toBeInstanceOf(DurationExpression);
      expect(durationExpression.solve(opt)).toEqual(1750335300);
    });
  });

  describe('#solve', () => {
    test('should solve the expression without tails', () => {
      const context = antlrMocks.durationExpressionContextNoTailsMock;
      const durationExpression = DurationExpression.of(context);
      expect(durationExpression.solve(opt)).toEqual(173045100);
    });

    test('should solve the expression with one tail', () => {
      const context = antlrMocks.durationExpressionContextOneTailMock;
      const durationExpression = DurationExpression.of(context);
      expect(durationExpression.solve(opt)).toEqual(1750335300);
    });

    test('should solve the expression with multiple tails', () => {
      const context = antlrMocks.durationExpressionContextMultipleTailMock;
      const durationExpression = DurationExpression.of(context);
      expect(durationExpression.solve(opt)).toEqual(173045100);
    });
  });
});
