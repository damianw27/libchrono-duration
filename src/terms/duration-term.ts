import type { ParsedOptions } from '$core/types/parsed-options';
import type { DurationTermContext } from '$generated/context/duration-term-context';
import type { DurationTermTailContext } from '$generated/context/duration-term-tail-context';
import { DurationFactor } from '$terms/duration-factor';
import { DurationTermTail } from '$terms/duration-term-tail';
import type { BaseOperand } from '$terms/types/base-operand';

export class DurationTerm implements BaseOperand {
	public static of = (context: DurationTermContext): DurationTerm => {
		const base = DurationFactor.of(context.durationFactor());

		const tails = context
			.durationTermTail_list()
			.map((tailContext: DurationTermTailContext) =>
				DurationTermTail.of(tailContext),
			)
			.sort((a, b) => b.getOperator() - a.getOperator());

		return new DurationTerm(base, tails);
	};

	private constructor(
		private readonly base: DurationFactor,
		private readonly tails: DurationTermTail[],
	) {}

	public solve = (ctx: ParsedOptions): number => {
		let result = this.base.solve(ctx);

		this.tails.forEach((tail) => {
			result = tail.apply(result);
		});

		return result;
	};
}
