import { ParserRuleContext } from 'antlr4';
import { DurationExpressionTailContext } from '$generated/context/duration-expression-tail-context';
import { DurationTermContext } from '$generated/context/duration-term-context';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import type DurationVisitor from '$generated/duration-visitor';

export class DurationExpressionContext extends ParserRuleContext {
	constructor(
		parser?: DurationParser,
		parent?: ParserRuleContext,
		invokingState?: number,
	) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public durationTerm(): DurationTermContext {
		return this.getTypedRuleContext(
			DurationTermContext,
			0,
		) as DurationTermContext;
	}

	public durationExpressionTail_list(): DurationExpressionTailContext[] {
		return this.getTypedRuleContexts(
			DurationExpressionTailContext,
		) as DurationExpressionTailContext[];
	}

	public durationExpressionTail(i: number): DurationExpressionTailContext {
		return this.getTypedRuleContext(
			DurationExpressionTailContext,
			i,
		) as DurationExpressionTailContext;
	}

	public get ruleIndex(): number {
		return DurationParser.RULE_durationExpression;
	}

	public enterRule(listener: DurationListener): void {
		if (listener.enterDurationExpression) {
			listener.enterDurationExpression(this);
		}
	}

	public exitRule(listener: DurationListener): void {
		if (listener.exitDurationExpression) {
			listener.exitDurationExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: DurationVisitor<Result>): Result {
		if (visitor.visitDurationExpression) {
			return visitor.visitDurationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
