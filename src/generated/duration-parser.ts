import {
	ATN,
	ATNDeserializer,
	type DecisionState,
	DFA,
	FailedPredicateException,
	NoViableAltException,
	Parser,
	ParserATNSimulator,
	PredictionContextCache,
	RecognitionException,
	Token,
	type TokenStream,
} from 'antlr4';
import { DaysStatementContext } from '$generated/context/days-statement-context';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';
import { DurationExpressionTailContext } from '$generated/context/duration-expression-tail-context';
import { DurationFactorContext } from '$generated/context/duration-factor-context';
import { DurationStatementContext } from '$generated/context/duration-statement-context';
import { DurationTermContext } from '$generated/context/duration-term-context';
import { DurationTermTailContext } from '$generated/context/duration-term-tail-context';
import { HoursStatementContext } from '$generated/context/hours-statement-context';
import { MillisecondsStatementContext } from '$generated/context/milliseconds-statement-context';
import { MinutesStatementContext } from '$generated/context/minutes-statement-context';
import { ParseDurationContext } from '$generated/context/parse-duration-context';
import { SecondsStatementContext } from '$generated/context/seconds-statement-context';
import { ValueStatementContext } from '$generated/context/value-statement-context';
import { WeeksStatementContext } from '$generated/context/weeks-statement-context';

export class DurationParser extends Parser {
	public static readonly ADD = 1;
	public static readonly SUB = 2;
	public static readonly MUL = 3;
	public static readonly DIV = 4;
	public static readonly LP = 5;
	public static readonly RP = 6;
	public static readonly WEEK = 7;
	public static readonly DAY = 8;
	public static readonly HOUR = 9;
	public static readonly MINUTE = 10;
	public static readonly SECOND = 11;
	public static readonly MILLISECONDS = 12;
	public static readonly NUMBER = 13;
	public static readonly WS = 14;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_parseDuration = 0;
	public static readonly RULE_durationExpression = 1;
	public static readonly RULE_durationExpressionTail = 2;
	public static readonly RULE_durationTerm = 3;
	public static readonly RULE_durationTermTail = 4;
	public static readonly RULE_durationFactor = 5;
	public static readonly RULE_durationStatement = 6;
	public static readonly RULE_weeksStatement = 7;
	public static readonly RULE_daysStatement = 8;
	public static readonly RULE_hoursStatement = 9;
	public static readonly RULE_minutesStatement = 10;
	public static readonly RULE_secondsStatement = 11;
	public static readonly RULE_millisecondsStatement = 12;
	public static readonly RULE_valueStatement = 13;

	public static readonly literalNames: (string | null)[] = [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		"'ms'",
	];

	public static readonly symbolicNames: (string | null)[] = [
		null,
		'ADD',
		'SUB',
		'MUL',
		'DIV',
		'LP',
		'RP',
		'WEEK',
		'DAY',
		'HOUR',
		'MINUTE',
		'SECOND',
		'MILLISECONDS',
		'NUMBER',
		'WS',
	];

	public static readonly ruleNames: string[] = [
		'parseDuration',
		'durationExpression',
		'durationExpressionTail',
		'durationTerm',
		'durationTermTail',
		'durationFactor',
		'durationStatement',
		'weeksStatement',
		'daysStatement',
		'hoursStatement',
		'minutesStatement',
		'secondsStatement',
		'millisecondsStatement',
		'valueStatement',
	];

	public get grammarFileName(): string {
		return 'Duration.g4';
	}

	public get literalNames(): (string | null)[] {
		return DurationParser.literalNames;
	}

	public get symbolicNames(): (string | null)[] {
		return DurationParser.symbolicNames;
	}

	public get ruleNames(): string[] {
		return DurationParser.ruleNames;
	}

	public get serializedATN(): number[] {
		return DurationParser._serializedATN;
	}

	protected createFailedPredicateException(
		predicate?: string,
		message?: string,
	): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(
			this,
			DurationParser._ATN,
			DurationParser.DecisionsToDFA,
			new PredictionContextCache(),
		);
	}

	// @RuleVersion(0)
	public parseDuration(): ParseDurationContext {
		const localctx: ParseDurationContext = new ParseDurationContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 0, DurationParser.RULE_parseDuration);
		try {
			this.state = 34;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 0, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
					{
						this.state = 28;
						this.durationStatement();
						this.state = 29;
						this.match(DurationParser.EOF);
					}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
					{
						this.state = 31;
						this.durationExpression();
						this.state = 32;
						this.match(DurationParser.EOF);
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public durationExpression(): DurationExpressionContext {
		const localctx: DurationExpressionContext = new DurationExpressionContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 2, DurationParser.RULE_durationExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			this.state = 36;
			this.durationTerm();
			this.state = 40;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					this.state = 37;
					this.durationExpressionTail();
				}
				this.state = 42;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public durationExpressionTail(): DurationExpressionTailContext {
		const localctx: DurationExpressionTailContext =
			new DurationExpressionTailContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, DurationParser.RULE_durationExpressionTail);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 43;
			_la = this._input.LA(1);
			if (!(_la === 1 || _la === 2)) {
				this._errHandler.recoverInline(this);
			} else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 44;
			this.durationExpression();
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public durationTerm(): DurationTermContext {
		const localctx: DurationTermContext = new DurationTermContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 6, DurationParser.RULE_durationTerm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 46;
			this.durationFactor();
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === 3 || _la === 4) {
				this.state = 47;
				this.durationTermTail();
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public durationTermTail(): DurationTermTailContext {
		const localctx: DurationTermTailContext = new DurationTermTailContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 8, DurationParser.RULE_durationTermTail);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 53;
			_la = this._input.LA(1);
			if (!(_la === 3 || _la === 4)) {
				this._errHandler.recoverInline(this);
			} else {
				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 54;
			this.valueStatement();
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public durationFactor(): DurationFactorContext {
		const localctx: DurationFactorContext = new DurationFactorContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 10, DurationParser.RULE_durationFactor);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case -1:
				case 1:
				case 2:
				case 3:
				case 4:
				case 6:
				case 13:
					this.enterOuterAlt(localctx, 1);
					{
						this.state = 56;
						this.durationStatement();
					}
					break;
				case 5:
					this.enterOuterAlt(localctx, 2);
					{
						this.state = 57;
						this.match(DurationParser.LP);
						this.state = 58;
						this.durationExpression();
						this.state = 59;
						this.match(DurationParser.RP);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public durationStatement(): DurationStatementContext {
		const localctx: DurationStatementContext = new DurationStatementContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 12, DurationParser.RULE_durationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 64;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
				case 1:
					{
						this.state = 63;
						this.weeksStatement();
					}
					break;
			}
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 5, this._ctx)) {
				case 1:
					{
						this.state = 66;
						this.daysStatement();
					}
					break;
			}
			this.state = 70;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
				case 1:
					{
						this.state = 69;
						this.hoursStatement();
					}
					break;
			}
			this.state = 73;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 7, this._ctx)) {
				case 1:
					{
						this.state = 72;
						this.minutesStatement();
					}
					break;
			}
			this.state = 76;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
				case 1:
					{
						this.state = 75;
						this.secondsStatement();
					}
					break;
			}
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === 13) {
				this.state = 78;
				this.millisecondsStatement();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public weeksStatement(): WeeksStatementContext {
		const localctx: WeeksStatementContext = new WeeksStatementContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 14, DurationParser.RULE_weeksStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 81;
			this.match(DurationParser.NUMBER);
			this.state = 82;
			this.match(DurationParser.WEEK);
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public daysStatement(): DaysStatementContext {
		const localctx: DaysStatementContext = new DaysStatementContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 16, DurationParser.RULE_daysStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 84;
			this.match(DurationParser.NUMBER);
			this.state = 85;
			this.match(DurationParser.DAY);
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public hoursStatement(): HoursStatementContext {
		const localctx: HoursStatementContext = new HoursStatementContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 18, DurationParser.RULE_hoursStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 87;
			this.match(DurationParser.NUMBER);
			this.state = 88;
			this.match(DurationParser.HOUR);
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public minutesStatement(): MinutesStatementContext {
		const localctx: MinutesStatementContext = new MinutesStatementContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 20, DurationParser.RULE_minutesStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 90;
			this.match(DurationParser.NUMBER);
			this.state = 91;
			this.match(DurationParser.MINUTE);
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public secondsStatement(): SecondsStatementContext {
		const localctx: SecondsStatementContext = new SecondsStatementContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 22, DurationParser.RULE_secondsStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 93;
			this.match(DurationParser.NUMBER);
			this.state = 94;
			this.match(DurationParser.SECOND);
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public millisecondsStatement(): MillisecondsStatementContext {
		const localctx: MillisecondsStatementContext =
			new MillisecondsStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, DurationParser.RULE_millisecondsStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 96;
			this.match(DurationParser.NUMBER);
			this.state = 97;
			this.match(DurationParser.MILLISECONDS);
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public valueStatement(): ValueStatementContext {
		const localctx: ValueStatementContext = new ValueStatementContext(
			this,
			this._ctx,
			this.state,
		);
		this.enterRule(localctx, 26, DurationParser.RULE_valueStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			this.state = 99;
			this.match(DurationParser.NUMBER);
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [
		4, 1, 14, 102, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
		2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2,
		11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
		3, 0, 35, 8, 0, 1, 1, 1, 1, 5, 1, 39, 8, 1, 10, 1, 12, 1, 42, 9, 1, 1, 2, 1,
		2, 1, 2, 1, 3, 1, 3, 5, 3, 49, 8, 3, 10, 3, 12, 3, 52, 9, 3, 1, 4, 1, 4, 1,
		4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 62, 8, 5, 1, 6, 3, 6, 65, 8, 6, 1, 6,
		3, 6, 68, 8, 6, 1, 6, 3, 6, 71, 8, 6, 1, 6, 3, 6, 74, 8, 6, 1, 6, 3, 6, 77,
		8, 6, 1, 6, 3, 6, 80, 8, 6, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9,
		1, 9, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 13,
		1, 13, 1, 13, 0, 0, 14, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26,
		0, 2, 1, 0, 1, 2, 1, 0, 3, 4, 97, 0, 34, 1, 0, 0, 0, 2, 36, 1, 0, 0, 0, 4,
		43, 1, 0, 0, 0, 6, 46, 1, 0, 0, 0, 8, 53, 1, 0, 0, 0, 10, 61, 1, 0, 0, 0,
		12, 64, 1, 0, 0, 0, 14, 81, 1, 0, 0, 0, 16, 84, 1, 0, 0, 0, 18, 87, 1, 0, 0,
		0, 20, 90, 1, 0, 0, 0, 22, 93, 1, 0, 0, 0, 24, 96, 1, 0, 0, 0, 26, 99, 1, 0,
		0, 0, 28, 29, 3, 12, 6, 0, 29, 30, 5, 0, 0, 1, 30, 35, 1, 0, 0, 0, 31, 32,
		3, 2, 1, 0, 32, 33, 5, 0, 0, 1, 33, 35, 1, 0, 0, 0, 34, 28, 1, 0, 0, 0, 34,
		31, 1, 0, 0, 0, 35, 1, 1, 0, 0, 0, 36, 40, 3, 6, 3, 0, 37, 39, 3, 4, 2, 0,
		38, 37, 1, 0, 0, 0, 39, 42, 1, 0, 0, 0, 40, 38, 1, 0, 0, 0, 40, 41, 1, 0, 0,
		0, 41, 3, 1, 0, 0, 0, 42, 40, 1, 0, 0, 0, 43, 44, 7, 0, 0, 0, 44, 45, 3, 2,
		1, 0, 45, 5, 1, 0, 0, 0, 46, 50, 3, 10, 5, 0, 47, 49, 3, 8, 4, 0, 48, 47, 1,
		0, 0, 0, 49, 52, 1, 0, 0, 0, 50, 48, 1, 0, 0, 0, 50, 51, 1, 0, 0, 0, 51, 7,
		1, 0, 0, 0, 52, 50, 1, 0, 0, 0, 53, 54, 7, 1, 0, 0, 54, 55, 3, 26, 13, 0,
		55, 9, 1, 0, 0, 0, 56, 62, 3, 12, 6, 0, 57, 58, 5, 5, 0, 0, 58, 59, 3, 2, 1,
		0, 59, 60, 5, 6, 0, 0, 60, 62, 1, 0, 0, 0, 61, 56, 1, 0, 0, 0, 61, 57, 1, 0,
		0, 0, 62, 11, 1, 0, 0, 0, 63, 65, 3, 14, 7, 0, 64, 63, 1, 0, 0, 0, 64, 65,
		1, 0, 0, 0, 65, 67, 1, 0, 0, 0, 66, 68, 3, 16, 8, 0, 67, 66, 1, 0, 0, 0, 67,
		68, 1, 0, 0, 0, 68, 70, 1, 0, 0, 0, 69, 71, 3, 18, 9, 0, 70, 69, 1, 0, 0, 0,
		70, 71, 1, 0, 0, 0, 71, 73, 1, 0, 0, 0, 72, 74, 3, 20, 10, 0, 73, 72, 1, 0,
		0, 0, 73, 74, 1, 0, 0, 0, 74, 76, 1, 0, 0, 0, 75, 77, 3, 22, 11, 0, 76, 75,
		1, 0, 0, 0, 76, 77, 1, 0, 0, 0, 77, 79, 1, 0, 0, 0, 78, 80, 3, 24, 12, 0,
		79, 78, 1, 0, 0, 0, 79, 80, 1, 0, 0, 0, 80, 13, 1, 0, 0, 0, 81, 82, 5, 13,
		0, 0, 82, 83, 5, 7, 0, 0, 83, 15, 1, 0, 0, 0, 84, 85, 5, 13, 0, 0, 85, 86,
		5, 8, 0, 0, 86, 17, 1, 0, 0, 0, 87, 88, 5, 13, 0, 0, 88, 89, 5, 9, 0, 0, 89,
		19, 1, 0, 0, 0, 90, 91, 5, 13, 0, 0, 91, 92, 5, 10, 0, 0, 92, 21, 1, 0, 0,
		0, 93, 94, 5, 13, 0, 0, 94, 95, 5, 11, 0, 0, 95, 23, 1, 0, 0, 0, 96, 97, 5,
		13, 0, 0, 97, 98, 5, 12, 0, 0, 98, 25, 1, 0, 0, 0, 99, 100, 5, 13, 0, 0,
		100, 27, 1, 0, 0, 0, 10, 34, 40, 50, 61, 64, 67, 70, 73, 76, 79,
	];

	private static __ATN: ATN;

	public static get _ATN(): ATN {
		if (!DurationParser.__ATN) {
			DurationParser.__ATN = new ATNDeserializer().deserialize(
				DurationParser._serializedATN,
			);
		}

		return DurationParser.__ATN;
	}

	static DecisionsToDFA = DurationParser._ATN.decisionToState.map(
		(ds: DecisionState, index: number) => new DFA(ds, index),
	);
}
