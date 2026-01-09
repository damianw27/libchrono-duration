import { DurationErrorListener } from '$core/duration-error-listener';
import { DurationLexer } from '$generated/duration-lexer';
import { CharStreams, CommonTokenStream } from 'antlr4';
import { DurationParser } from '$generated/duration-parser';

/**
 * Utils which provides lexer and parser dedicated for duration grammar.
 */
export class DurationGrammarUtils {
  /**
   * Returns a new DurationLexer instance configured with the provided input.
   *
   * Optionally, a DurationErrorListener can be provided, which will be added to the lexer.
   *
   * @param input - The string to lex.
   * @param listener - The error listener to add to the lexer.
   * @returns The lexer instance.
   */
  public static getLexer = (input: string, listener?: DurationErrorListener): DurationLexer => {
    const chars = CharStreams.fromString(input);
    const lexer = new DurationLexer(chars);

    lexer.removeErrorListeners();

    if (listener) {
      lexer.addErrorListener(listener);
    }

    return lexer;
  };

  /**
   * Returns a new DurationParser instance configured with the provided input.
   *
   * A lexer is created from the input using the getLexer method.
   *
   * Optionally, a DurationErrorListener can be provided, which will be added to the parser.
   *
   * @param input - The string to parse.
   * @param listener - The error listener to add to the parser.
   * @returns The parser instance.
   */
  public static getParser = (input: string, listener?: DurationErrorListener): DurationParser => {
    const lexer = DurationGrammarUtils.getLexer(input, listener);
    const tokens = new CommonTokenStream(lexer);
    const parser = new DurationParser(tokens);

    parser.removeErrorListeners();

    if (listener) {
      parser.addErrorListener(listener);
    }

    return parser;
  };
}
