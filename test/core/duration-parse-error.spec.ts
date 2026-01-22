import { DurationErrorListener } from '$core/duration-error-listener';
import { DurationParseError } from '$core/duration-parse-error';

describe('DurationParseError', () => {
	it('should initialize with an empty errors array', () => {
		const errorListener = new DurationErrorListener();
		const parseError = new DurationParseError(errorListener);
		expect(parseError.errors).toEqual([]);
	});

	it('should reflect the error listener errors array', () => {
		const errorListener = new DurationErrorListener();
		errorListener.syntaxError(null, null, 0, 2, 'Syntax error');
		const parseError = new DurationParseError(errorListener);
		expect(parseError.errors).toEqual(errorListener.errors);
	});
});
