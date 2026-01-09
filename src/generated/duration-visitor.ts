// Generated from ./src/antlr/Duration.g4 by ANTLR 4.13.2

import { ParseTreeVisitor } from "antlr4";

import { ParseDurationContext } from "$generated/context/parse-duration-context";
import { DurationExpressionContext } from "$generated/context/duration-expression-context";
import { DurationExpressionTailContext } from "$generated/context/duration-expression-tail-context";
import { DurationTermContext } from "$generated/context/duration-term-context";
import { DurationTermTailContext } from "$generated/context/duration-term-tail-context";
import { DurationFactorContext } from "$generated/context/duration-factor-context";
import { DurationStatementContext } from "$generated/context/duration-statement-context";
import { WeeksStatementContext } from "$generated/context/weeks-statement-context";
import { DaysStatementContext } from "$generated/context/days-statement-context";
import { HoursStatementContext } from "$generated/context/hours-statement-context";
import { MinutesStatementContext } from "$generated/context/minutes-statement-context";
import { SecondsStatementContext } from "$generated/context/seconds-statement-context";
import { MillisecondsStatementContext } from "$generated/context/milliseconds-statement-context";
import { ValueStatementContext } from "$generated/context/value-statement-context";

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DurationParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class DurationVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `DurationParser.parseDuration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParseDuration?: (ctx: ParseDurationContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.durationExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDurationExpression?: (ctx: DurationExpressionContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.durationExpressionTail`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDurationExpressionTail?: (ctx: DurationExpressionTailContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.durationTerm`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDurationTerm?: (ctx: DurationTermContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.durationTermTail`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDurationTermTail?: (ctx: DurationTermTailContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.durationFactor`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDurationFactor?: (ctx: DurationFactorContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.durationStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDurationStatement?: (ctx: DurationStatementContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.weeksStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWeeksStatement?: (ctx: WeeksStatementContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.daysStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDaysStatement?: (ctx: DaysStatementContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.hoursStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHoursStatement?: (ctx: HoursStatementContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.minutesStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMinutesStatement?: (ctx: MinutesStatementContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.secondsStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSecondsStatement?: (ctx: SecondsStatementContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.millisecondsStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMillisecondsStatement?: (ctx: MillisecondsStatementContext) => Result;
  /**
   * Visit a parse tree produced by `DurationParser.valueStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValueStatement?: (ctx: ValueStatementContext) => Result;
}
