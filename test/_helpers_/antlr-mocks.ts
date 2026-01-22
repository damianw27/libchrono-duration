import type { TerminalNode } from 'antlr4';
import type { DurationExpressionContext } from '$generated/context/duration-expression-context';
import type { DurationExpressionTailContext } from '$generated/context/duration-expression-tail-context';
import type { DurationFactorContext } from '$generated/context/duration-factor-context';
import type { DurationStatementContext } from '$generated/context/duration-statement-context';
import type { DurationTermContext } from '$generated/context/duration-term-context';
import type { DurationTermTailContext } from '$generated/context/duration-term-tail-context';
import type { ParseDurationContext } from '$generated/context/parse-duration-context';
import type { DurationContext } from '$terms/duration-statement';
import { ExpressionOperator } from '$terms/types/expression-operator';
import { TermOperator } from '$terms/types/term-operator';

const mockDurationUnitContext = (text?: string): DurationContext =>
	({ text, getText: () => text }) as unknown as DurationContext;

const mockTerminalNode = (text: string): TerminalNode =>
	({ text, getText: () => text }) as unknown as TerminalNode;

export class AntlrMocks {
	public durationStatementContextEmptyMock: DurationStatementContext = {
		weeksStatement: () => null,
		daysStatement: () => null,
		hoursStatement: () => null,
		minutesStatement: () => null,
		secondsStatement: () => null,
		millisecondsStatement: () => null,
	} as unknown as DurationStatementContext;

	public durationStatementContextUnrecognizedMock: DurationStatementContext = {
		weeksStatement: () => null,
		daysStatement: () => mockDurationUnitContext('2d'),
		hoursStatement: () => null,
		minutesStatement: () => mockDurationUnitContext('4m'),
		secondsStatement: () => mockDurationUnitContext('5s'),
		millisecondsStatement: () => mockDurationUnitContext('100ms'),
		unrecognizedStatement: () => mockDurationUnitContext('1ur'),
	} as unknown as DurationStatementContext;

	public durationStatementContextZeroMock: DurationStatementContext = {
		weeksStatement: () => mockDurationUnitContext('0w'),
		daysStatement: () => mockDurationUnitContext('0d'),
		hoursStatement: () => mockDurationUnitContext('0h'),
		minutesStatement: () => mockDurationUnitContext('0m'),
		secondsStatement: () => mockDurationUnitContext('0s'),
		millisecondsStatement: () => mockDurationUnitContext('0ms'),
	} as unknown as DurationStatementContext;

	public durationStatementContext1Mock: DurationStatementContext = {
		weeksStatement: () => mockDurationUnitContext('1w'),
		daysStatement: () => mockDurationUnitContext('2d'),
		hoursStatement: () => mockDurationUnitContext('3h'),
		minutesStatement: () => mockDurationUnitContext('4m'),
		secondsStatement: () => mockDurationUnitContext('5s'),
		millisecondsStatement: () => mockDurationUnitContext('100ms'),
	} as unknown as DurationStatementContext;

	public durationStatementContext2Mock: DurationStatementContext = {
		weeksStatement: () => null,
		daysStatement: () => mockDurationUnitContext('2d'),
		hoursStatement: () => null,
		minutesStatement: () => mockDurationUnitContext('4m'),
		secondsStatement: () => mockDurationUnitContext('5s'),
		millisecondsStatement: () => mockDurationUnitContext('100ms'),
	} as unknown as DurationStatementContext;

	public durationFactorContextStatement1Mock: DurationFactorContext = {
		durationStatement: () => this.durationStatementContext1Mock,
		durationExpression: () => null,
	} as unknown as DurationFactorContext;

	public durationFactorContextStatement2Mock: DurationFactorContext = {
		durationStatement: () => this.durationStatementContext2Mock,
		durationExpression: () => null,
	} as unknown as DurationFactorContext;

	public durationTermTailDivContextMock: DurationTermTailContext = {
		DIV: () => TermOperator.DIV,
		valueStatement: () => mockTerminalNode('2'),
	} as unknown as DurationTermTailContext;

	public durationTermTailMulContextMock: DurationTermTailContext = {
		DIV: () => null,
		valueStatement: () => mockTerminalNode('4'),
	} as unknown as DurationTermTailContext;

	public durationTermContext1Mock: DurationTermContext = {
		durationFactor: () => this.durationFactorContextStatement1Mock,
		durationTermTail_list: () => [
			this.durationTermTailDivContextMock,
			this.durationTermTailMulContextMock,
		],
	} as unknown as DurationTermContext;

	public durationTermContext2Mock: DurationTermContext = {
		durationFactor: () => this.durationFactorContextStatement2Mock,
		durationTermTail_list: () => [],
	} as unknown as DurationTermContext;

	public durationExpressionContext1Mock: DurationExpressionContext = {
		durationTerm: () => this.durationTermContext1Mock,
		durationExpressionTail_list: () => [],
	} as unknown as DurationExpressionContext;

	public durationExpressionTailContextAddMock: DurationExpressionTailContext = {
		ADD: () => ExpressionOperator.ADD,
		durationExpression: () => this.durationExpressionContext1Mock,
	} as unknown as DurationExpressionTailContext;

	public durationExpressionTailContextSubMock: DurationExpressionTailContext = {
		ADD: () => null,
		durationExpression: () => this.durationExpressionContext1Mock,
	} as unknown as DurationExpressionTailContext;

	public durationExpressionContextNoTailsMock: DurationExpressionContext = {
		durationTerm: () => this.durationTermContext2Mock,
		durationExpressionTail_list: () => [],
	} as unknown as DurationExpressionContext;

	public durationExpressionContextOneTailMock: DurationExpressionContext = {
		durationTerm: () => this.durationTermContext2Mock,
		durationExpressionTail_list: () => [
			this.durationExpressionTailContextAddMock,
		],
	} as unknown as DurationExpressionContext;

	public durationExpressionContextMultipleTailMock: DurationExpressionContext =
		{
			durationTerm: () => this.durationTermContext2Mock,
			durationExpressionTail_list: () => [
				this.durationExpressionTailContextAddMock,
				this.durationExpressionTailContextSubMock,
			],
		} as unknown as DurationExpressionContext;

	public durationFactorContextEmptyMock: DurationFactorContext = {
		durationStatement: () => null,
		durationExpression: () => null,
	} as unknown as DurationFactorContext;

	public durationFactorContextAddMock: DurationFactorContext = {
		durationStatement: () => null,
		durationExpression: () => this.durationExpressionContextOneTailMock,
	} as unknown as DurationFactorContext;

	public parseDurationContextEmptyMock: ParseDurationContext = {
		durationStatement: () => null,
		durationExpression: () => null,
	} as unknown as ParseDurationContext;

	public parseDurationContextDefinedMock: ParseDurationContext = {
		durationStatement: () => this.durationStatementContext1Mock,
		durationExpression: () => this.durationExpressionContextNoTailsMock,
	} as unknown as ParseDurationContext;
}
