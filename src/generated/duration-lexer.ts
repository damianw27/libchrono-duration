import {
	type ATN,
	ATNDeserializer,
	type CharStream,
	type DecisionState,
	DFA,
	Lexer,
	LexerATNSimulator,
	PredictionContextCache,
	Token,
} from 'antlr4';

export class DurationLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [
		'DEFAULT_TOKEN_CHANNEL',
		'HIDDEN',
	];

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

	public static readonly modeNames: string[] = ['DEFAULT_MODE'];

	public static readonly ruleNames: string[] = [
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

	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(
			this,
			DurationLexer._ATN,
			DurationLexer.DecisionsToDFA,
			new PredictionContextCache(),
		);
	}

	public get grammarFileName(): string {
		return 'Duration.g4';
	}

	public get literalNames(): (string | null)[] {
		return DurationLexer.literalNames;
	}

	public get symbolicNames(): (string | null)[] {
		return DurationLexer.symbolicNames;
	}

	public get ruleNames(): string[] {
		return DurationLexer.ruleNames;
	}

	public get serializedATN(): number[] {
		return DurationLexer._serializedATN;
	}

	public get channelNames(): string[] {
		return DurationLexer.channelNames;
	}

	public get modeNames(): string[] {
		return DurationLexer.modeNames;
	}

	public static readonly _serializedATN: number[] = [
		4, 0, 14, 75, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4,
		7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7,
		10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2,
		1, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1,
		8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 12, 4, 12, 56, 8, 12,
		11, 12, 12, 12, 57, 1, 12, 1, 12, 5, 12, 62, 8, 12, 10, 12, 12, 12, 65, 9,
		12, 3, 12, 67, 8, 12, 1, 13, 4, 13, 70, 8, 13, 11, 13, 12, 13, 71, 1, 13, 1,
		13, 0, 0, 14, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19,
		10, 21, 11, 23, 12, 25, 13, 27, 14, 1, 0, 13, 1, 0, 43, 43, 1, 0, 45, 45, 1,
		0, 42, 42, 1, 0, 47, 47, 1, 0, 40, 40, 1, 0, 41, 41, 1, 0, 119, 119, 1, 0,
		100, 100, 1, 0, 104, 104, 1, 0, 109, 109, 1, 0, 115, 115, 1, 0, 48, 57, 3,
		0, 9, 10, 13, 13, 32, 32, 78, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1,
		0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0,
		0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0,
		0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27, 1, 0, 0, 0, 1, 29, 1, 0,
		0, 0, 3, 31, 1, 0, 0, 0, 5, 33, 1, 0, 0, 0, 7, 35, 1, 0, 0, 0, 9, 37, 1, 0,
		0, 0, 11, 39, 1, 0, 0, 0, 13, 41, 1, 0, 0, 0, 15, 43, 1, 0, 0, 0, 17, 45, 1,
		0, 0, 0, 19, 47, 1, 0, 0, 0, 21, 49, 1, 0, 0, 0, 23, 51, 1, 0, 0, 0, 25, 55,
		1, 0, 0, 0, 27, 69, 1, 0, 0, 0, 29, 30, 7, 0, 0, 0, 30, 2, 1, 0, 0, 0, 31,
		32, 7, 1, 0, 0, 32, 4, 1, 0, 0, 0, 33, 34, 7, 2, 0, 0, 34, 6, 1, 0, 0, 0,
		35, 36, 7, 3, 0, 0, 36, 8, 1, 0, 0, 0, 37, 38, 7, 4, 0, 0, 38, 10, 1, 0, 0,
		0, 39, 40, 7, 5, 0, 0, 40, 12, 1, 0, 0, 0, 41, 42, 7, 6, 0, 0, 42, 14, 1, 0,
		0, 0, 43, 44, 7, 7, 0, 0, 44, 16, 1, 0, 0, 0, 45, 46, 7, 8, 0, 0, 46, 18, 1,
		0, 0, 0, 47, 48, 7, 9, 0, 0, 48, 20, 1, 0, 0, 0, 49, 50, 7, 10, 0, 0, 50,
		22, 1, 0, 0, 0, 51, 52, 5, 109, 0, 0, 52, 53, 5, 115, 0, 0, 53, 24, 1, 0, 0,
		0, 54, 56, 7, 11, 0, 0, 55, 54, 1, 0, 0, 0, 56, 57, 1, 0, 0, 0, 57, 55, 1,
		0, 0, 0, 57, 58, 1, 0, 0, 0, 58, 66, 1, 0, 0, 0, 59, 63, 5, 46, 0, 0, 60,
		62, 7, 11, 0, 0, 61, 60, 1, 0, 0, 0, 62, 65, 1, 0, 0, 0, 63, 61, 1, 0, 0, 0,
		63, 64, 1, 0, 0, 0, 64, 67, 1, 0, 0, 0, 65, 63, 1, 0, 0, 0, 66, 59, 1, 0, 0,
		0, 66, 67, 1, 0, 0, 0, 67, 26, 1, 0, 0, 0, 68, 70, 7, 12, 0, 0, 69, 68, 1,
		0, 0, 0, 70, 71, 1, 0, 0, 0, 71, 69, 1, 0, 0, 0, 71, 72, 1, 0, 0, 0, 72, 73,
		1, 0, 0, 0, 73, 74, 6, 13, 0, 0, 74, 28, 1, 0, 0, 0, 5, 0, 57, 63, 66, 71,
		1, 6, 0, 0,
	];

	private static __ATN: ATN;

	public static get _ATN(): ATN {
		if (!DurationLexer.__ATN) {
			DurationLexer.__ATN = new ATNDeserializer().deserialize(
				DurationLexer._serializedATN,
			);
		}

		return DurationLexer.__ATN;
	}

	static DecisionsToDFA = DurationLexer._ATN.decisionToState.map(
		(ds: DecisionState, index: number) => new DFA(ds, index),
	);
}
