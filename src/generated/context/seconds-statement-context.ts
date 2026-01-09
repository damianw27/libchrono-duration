import { ParserRuleContext, TerminalNode } from "antlr4";
import { DurationListener } from "$generated/duration-listener";
import DurationVisitor from "$generated/duration-visitor";
import { DurationParser } from "$generated/duration-parser";

export class SecondsStatementContext extends ParserRuleContext {
  constructor(parser?: DurationParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }

  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public SECOND(): TerminalNode {
    return this.getToken(DurationParser.SECOND, 0);
  }

  public get ruleIndex(): number {
    return DurationParser.RULE_secondsStatement;
  }

  public enterRule(listener: DurationListener): void {
    if (listener.enterSecondsStatement) {
      listener.enterSecondsStatement(this);
    }
  }

  public exitRule(listener: DurationListener): void {
    if (listener.exitSecondsStatement) {
      listener.exitSecondsStatement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: DurationVisitor<Result>): Result {
    if (visitor.visitSecondsStatement) {
      return visitor.visitSecondsStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
