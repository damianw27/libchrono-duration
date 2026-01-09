import { ParserRuleContext, TerminalNode } from "antlr4";
import { DurationListener } from "$generated/duration-listener";
import DurationVisitor from "$generated/duration-visitor";
import {
  DurationParser,

} from "$generated/duration-parser";
import { DurationExpressionContext } from "$generated/context/duration-expression-context";
import { DurationStatementContext } from "$generated/context/duration-statement-context";

export class ParseDurationContext extends ParserRuleContext {
  constructor(parser?: DurationParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }

  public durationStatement(): DurationStatementContext {
    return this.getTypedRuleContext(DurationStatementContext, 0) as DurationStatementContext;
  }

  public EOF(): TerminalNode {
    return this.getToken(DurationParser.EOF, 0);
  }

  public durationExpression(): DurationExpressionContext {
    return this.getTypedRuleContext(DurationExpressionContext, 0) as DurationExpressionContext;
  }

  public get ruleIndex(): number {
    return DurationParser.RULE_parseDuration;
  }

  public enterRule(listener: DurationListener): void {
    if (listener.enterParseDuration) {
      listener.enterParseDuration(this);
    }
  }

  public exitRule(listener: DurationListener): void {
    if (listener.exitParseDuration) {
      listener.exitParseDuration(this);
    }
  }

  // @Override
  public accept<Result>(visitor: DurationVisitor<Result>): Result {
    if (visitor.visitParseDuration) {
      return visitor.visitParseDuration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
