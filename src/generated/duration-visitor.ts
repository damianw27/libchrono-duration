// Generated from ./src/antlr/Duration.g4 by ANTLR 4.13.2

import { ParseTreeVisitor } from 'antlr4';
import type { DaysStatementContext } from '$generated/context/days-statement-context';
import type { DurationExpressionContext } from '$generated/context/duration-expression-context';
import type { DurationExpressionTailContext } from '$generated/context/duration-expression-tail-context';
import type { DurationFactorContext } from '$generated/context/duration-factor-context';
import type { DurationStatementContext } from '$generated/context/duration-statement-context';
import type { DurationTermContext } from '$generated/context/duration-term-context';
import type { DurationTermTailContext } from '$generated/context/duration-term-tail-context';
import type { HoursStatementContext } from '$generated/context/hours-statement-context';
import type { MillisecondsStatementContext } from '$generated/context/milliseconds-statement-context';
import type { MinutesStatementContext } from '$generated/context/minutes-statement-context';
import type { ParseDurationContext } from '$generated/context/parse-duration-context';
import type { SecondsStatementContext } from '$generated/context/seconds-statement-context';
import type { ValueStatementContext } from '$generated/context/value-statement-context';
import type { WeeksStatementContext } from '$generated/context/weeks-statement-context';

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
