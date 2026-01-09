import { TermOperator } from '$terms/types/term-operator';
import { BaseTail } from '$terms/types/base-tail';
import { DurationTermTailContext } from '$generated/context/duration-term-tail-context';

export class DurationTermTail implements BaseTail {
  public static of = (context: DurationTermTailContext): DurationTermTail => {
    const operator = context.DIV() === null ? TermOperator.MUL : TermOperator.DIV;
    const scalar = parseFloat(context.valueStatement().getText() ?? '0');
    return new DurationTermTail(operator, scalar);
  };

  private constructor(
    private readonly operator: TermOperator,
    private readonly scalar: number,
  ) {}

  public apply = (timestamp: number): number => {
    switch (this.operator) {
      case TermOperator.MUL:
        return timestamp * this.scalar;

      case TermOperator.DIV:
        return timestamp / this.scalar;

      default:
        throw new Error('Unsupported');
    }
  };

  public getOperator = (): TermOperator => this.operator;
}
