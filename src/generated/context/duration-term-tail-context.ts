import { ParserRuleContext, type TerminalNode } from 'antlr4';
import { ValueStatementContext } from '$generated/context/value-statement-context';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import type DurationVisitor from '$generated/duration-visitor';

export class DurationTermTailContext extends ParserRuleContext {
	constructor(
		parser?: DurationParser,
		parent?: ParserRuleContext,
		invokingState?: number,
	) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public valueStatement(): ValueStatementContext {
		return this.getTypedRuleContext(
			ValueStatementContext,
			0,
		) as ValueStatementContext;
	}

	public MUL(): TerminalNode {
		return this.getToken(DurationParser.MUL, 0);
	}

	public DIV(): TerminalNode {
		return this.getToken(DurationParser.DIV, 0);
	}

	public get ruleIndex(): number {
		return DurationParser.RULE_durationTermTail;
	}

	public enterRule(listener: DurationListener): void {
		if (listener.enterDurationTermTail) {
			listener.enterDurationTermTail(this);
		}
	}

	public exitRule(listener: DurationListener): void {
		if (listener.exitDurationTermTail) {
			listener.exitDurationTermTail(this);
		}
	}

	// @Override
	public accept<Result>(visitor: DurationVisitor<Result>): Result {
		if (visitor.visitDurationTermTail) {
			return visitor.visitDurationTermTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
