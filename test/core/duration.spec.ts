import { defaultOptions } from '$core/default-options';
import { Duration } from '$core/duration';
import { DurationUtils } from '$core/duration-utils';
import { parseOptions } from '$core/option-utils';
import type { PlainDuration } from '$core/types/plain-duration';

describe('Duration', () => {
	const opt = parseOptions(defaultOptions);

	describe('#of', () => {
		it('should create a new Duration instance', () => {
			const duration = Duration.of({ weeks: 1, days: 2 }, opt);
			expect(duration).toBeInstanceOf(Duration);
		});

		it('should create a new Duration instance with default PlainDuration if no arguments are provided', () => {
			const duration = Duration.of({}, opt);
			expect(duration).toBeInstanceOf(Duration);
		});
	});

	describe('#add', () => {
		test('should return 1w 1d 500ms after adding 1d with 1w and with 500ms', () => {
			const duration = DurationUtils.parse('1d');
			const duration2 = DurationUtils.parse('1w');
			const duration3 = DurationUtils.parse('500ms');
			const result = duration.add(duration2).add(duration3);
			expect(result.toStringLiteral()).toEqual('1w 1d 500ms');
		});

		test('should return 1w 500ms after adding 1w and with 500ms', () => {
			const duration = DurationUtils.parse('1w');
			const duration2 = DurationUtils.parse('500ms');
			const result = duration.add(duration2);
			expect(result.toStringLiteral()).toEqual('1w 500ms');
		});
	});

	describe('#sub', () => {
		test('should return 23h after subtracting 1h from 1d', () => {
			const duration = DurationUtils.parse('1d');
			const duration2 = DurationUtils.parse('1h');
			const result = duration.sub(duration2);
			expect(result.toStringLiteral()).toEqual('23h');
		});
	});

	describe('#mul', () => {
		test('should return 2d after multiplying 1d with 2', () => {
			const duration = DurationUtils.parse('1d');
			const result = duration.mul(2);
			expect(result.toStringLiteral()).toEqual('2d');
		});

		test('should return 1d 12h after multiplying 1d with 1.5', () => {
			const duration = DurationUtils.parse('1d');
			const result = duration.mul(1.5);
			expect(result.toStringLiteral()).toEqual('1d 12h');
		});
	});

	describe('#div', () => {
		test('should return 2d after dividing 4d with 2', () => {
			const duration = DurationUtils.parse('4d');
			const result = duration.div(2);
			expect(result.toStringLiteral()).toEqual('2d');
		});

		test('should return 16h after dividing 1d with 1.5', () => {
			const duration = DurationUtils.parse('1d');
			const result = duration.div(1.5);
			expect(result.toStringLiteral()).toEqual('16h');
		});

		test('should throw error when dividing by zero', () => {
			const duration = DurationUtils.parse('1d');
			const testCallback = () => duration.div(0);
			expect(testCallback).toThrow('Division by zero is not allowed');
		});
	});

	describe('#getWeeks', () => {
		test('should return 0 when week is not provided', () => {
			const duration = DurationUtils.parse('1d');
			expect(duration.getWeeks()).toEqual(0);
		});

		test('should return 10 for 10w 24h', () => {
			const duration = DurationUtils.parse('10w 24h');
			expect(duration.getWeeks()).toEqual(10);
		});

		test('should return 12 for 10w 20d', () => {
			const duration = DurationUtils.parse('10w 20d');
			expect(duration.getWeeks()).toEqual(12);
		});
	});

	describe('#getDays', () => {
		test('should return 0 when week is not provided', () => {
			const duration = DurationUtils.parse('1w');
			expect(duration.getDays()).toEqual(0);
		});

		test('should return 10 for 10w 24h', () => {
			const duration = DurationUtils.parse('6d');
			expect(duration.getDays()).toEqual(6);
		});

		test('should return 12 for 10w 20d', () => {
			const duration = DurationUtils.parse('7d 48h');
			expect(duration.getDays()).toEqual(2);
		});
	});

	describe('#getHours', () => {
		test('should return 0 when week is not provided', () => {
			const duration = DurationUtils.parse('1w');
			expect(duration.getHours()).toEqual(0);
		});

		test('should return 10 for 10w 24h', () => {
			const duration = DurationUtils.parse('20h');
			expect(duration.getHours()).toEqual(20);
		});

		test('should return 12 for 10w 20d', () => {
			const duration = DurationUtils.parse('24h 61m');
			expect(duration.getHours()).toEqual(1);
		});
	});

	describe('#getMinutes', () => {
		test('should return 0 when minutes not provided', () => {
			const duration = DurationUtils.parse('1w');
			expect(duration.getMinutes()).toEqual(0);
		});

		test('should return 10 for 10m', () => {
			const duration = DurationUtils.parse('10m');
			expect(duration.getMinutes()).toEqual(10);
		});

		test('should return 1 for 60m 61s', () => {
			const duration = DurationUtils.parse('60m 61s');
			expect(duration.getMinutes()).toEqual(1);
		});
	});

	describe('#getSeconds', () => {
		test('should return 0 when seconds not provided', () => {
			const duration = DurationUtils.parse('1w');
			expect(duration.getSeconds()).toEqual(0);
		});

		test('should return 10 for 10s', () => {
			const duration = DurationUtils.parse('10s');
			expect(duration.getSeconds()).toEqual(10);
		});

		test('should return 1 for 60s 1000ms', () => {
			const duration = DurationUtils.parse('60s 1000ms');
			expect(duration.getSeconds()).toEqual(1);
		});
	});

	describe('#getMillis', () => {
		test('should return 0 when seconds not provided', () => {
			const duration = DurationUtils.parse('1w');
			expect(duration.getMillis()).toEqual(0);
		});

		test('should return 500 for 500ms', () => {
			const duration = DurationUtils.parse('500ms');
			expect(duration.getMillis()).toEqual(500);
		});

		test('should return 400 for 400ms', () => {
			const duration = DurationUtils.parse('1400ms');
			expect(duration.getMillis()).toEqual(400);
		});
	});

	describe('#toPlainDuration', () => {
		it('should return the PlainDuration equivalent of the Duration', () => {
			const duration = DurationUtils.parse('1w 2d');

			const expectedPlainDuration: PlainDuration = {
				weeks: 1,
				days: 2,
				hours: 0,
				minutes: 0,
				seconds: 0,
				millis: 0,
			};

			expect(duration.toPlainDuration()).toEqual(expectedPlainDuration);
		});
	});

	describe('#toStringLiteral', () => {
		it('should return the string representation of the Duration', () => {
			const duration = DurationUtils.parse('1w 2d');
			expect(duration.toStringLiteral()).toBe('1w 2d');
		});
	});

	describe('#toWeeks', () => {
		it('should return the count of weeks in timestamp', () => {
			const duration = DurationUtils.parse('1w 7d');
			expect(duration.toWeeks()).toBe(2);
		});
	});

	describe('#toDays', () => {
		it('should return the count of days in timestamp', () => {
			const duration = DurationUtils.parse('2w');
			expect(duration.toDays()).toBe(14);
		});
	});

	describe('#toHours', () => {
		it('should return the count of hours in timestamp', () => {
			const duration = DurationUtils.parse('1d 4h');
			expect(duration.toHours()).toBe(28);
		});
	});

	describe('#toMinutes', () => {
		it('should return the count of minutes in timestamp', () => {
			const duration = DurationUtils.parse('1h 10m');
			expect(duration.toMinutes()).toBe(70);
		});
	});

	describe('#toSeconds', () => {
		it('should return the count of seconds in timestamp', () => {
			const duration = DurationUtils.parse('1m 1s');
			expect(duration.toSeconds()).toBe(61);
		});
	});

	describe('#toMillis', () => {
		it('should return the count of millis in timestamp', () => {
			const duration = DurationUtils.parse('1s 10ms');
			expect(duration.toMillis()).toBe(1010);
		});
	});
});
