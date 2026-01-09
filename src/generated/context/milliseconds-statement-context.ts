import { ParserRuleContext, TerminalNode } from "antlr4";
import { DurationListener } from "$generated/duration-listener";
import DurationVisitor from "$generated/duration-visitor";
import { DurationParser } from "$generated/duration-parser";

export class MillisecondsStatementContext extends ParserRuleContext {
  constructor(parser?: DurationParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }

  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public MILLISECONDS(): TerminalNode {
    return this.getToken(DurationParser.MILLISECONDS, 0);
  }

  public get ruleIndex(): number {
    return DurationParser.RULE_millisecondsStatement;
  }

  public enterRule(listener: DurationListener): void {
    if (listener.enterMillisecondsStatement) {
      listener.enterMillisecondsStatement(this);
    }
  }

  public exitRule(listener: DurationListener): void {
    if (listener.exitMillisecondsStatement) {
      listener.exitMillisecondsStatement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: DurationVisitor<Result>): Result {
    if (visitor.visitMillisecondsStatement) {
      return visitor.visitMillisecondsStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
