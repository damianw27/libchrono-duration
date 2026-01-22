import {
	isDurationExpressionContext,
	isDurationStatementContext,
} from '$terms/contexts-guards';

describe('#isDurationStatementContext', () => {
	test('returns true for valid DurationStatementContext', () => {
		const target = {
			weeksStatement: jest.fn(),
			daysStatement: jest.fn(),
			hoursStatement: jest.fn(),
			minutesStatement: jest.fn(),
			secondsStatement: jest.fn(),
			millisecondsStatement: jest.fn(),
		};

		expect(isDurationStatementContext(target)).toBe(true);
	});

	test('returns false for invalid object', () => {
		const target = {
			weeks: 2,
			days: 3,
		};

		expect(isDurationStatementContext(target)).toBe(false);
	});
});

describe('#isDurationExpressionContext', () => {
	test('returns true for valid DurationExpressionContext', () => {
		const target = {
			durationTerm: jest.fn(),
			durationExpressionTail: jest.fn(),
		};

		expect(isDurationExpressionContext(target)).toBe(true);
	});

	test('returns false for invalid object', () => {
		const target = {
			weeks: 2,
			days: 3,
		};

		expect(isDurationExpressionContext(target)).toBe(false);
	});
});
