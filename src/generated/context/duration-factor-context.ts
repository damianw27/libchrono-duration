import { ParserRuleContext, type TerminalNode } from 'antlr4';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';
import { DurationStatementContext } from '$generated/context/duration-statement-context';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import type DurationVisitor from '$generated/duration-visitor';

export class DurationFactorContext extends ParserRuleContext {
	constructor(
		parser?: DurationParser,
		parent?: ParserRuleContext,
		invokingState?: number,
	) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public durationStatement(): DurationStatementContext {
		return this.getTypedRuleContext(
			DurationStatementContext,
			0,
		) as DurationStatementContext;
	}

	public LP(): TerminalNode {
		return this.getToken(DurationParser.LP, 0);
	}

	public durationExpression(): DurationExpressionContext {
		return this.getTypedRuleContext(
			DurationExpressionContext,
			0,
		) as DurationExpressionContext;
	}

	public RP(): TerminalNode {
		return this.getToken(DurationParser.RP, 0);
	}

	public get ruleIndex(): number {
		return DurationParser.RULE_durationFactor;
	}

	public enterRule(listener: DurationListener): void {
		if (listener.enterDurationFactor) {
			listener.enterDurationFactor(this);
		}
	}

	public exitRule(listener: DurationListener): void {
		if (listener.exitDurationFactor) {
			listener.exitDurationFactor(this);
		}
	}

	// @Override
	public accept<Result>(visitor: DurationVisitor<Result>): Result {
		if (visitor.visitDurationFactor) {
			return visitor.visitDurationFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
