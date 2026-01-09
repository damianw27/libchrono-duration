import { ParserRuleContext, TerminalNode } from "antlr4";
import { DurationExpressionContext } from "$generated/context/duration-expression-context";
import { DurationListener } from "$generated/duration-listener";
import DurationVisitor from "$generated/duration-visitor";
import { DurationParser } from "$generated/duration-parser";
import { DurationStatementContext } from "$generated/context/duration-statement-context";

export class DurationFactorContext extends ParserRuleContext {
  constructor(parser?: DurationParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }

  public durationStatement(): DurationStatementContext {
    return this.getTypedRuleContext(DurationStatementContext, 0) as DurationStatementContext;
  }

  public LP(): TerminalNode {
    return this.getToken(DurationParser.LP, 0);
  }

  public durationExpression(): DurationExpressionContext {
    return this.getTypedRuleContext(DurationExpressionContext, 0) as DurationExpressionContext;
  }

  public RP(): TerminalNode {
    return this.getToken(DurationParser.RP, 0);
  }

  public get ruleIndex(): number {
    return DurationParser.RULE_durationFactor;
  }

  public enterRule(listener: DurationListener): void {
    if (listener.enterDurationFactor) {
      listener.enterDurationFactor(this);
    }
  }

  public exitRule(listener: DurationListener): void {
    if (listener.exitDurationFactor) {
      listener.exitDurationFactor(this);
    }
  }

  // @Override
  public accept<Result>(visitor: DurationVisitor<Result>): Result {
    if (visitor.visitDurationFactor) {
      return visitor.visitDurationFactor(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
