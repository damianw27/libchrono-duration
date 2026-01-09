import { ParserRuleContext } from "antlr4";
import { DurationListener } from "$generated/duration-listener";
import DurationVisitor from "$generated/duration-visitor";
import {
  DurationParser,



} from "$generated/duration-parser";
import { WeeksStatementContext } from "$generated/context/weeks-statement-context";
import { DaysStatementContext } from "$generated/context/days-statement-context";
import { HoursStatementContext } from "$generated/context/hours-statement-context";
import { MinutesStatementContext } from "$generated/context/minutes-statement-context";
import { SecondsStatementContext } from "$generated/context/seconds-statement-context";
import { MillisecondsStatementContext } from "$generated/context/milliseconds-statement-context";

export class DurationStatementContext extends ParserRuleContext {
  constructor(parser?: DurationParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }

  public weeksStatement(): WeeksStatementContext {
    return this.getTypedRuleContext(WeeksStatementContext, 0) as WeeksStatementContext;
  }

  public daysStatement(): DaysStatementContext {
    return this.getTypedRuleContext(DaysStatementContext, 0) as DaysStatementContext;
  }

  public hoursStatement(): HoursStatementContext {
    return this.getTypedRuleContext(HoursStatementContext, 0) as HoursStatementContext;
  }

  public minutesStatement(): MinutesStatementContext {
    return this.getTypedRuleContext(MinutesStatementContext, 0) as MinutesStatementContext;
  }

  public secondsStatement(): SecondsStatementContext {
    return this.getTypedRuleContext(SecondsStatementContext, 0) as SecondsStatementContext;
  }

  public millisecondsStatement(): MillisecondsStatementContext {
    return this.getTypedRuleContext(
      MillisecondsStatementContext,
      0,
    ) as MillisecondsStatementContext;
  }

  public get ruleIndex(): number {
    return DurationParser.RULE_durationStatement;
  }

  public enterRule(listener: DurationListener): void {
    if (listener.enterDurationStatement) {
      listener.enterDurationStatement(this);
    }
  }

  public exitRule(listener: DurationListener): void {
    if (listener.exitDurationStatement) {
      listener.exitDurationStatement(this);
    }
  }

  // @Override
  public accept<Result>(visitor: DurationVisitor<Result>): Result {
    if (visitor.visitDurationStatement) {
      return visitor.visitDurationStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
