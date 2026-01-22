import { ParserRuleContext } from 'antlr4';
import { DurationFactorContext } from '$generated/context/duration-factor-context';
import { DurationTermTailContext } from '$generated/context/duration-term-tail-context';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import type DurationVisitor from '$generated/duration-visitor';

export class DurationTermContext extends ParserRuleContext {
	constructor(
		parser?: DurationParser,
		parent?: ParserRuleContext,
		invokingState?: number,
	) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public durationFactor(): DurationFactorContext {
		return this.getTypedRuleContext(
			DurationFactorContext,
			0,
		) as DurationFactorContext;
	}

	public durationTermTail_list(): DurationTermTailContext[] {
		return this.getTypedRuleContexts(
			DurationTermTailContext,
		) as DurationTermTailContext[];
	}

	public durationTermTail(i: number): DurationTermTailContext {
		return this.getTypedRuleContext(
			DurationTermTailContext,
			i,
		) as DurationTermTailContext;
	}

	public get ruleIndex(): number {
		return DurationParser.RULE_durationTerm;
	}

	public enterRule(listener: DurationListener): void {
		if (listener.enterDurationTerm) {
			listener.enterDurationTerm(this);
		}
	}

	public exitRule(listener: DurationListener): void {
		if (listener.exitDurationTerm) {
			listener.exitDurationTerm(this);
		}
	}

	// @Override
	public accept<Result>(visitor: DurationVisitor<Result>): Result {
		if (visitor.visitDurationTerm) {
			return visitor.visitDurationTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
