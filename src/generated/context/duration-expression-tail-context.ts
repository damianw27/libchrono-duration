import { ParserRuleContext, type TerminalNode } from 'antlr4';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import type DurationVisitor from '$generated/duration-visitor';

export class DurationExpressionTailContext extends ParserRuleContext {
	constructor(
		parser?: DurationParser,
		parent?: ParserRuleContext,
		invokingState?: number,
	) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public durationExpression(): DurationExpressionContext {
		return this.getTypedRuleContext(
			DurationExpressionContext,
			0,
		) as DurationExpressionContext;
	}

	public ADD(): TerminalNode {
		return this.getToken(DurationParser.ADD, 0);
	}

	public SUB(): TerminalNode {
		return this.getToken(DurationParser.SUB, 0);
	}

	public get ruleIndex(): number {
		return DurationParser.RULE_durationExpressionTail;
	}

	public enterRule(listener: DurationListener): void {
		if (listener.enterDurationExpressionTail) {
			listener.enterDurationExpressionTail(this);
		}
	}

	public exitRule(listener: DurationListener): void {
		if (listener.exitDurationExpressionTail) {
			listener.exitDurationExpressionTail(this);
		}
	}

	// @Override
	public accept<Result>(visitor: DurationVisitor<Result>): Result {
		if (visitor.visitDurationExpressionTail) {
			return visitor.visitDurationExpressionTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
