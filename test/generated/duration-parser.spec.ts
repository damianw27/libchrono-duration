import { DurationErrorListener } from '$core/duration-error-listener';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import { DurationParser } from '$generated/duration-parser';

const isInputParsable = (input: string): boolean => {
	const errorListener = new DurationErrorListener();
	const parser = DurationGrammarUtils.getParser(input, errorListener);

	parser.parseDuration();

	return errorListener.errors.length === 0;
};

describe('DurationParser', () => {
	describe('#parseDuration', () => {
		const validExamples = [
			'1w2d3h4m5s6ms',
			'(1w2d*1)+3h4m5s6ms',
			'1w+(2d3h/3)-4m5s6ms',
			'1.5w',
			'1w*2',
			'(1w*2)-3h',
			'1w+2d',
			'(1w+2d)-3h',
			'1w-2d',
			'(1w-2d)+3h',
			'1w+2d*3',
			'1w-2d/3',
			'123ms',
			'1d 1h 1m 1s 1ms',
		];

		validExamples.forEach((input) => {
			test(`should parse input "${input}" without any problems`, () => {
				expect(isInputParsable(input)).toBeTruthy();
			});
		});

		const invalidExamples = [
			'2d1w3h4m5s6ms',
			'(2d1w*1)+3h5s4m6ms',
			'1.5F',
			'1w+d',
			'(w+2d)-3h',
			'(1w-2d)+h',
			'1w+2d* ',
			'1w-2d/ ',
			'12  3',
			'1d 1m 1s 1ms 1h',
			'1 1d 1h 1m 1s',
		];

		invalidExamples.forEach((input) => {
			test(`should return error on "${input}"`, () => {
				expect(isInputParsable(input)).toBeFalsy();
			});
		});
	});

	describe('#vocabulary', () => {
		test('should return proper vocabulary', () => {
			const parser = DurationGrammarUtils.getParser('');
			const vocabulary = parser.getLiteralNames();
			expect(vocabulary).toEqual(DurationParser.literalNames);
		});
	});

	describe('#grammarFileName', () => {
		test('should return proper filename', () => {
			const parser = DurationGrammarUtils.getParser('');
			const grammarFileName = parser.grammarFileName;
			expect(grammarFileName).toEqual('Duration.g4');
		});
	});

	describe('#ruleNames', () => {
		test('should return proper rule names', () => {
			const parser = DurationGrammarUtils.getParser('');
			const ruleNames = parser.ruleNames;
			expect(ruleNames).toEqual(DurationParser.ruleNames);
		});
	});

	describe('#serializedATN', () => {
		test('should return proper atn', () => {
			const parser = DurationGrammarUtils.getParser('');
			const atn = parser.serializedATN;
			expect(atn).toEqual(DurationParser._serializedATN);
		});
	});
});
