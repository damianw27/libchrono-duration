import { ParserRuleContext, TerminalNode } from "antlr4";
import { DurationListener } from "$generated/duration-listener";
import DurationVisitor from "$generated/duration-visitor";
import { DurationParser } from "$generated/duration-parser";

export class MinutesStatementContext extends ParserRuleContext {
  constructor(parser?: DurationParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }

  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public MINUTE(): TerminalNode {
    return this.getToken(DurationParser.MINUTE, 0);
  }

  public get ruleIndex(): number {
    return DurationParser.RULE_minutesStatement;
  }

  public enterRule(listener: DurationListener): void {
    if (listener.enterMinutesStatement) {
      listener.enterMinutesStatement(this);
    }
  }

  public exitRule(listener: DurationListener): void {
    if (listener.exitMinutesStatement) {
      listener.exitMinutesStatement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: DurationVisitor<Result>): Result {
    if (visitor.visitMinutesStatement) {
      return visitor.visitMinutesStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
