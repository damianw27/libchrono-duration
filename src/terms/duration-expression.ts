import { BaseOperand } from '$terms/types/base-operand';
import { DurationTerm } from '$terms/duration-term';
import { DurationExpressionTail } from '$terms/duration-expression-tail';
import { DurationExpressionTailContext } from '$generated/context/duration-expression-tail-context';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';
import { ParsedOptions } from '$core/types/parsed-options';

export class DurationExpression implements BaseOperand {
  public static of = (context: DurationExpressionContext): DurationExpression => {
    const base = DurationTerm.of(context.durationTerm());

    const tails = context
      .durationExpressionTail_list()
      .map((tailContext: DurationExpressionTailContext) => DurationExpressionTail.of(tailContext));

    return new DurationExpression(base, tails);
  };

  private constructor(
    private readonly base: DurationTerm,
    private readonly tails: DurationExpressionTail[],
  ) {}

  public solve = (opt: ParsedOptions): number => {
    let result = this.base.solve(opt);

    this.tails.forEach((tail) => {
      result = tail.apply(result, opt);
    });

    return result;
  };
}
