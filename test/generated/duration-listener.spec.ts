import {
	CharStreams,
	CommonTokenStream,
	type ErrorNode,
	type ParserRuleContext,
	type TerminalNode,
} from 'antlr4';
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
import type { WeeksStatementContext } from '$generated/context/weeks-statement-context';
import { DurationLexer } from '$generated/duration-lexer';
import type { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import type { ValueStatementContext } from '$root/generated/context/value-statement-context';

describe('DurationListener', () => {
	const listener: Required<DurationListener> = {
		enterParseDuration: jest.fn((_ctx: ParseDurationContext) => {}),
		exitParseDuration: jest.fn((_ctx: ParseDurationContext) => {}),
		enterDurationExpression: jest.fn((_ctx: DurationExpressionContext) => {}),
		exitDurationExpression: jest.fn((_ctx: DurationExpressionContext) => {}),
		enterDurationExpressionTail: jest.fn(
			(_ctx: DurationExpressionTailContext) => {},
		),
		exitDurationExpressionTail: jest.fn(
			(_ctx: DurationExpressionTailContext) => {},
		),
		enterDurationTerm: jest.fn((_ctx: DurationTermContext) => {}),
		exitDurationTerm: jest.fn((_ctx: DurationTermContext) => {}),
		enterDurationTermTail: jest.fn((_ctx: DurationTermTailContext) => {}),
		exitDurationTermTail: jest.fn((_ctx: DurationTermTailContext) => {}),
		enterDurationFactor: jest.fn((_ctx: DurationFactorContext) => {}),
		exitDurationFactor: jest.fn((_ctx: DurationFactorContext) => {}),
		enterDurationStatement: jest.fn((_ctx: DurationStatementContext) => {}),
		exitDurationStatement: jest.fn((_ctx: DurationStatementContext) => {}),
		enterWeeksStatement: jest.fn((_ctx: WeeksStatementContext) => {}),
		exitWeeksStatement: jest.fn((_ctx: WeeksStatementContext) => {}),
		enterDaysStatement: jest.fn((_ctx: DaysStatementContext) => {}),
		exitDaysStatement: jest.fn((_ctx: DaysStatementContext) => {}),
		enterHoursStatement: jest.fn((_ctx: HoursStatementContext) => {}),
		exitHoursStatement: jest.fn((_ctx: HoursStatementContext) => {}),
		enterMinutesStatement: jest.fn((_ctx: MinutesStatementContext) => {}),
		exitMinutesStatement: jest.fn((_ctx: MinutesStatementContext) => {}),
		enterSecondsStatement: jest.fn((_ctx: SecondsStatementContext) => {}),
		exitSecondsStatement: jest.fn((_ctx: SecondsStatementContext) => {}),
		enterMillisecondsStatement: jest.fn(
			(_ctx: MillisecondsStatementContext) => {},
		),
		exitMillisecondsStatement: jest.fn(
			(_ctx: MillisecondsStatementContext) => {},
		),
		visitTerminal: jest.fn((_node: TerminalNode) => {}),
		visitErrorNode: jest.fn((_node: ErrorNode) => {}),
		enterEveryRule: jest.fn((_ctx: ParserRuleContext) => {}),
		exitEveryRule: jest.fn((_ctx: ParserRuleContext) => {}),
		enterValueStatement: (_ctx: ValueStatementContext) => {},
		exitValueStatement: (_ctx: ValueStatementContext) => {},
	};

	const grammarExample = '1d 1h 1m 1s 1ms';

	const getParserWithAddedListener = (): DurationParser => {
		const input = CharStreams.fromString(grammarExample);
		const lexer = new DurationLexer(input);
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new DurationParser(tokenStream);
		parser.addParseListener(listener);
		return parser;
	};

	describe('enterParseDuration', () => {
		test('should be called with correct context', () => {
			const ctx = { getText: () => '3h' } as unknown as ParseDurationContext;

			listener.enterParseDuration(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.enterParseDuration).toHaveBeenCalledTimes(2);
		});
	});

	describe('exitParseDuration', () => {
		test('should be called with correct context', () => {
			const ctx = { getText: () => '3h' } as unknown as ParseDurationContext;

			listener.exitParseDuration(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.exitParseDuration).toHaveBeenCalledTimes(3);
		});
	});

	describe('enterDurationExpression', () => {
		test('should be called with correct context', () => {
			const ctx = {
				getText: () => '3h',
			} as unknown as DurationExpressionContext;

			listener.enterDurationExpression(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.enterDurationExpression).toHaveBeenCalledTimes(1);
		});
	});

	describe('exitDurationExpression', () => {
		test('should be called with correct context', () => {
			const ctx = {
				getText: () => '3h',
			} as unknown as DurationExpressionContext;

			listener.exitDurationExpression(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.exitDurationExpression).toHaveBeenCalledTimes(1);
		});
	});

	describe('enterDurationExpressionTail', () => {
		test('should be called with correct context', () => {
			const ctx = {
				getText: () => '3h',
			} as unknown as DurationExpressionTailContext;

			listener.enterDurationExpressionTail(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.enterDurationExpressionTail).toHaveBeenCalledTimes(1);
		});
	});

	describe('exitDurationExpressionTail', () => {
		test('should be called with correct context', () => {
			const ctx = {
				getText: () => '3h',
			} as unknown as DurationExpressionTailContext;

			listener.exitDurationExpressionTail(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.exitDurationExpressionTail).toHaveBeenCalledTimes(1);
		});
	});

	describe('enterDurationTerm', () => {
		test('should be called with correct context', () => {
			const ctx = { getText: () => '3h' } as unknown as DurationTermContext;

			listener.enterDurationTerm(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.enterDurationTerm).toHaveBeenCalledTimes(1);
		});
	});

	describe('exitDurationTerm', () => {
		test('should be called with correct context', () => {
			const ctx = { getText: () => '3h' } as unknown as DurationTermContext;

			listener.exitDurationTerm(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.exitDurationTerm).toHaveBeenCalledTimes(1);
		});
	});

	describe('enterDurationTermTail', () => {
		test('should be called with correct context', () => {
			const ctx = { getText: () => '3h' } as unknown as DurationTermTailContext;

			listener.enterDurationTermTail(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.enterDurationTermTail).toHaveBeenCalledTimes(1);
		});
	});

	describe('exitDurationTermTail', () => {
		test('should be called with correct context', () => {
			const ctx = { getText: () => '3h' } as unknown as DurationTermTailContext;

			listener.exitDurationTermTail(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.exitDurationTermTail).toHaveBeenCalledTimes(1);
		});
	});

	describe('enterDurationFactor', () => {
		test('should be called with correct context', () => {
			const ctx = { getText: () => '3h' } as unknown as DurationFactorContext;

			listener.enterDurationFactor(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.enterDurationFactor).toHaveBeenCalledTimes(1);
		});
	});

	describe('exitDurationFactor', () => {
		test('should be called with correct context', () => {
			const ctx = { getText: () => '3h' } as unknown as DurationFactorContext;

			listener.exitDurationFactor(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.exitDurationFactor).toHaveBeenCalledTimes(1);
		});
	});

	describe('enterDurationStatement', () => {
		test('should be called with correct context', () => {
			const ctx = {
				getText: () => '3h',
			} as unknown as DurationStatementContext;

			listener.enterDurationStatement(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.enterDurationStatement).toHaveBeenCalledTimes(14);
		});
	});

	describe('exitDurationStatement', () => {
		test('should be called with correct context', () => {
			const ctx = {
				getText: () => '3h',
			} as unknown as DurationStatementContext;

			listener.exitDurationStatement(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.exitDurationStatement).toHaveBeenCalledTimes(15);
		});
	});

	describe('enterWeeksStatement', () => {
		test('should be called with correct context', () => {
			const ctx = { getText: () => '3h' } as unknown as WeeksStatementContext;

			listener.enterWeeksStatement(ctx);

			expect(ctx.getText()).toEqual('3h');
		});

		test('should be called in parser context', () => {
			const parser = getParserWithAddedListener();

			parser.parseDuration();

			expect(listener.enterWeeksStatement).toHaveBeenCalledTimes(1);
		});
	});
});
