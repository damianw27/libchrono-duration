import { DurationErrorListener } from '$core/duration-error-listener';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import { DurationLexer } from '$generated/duration-lexer';

const isValidLexerInput = (input: string): boolean => {
	const errorListener = new DurationErrorListener();
	const lexer = DurationGrammarUtils.getLexer(input, errorListener);

	lexer.removeErrorListeners();
	lexer.addErrorListener(errorListener);
	lexer.nextToken();

	return errorListener.errors.length === 0;
};

describe('DurationLexer', () => {
	describe('#nextToken', () => {
		test('should return correct token stream for valid input', () => {
			const input = '1d12h30m';

			const expectedTokens = [
				{ type: '13', text: '1' },
				{ type: '8', text: 'd' },
				{ type: '13', text: '12' },
				{ type: '9', text: 'h' },
				{ type: '13', text: '30' },
				{ type: '10', text: 'm' },
				{ type: 'EOF', text: '' },
			];

			const lexer = DurationGrammarUtils.getLexer(input);
			const actualTokens = [];

			let token = lexer.nextToken();

			while (token.type !== DurationLexer.EOF) {
				actualTokens.push({ type: token.type.toString(), text: token.text });
				token = lexer.nextToken();
			}

			actualTokens.push({ type: 'EOF', text: '' });

			expect(actualTokens).toEqual(expectedTokens);
		});

		test('should accept valid input', () => {
			const input = '1d12h30m';
			expect(isValidLexerInput(input)).toBeTruthy();
		});

		test('should not accept invalid input', () => {
			const input = 'invalid input';
			expect(isValidLexerInput(input)).not.toBeTruthy();
		});
	});

	describe('#vocabulary', () => {
		test('should return proper vocabulary', () => {
			const lexer = DurationGrammarUtils.getLexer('');
			const vocabulary = lexer.getSymbolicNames();
			expect(vocabulary).toEqual(DurationLexer.symbolicNames);
		});
	});

	describe('#grammarFileName', () => {
		test('should return proper filename', () => {
			const lexer = DurationGrammarUtils.getLexer('');
			const grammarFileName = lexer.grammarFileName;
			expect(grammarFileName).toEqual('Duration.g4');
		});
	});

	describe('#ruleNames', () => {
		test('should return proper rule names', () => {
			const lexer = DurationGrammarUtils.getLexer('');
			const ruleNames = lexer.ruleNames;
			expect(ruleNames).toEqual(DurationLexer.ruleNames);
		});
	});

	describe('#serializedATN', () => {
		test('should return proper atn', () => {
			const lexer = DurationGrammarUtils.getLexer('');
			const atn = lexer.serializedATN;
			// eslint-disable-next-line no-underscore-dangle
			expect(atn).toEqual(DurationLexer._serializedATN);
		});
	});

	describe('#channelNames', () => {
		test('should return proper channel names', () => {
			const lexer = DurationGrammarUtils.getLexer('');
			const channelNames = lexer.channelNames;
			expect(channelNames).toEqual(DurationLexer.channelNames);
		});
	});

	describe('#modeNames', () => {
		test('should return proper mode names', () => {
			const lexer = DurationGrammarUtils.getLexer('');
			const modeNames = lexer.modeNames;
			expect(modeNames).toEqual(DurationLexer.modeNames);
		});
	});
});
