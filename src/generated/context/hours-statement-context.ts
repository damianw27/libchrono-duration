import { ParserRuleContext, type TerminalNode } from 'antlr4';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import type DurationVisitor from '$generated/duration-visitor';

export class HoursStatementContext extends ParserRuleContext {
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

	public HOUR(): TerminalNode {
		return this.getToken(DurationParser.HOUR, 0);
	}

	public get ruleIndex(): number {
		return DurationParser.RULE_hoursStatement;
	}

	public enterRule(listener: DurationListener): void {
		if (listener.enterHoursStatement) {
			listener.enterHoursStatement(this);
		}
	}

	public exitRule(listener: DurationListener): void {
		if (listener.exitHoursStatement) {
			listener.exitHoursStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: DurationVisitor<Result>): Result {
		if (visitor.visitHoursStatement) {
			return visitor.visitHoursStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
