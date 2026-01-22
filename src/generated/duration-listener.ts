import { ParseTreeListener } from 'antlr4';
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

export class DurationListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DurationParser.parseDuration`.
	 * @param ctx the parse tree
	 */
	enterParseDuration?: (ctx: ParseDurationContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.parseDuration`.
	 * @param ctx the parse tree
	 */
	exitParseDuration?: (ctx: ParseDurationContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.durationExpression`.
	 * @param ctx the parse tree
	 */
	enterDurationExpression?: (ctx: DurationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.durationExpression`.
	 * @param ctx the parse tree
	 */
	exitDurationExpression?: (ctx: DurationExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.durationExpressionTail`.
	 * @param ctx the parse tree
	 */
	enterDurationExpressionTail?: (ctx: DurationExpressionTailContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.durationExpressionTail`.
	 * @param ctx the parse tree
	 */
	exitDurationExpressionTail?: (ctx: DurationExpressionTailContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.durationTerm`.
	 * @param ctx the parse tree
	 */
	enterDurationTerm?: (ctx: DurationTermContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.durationTerm`.
	 * @param ctx the parse tree
	 */
	exitDurationTerm?: (ctx: DurationTermContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.durationTermTail`.
	 * @param ctx the parse tree
	 */
	enterDurationTermTail?: (ctx: DurationTermTailContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.durationTermTail`.
	 * @param ctx the parse tree
	 */
	exitDurationTermTail?: (ctx: DurationTermTailContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.durationFactor`.
	 * @param ctx the parse tree
	 */
	enterDurationFactor?: (ctx: DurationFactorContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.durationFactor`.
	 * @param ctx the parse tree
	 */
	exitDurationFactor?: (ctx: DurationFactorContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.durationStatement`.
	 * @param ctx the parse tree
	 */
	enterDurationStatement?: (ctx: DurationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.durationStatement`.
	 * @param ctx the parse tree
	 */
	exitDurationStatement?: (ctx: DurationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.weeksStatement`.
	 * @param ctx the parse tree
	 */
	enterWeeksStatement?: (ctx: WeeksStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.weeksStatement`.
	 * @param ctx the parse tree
	 */
	exitWeeksStatement?: (ctx: WeeksStatementContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.daysStatement`.
	 * @param ctx the parse tree
	 */
	enterDaysStatement?: (ctx: DaysStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.daysStatement`.
	 * @param ctx the parse tree
	 */
	exitDaysStatement?: (ctx: DaysStatementContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.hoursStatement`.
	 * @param ctx the parse tree
	 */
	enterHoursStatement?: (ctx: HoursStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.hoursStatement`.
	 * @param ctx the parse tree
	 */
	exitHoursStatement?: (ctx: HoursStatementContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.minutesStatement`.
	 * @param ctx the parse tree
	 */
	enterMinutesStatement?: (ctx: MinutesStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.minutesStatement`.
	 * @param ctx the parse tree
	 */
	exitMinutesStatement?: (ctx: MinutesStatementContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.secondsStatement`.
	 * @param ctx the parse tree
	 */
	enterSecondsStatement?: (ctx: SecondsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.secondsStatement`.
	 * @param ctx the parse tree
	 */
	exitSecondsStatement?: (ctx: SecondsStatementContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.millisecondsStatement`.
	 * @param ctx the parse tree
	 */
	enterMillisecondsStatement?: (ctx: MillisecondsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.millisecondsStatement`.
	 * @param ctx the parse tree
	 */
	exitMillisecondsStatement?: (ctx: MillisecondsStatementContext) => void;
	/**
	 * Enter a parse tree produced by `DurationParser.valueStatement`.
	 * @param ctx the parse tree
	 */
	enterValueStatement?: (ctx: ValueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DurationParser.valueStatement`.
	 * @param ctx the parse tree
	 */
	exitValueStatement?: (ctx: ValueStatementContext) => void;
}
