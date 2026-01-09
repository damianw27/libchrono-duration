import { ExpressionOperator } from '$terms/types/expression-operator';
import { DurationExpression } from '$terms/duration-expression';
import { BaseTail } from '$terms/types/base-tail';
import { DurationExpressionTailContext } from '$generated/context/duration-expression-tail-context';
import { ParsedOptions } from '$core/types/parsed-options';

export class DurationExpressionTail implements BaseTail {
  public static of = (context: DurationExpressionTailContext): DurationExpressionTail => {
    const operator = context.ADD() === null ? ExpressionOperator.SUB : ExpressionOperator.ADD;
    const expression = DurationExpression.of(context.durationExpression());
    return new DurationExpressionTail(operator, expression);
  };

  private constructor(
    private readonly operator: ExpressionOperator,
    private readonly expression: DurationExpression,
  ) {}

  public apply = (timestamp: number, opt: ParsedOptions): number => {
    switch (this.operator) {
      case ExpressionOperator.ADD:
        return timestamp + this.expression.solve(opt);

      case ExpressionOperator.SUB:
        return timestamp - this.expression.solve(opt);

      default:
        throw new Error('Unsupported');
    }
  };

  public getOperator = (): ExpressionOperator => this.operator;
}
