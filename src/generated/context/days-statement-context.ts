import { ParserRuleContext, type TerminalNode } from 'antlr4';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import type DurationVisitor from '$generated/duration-visitor';

export class DaysStatementContext extends ParserRuleContext {
	constructor(
		parser?: DurationParser,
		parent?: ParserRuleContext,
		invokingState?: number,
	) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public NUMBER(): TerminalNode {
		return this.getToken(DurationParser.NUMBER, 0);
	}

	public DAY(): TerminalNode {
		return this.getToken(DurationParser.DAY, 0);
	}

	public get ruleIndex(): number {
		return DurationParser.RULE_daysStatement;
	}

	public enterRule(listener: DurationListener): void {
		if (listener.enterDaysStatement) {
			listener.enterDaysStatement(this);
		}
	}

	public exitRule(listener: DurationListener): void {
		if (listener.exitDaysStatement) {
			listener.exitDaysStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: DurationVisitor<Result>): Result {
		if (visitor.visitDaysStatement) {
			return visitor.visitDaysStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
