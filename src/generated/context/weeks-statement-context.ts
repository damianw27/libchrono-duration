import { ParserRuleContext, type TerminalNode } from 'antlr4';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import type DurationVisitor from '$generated/duration-visitor';

export class WeeksStatementContext extends ParserRuleContext {
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

	public WEEK(): TerminalNode {
		return this.getToken(DurationParser.WEEK, 0);
	}

	public get ruleIndex(): number {
		return DurationParser.RULE_weeksStatement;
	}

	public enterRule(listener: DurationListener): void {
		if (listener.enterWeeksStatement) {
			listener.enterWeeksStatement(this);
		}
	}

	public exitRule(listener: DurationListener): void {
		if (listener.exitWeeksStatement) {
			listener.exitWeeksStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: DurationVisitor<Result>): Result {
		if (visitor.visitWeeksStatement) {
			return visitor.visitWeeksStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
