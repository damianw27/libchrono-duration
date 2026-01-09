import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import { TerminalNode } from 'antlr4';
import { ErrorNode } from 'antlr4';
import { ParserRuleContext } from 'antlr4';
import { DurationLexer } from '$generated/duration-lexer';
import { CharStreams, CommonTokenStream } from 'antlr4';
import { MillisecondsStatementContext } from '$generated/context/milliseconds-statement-context';
import { SecondsStatementContext } from '$generated/context/seconds-statement-context';
import { MinutesStatementContext } from '$generated/context/minutes-statement-context';
import { HoursStatementContext } from '$generated/context/hours-statement-context';
import { DaysStatementContext } from '$generated/context/days-statement-context';
import { WeeksStatementContext } from '$generated/context/weeks-statement-context';
import { DurationStatementContext } from '$generated/context/duration-statement-context';
import { DurationFactorContext } from '$generated/context/duration-factor-context';
import { DurationTermTailContext } from '$generated/context/duration-term-tail-context';
import { DurationTermContext } from '$generated/context/duration-term-context';
import { DurationExpressionTailContext } from '$generated/context/duration-expression-tail-context';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';
import { ParseDurationContext } from '$generated/context/parse-duration-context';
import { ValueStatementContext } from '$root/generated/context/value-statement-context';

describe('DurationListener', () => {
  const listener: Required<DurationListener> = {
    enterParseDuration: jest.fn((ctx: ParseDurationContext) => {}),
    exitParseDuration: jest.fn((ctx: ParseDurationContext) => {}),
    enterDurationExpression: jest.fn((ctx: DurationExpressionContext) => {}),
    exitDurationExpression: jest.fn((ctx: DurationExpressionContext) => {}),
    enterDurationExpressionTail: jest.fn((ctx: DurationExpressionTailContext) => {}),
    exitDurationExpressionTail: jest.fn((ctx: DurationExpressionTailContext) => {}),
    enterDurationTerm: jest.fn((ctx: DurationTermContext) => {}),
    exitDurationTerm: jest.fn((ctx: DurationTermContext) => {}),
    enterDurationTermTail: jest.fn((ctx: DurationTermTailContext) => {}),
    exitDurationTermTail: jest.fn((ctx: DurationTermTailContext) => {}),
    enterDurationFactor: jest.fn((ctx: DurationFactorContext) => {}),
    exitDurationFactor: jest.fn((ctx: DurationFactorContext) => {}),
    enterDurationStatement: jest.fn((ctx: DurationStatementContext) => {}),
    exitDurationStatement: jest.fn((ctx: DurationStatementContext) => {}),
    enterWeeksStatement: jest.fn((ctx: WeeksStatementContext) => {}),
    exitWeeksStatement: jest.fn((ctx: WeeksStatementContext) => {}),
    enterDaysStatement: jest.fn((ctx: DaysStatementContext) => {}),
    exitDaysStatement: jest.fn((ctx: DaysStatementContext) => {}),
    enterHoursStatement: jest.fn((ctx: HoursStatementContext) => {}),
    exitHoursStatement: jest.fn((ctx: HoursStatementContext) => {}),
    enterMinutesStatement: jest.fn((ctx: MinutesStatementContext) => {}),
    exitMinutesStatement: jest.fn((ctx: MinutesStatementContext) => {}),
    enterSecondsStatement: jest.fn((ctx: SecondsStatementContext) => {}),
    exitSecondsStatement: jest.fn((ctx: SecondsStatementContext) => {}),
    enterMillisecondsStatement: jest.fn((ctx: MillisecondsStatementContext) => {}),
    exitMillisecondsStatement: jest.fn((ctx: MillisecondsStatementContext) => {}),
    visitTerminal: jest.fn((node: TerminalNode) => {}),
    visitErrorNode: jest.fn((node: ErrorNode) => {}),
    enterEveryRule: jest.fn((ctx: ParserRuleContext) => {}),
    exitEveryRule: jest.fn((ctx: ParserRuleContext) => {}),
    enterValueStatement: (ctx: ValueStatementContext) => {},
    exitValueStatement: (ctx: ValueStatementContext) => {},
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
      const ctx = { getText: () => '3h' } as unknown as DurationExpressionContext;

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
      const ctx = { getText: () => '3h' } as unknown as DurationExpressionContext;

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
      const ctx = { getText: () => '3h' } as unknown as DurationExpressionTailContext;

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
      const ctx = { getText: () => '3h' } as unknown as DurationExpressionTailContext;

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
      const ctx = { getText: () => '3h' } as unknown as DurationStatementContext;

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
      const ctx = { getText: () => '3h' } as unknown as DurationStatementContext;

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
