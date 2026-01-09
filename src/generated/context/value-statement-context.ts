import { ParserRuleContext, TerminalNode } from "antlr4";
import { DurationListener } from "$generated/duration-listener";
import DurationVisitor from "$generated/duration-visitor";
import { DurationParser } from "$generated/duration-parser";

export class ValueStatementContext extends ParserRuleContext {
  constructor(parser?: DurationParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }

  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public get ruleIndex(): number {
    return DurationParser.RULE_valueStatement;
  }

  public enterRule(listener: DurationListener): void {
    if (listener.enterValueStatement) {
      listener.enterValueStatement(this);
    }
  }

  public exitRule(listener: DurationListener): void {
    if (listener.exitValueStatement) {
      listener.exitValueStatement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: DurationVisitor<Result>): Result {
    if (visitor.visitValueStatement) {
      return visitor.visitValueStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
