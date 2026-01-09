import { PlainDurationUtils } from '$core/plain-duration-utils';
import { parseOptions } from '$core/option-utils';
import { defaultOptions } from '$core/default-options';

describe('PlainDurationUtils', () => {
  const opt = parseOptions(defaultOptions);

  const duration1 = {
    weeks: 1,
    days: 0,
    hours: 3,
    millis: 6,
    minutes: 4,
    seconds: 5,
  };

  const duration2 = {
    weeks: 0,
    days: 2,
    hours: 0,
    minutes: 4,
    seconds: 0,
    millis: 0,
  };

  const timestamp1 = 615845006;
  const timestamp2 = 173040000;
  const stringLiteral1 = '1w 3h 4m 5s 6ms';
  const stringLiteral2 = '2d 4m';

  describe('#getPlainDuration', () => {
    it('should return the expected PlainDuration object', () => {
      const plainDuration = PlainDurationUtils.getPlainDuration(timestamp1, opt);
      expect(plainDuration).toEqual(duration1);
    });
  });

  describe('#getWeeks', () => {
    it('should return the expected number of weeks', () => {
      const weeks = PlainDurationUtils.getWeeks(timestamp1, opt);
      expect(weeks).toBe(duration1.weeks);
    });
  });

  describe('#getDays', () => {
    it('should return the expected number of days', () => {
      const days = PlainDurationUtils.getDays(timestamp1, opt);
      expect(days).toBe(duration1.days);
    });
  });

  describe('#getHours', () => {
    it('should return the expected number of hours', () => {
      const hours = PlainDurationUtils.getHours(timestamp1, opt);
      expect(hours).toBe(duration1.hours);
    });
  });

  describe('#getMinutes', () => {
    it('should return the expected number of minutes', () => {
      const minutes = PlainDurationUtils.getMinutes(timestamp1);
      expect(minutes).toBe(duration1.minutes);
    });
  });

  describe('#getSeconds', () => {
    it('should return the expected number of seconds', () => {
      const seconds = PlainDurationUtils.getSeconds(timestamp1);
      expect(seconds).toBe(duration1.seconds);
    });
  });

  describe('#getMillis', () => {
    it('should return the expected number of milliseconds', () => {
      const millis = PlainDurationUtils.getMillis(timestamp1);
      expect(millis).toBe(duration1.millis);
    });
  });

  describe('#getTimestamp', () => {
    it('should return the expected timestamp', () => {
      const timestamp = PlainDurationUtils.getTimestamp(duration2, opt);
      expect(timestamp).toBe(timestamp2);
    });
  });

  describe('#getStringLiteral', () => {
    it('should return the expected string literal', () => {
      const result = PlainDurationUtils.getStringLiteral(duration1);
      expect(result).toBe(stringLiteral1);
    });

    it('should return only non-zero elements', () => {
      const result = PlainDurationUtils.getStringLiteral(duration2);
      expect(result).toBe(stringLiteral2);
    });
  });
});
