import { DurationErrorListener } from '$core/duration-error-listener';

describe('DurationErrorListener', () => {
	it('should initialize with an empty errors array', () => {
		const listener = new DurationErrorListener();
		expect(listener.errors).toEqual([]);
	});

	describe('#syntaxError', () => {
		it('should add a new parsing error to the errors array', () => {
			const listener = new DurationErrorListener();
			const mockParsingError = {
				charPosition: 2,
				message: 'Syntax error',
			};
			listener.syntaxError(null, null, 0, 2, 'Syntax error');
			expect(listener.errors).toEqual([mockParsingError]);
		});
	});

	describe('#reportAmbiguity', () => {
		it('should not do anything', () => {
			const listener = new DurationErrorListener();
			listener.reportAmbiguity();
			expect(listener.errors).toEqual([]);
		});
	});

	describe('#reportAttemptingFullContext', () => {
		it('should not do anything', () => {
			const listener = new DurationErrorListener();
			listener.reportAttemptingFullContext();
			expect(listener.errors).toEqual([]);
		});
	});

	describe('#reportContextSensitivity', () => {
		it('should not do anything', () => {
			const listener = new DurationErrorListener();
			listener.reportContextSensitivity();
			expect(listener.errors).toEqual([]);
		});
	});
});
