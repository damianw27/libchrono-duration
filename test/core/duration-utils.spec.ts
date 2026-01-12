import { DurationUtils } from '$core/duration-utils';
import { DurationParseError } from '$core/duration-parse-error';
import { Options } from '$core/types/options';

describe('DurationUtils', () => {
  describe('#parse', () => {
    test('should parse string literal if literal is valid', () => {
      const inputLiteral = '1w 2d';
      const result = DurationUtils.parse(inputLiteral).toPlainDuration();
      expect(result.weeks).toEqual(1);
      expect(result.days).toEqual(2);
    });

    test('should parse string and produce valid plain duration', () => {
      const inputLiteral = '1w 1d 1h 1m 1s 1ms';
      const result = DurationUtils.parse(inputLiteral).toPlainDuration();
      expect(result.weeks).toEqual(1);
      expect(result.days).toEqual(1);
      expect(result.hours).toEqual(1);
      expect(result.minutes).toEqual(1);
      expect(result.seconds).toEqual(1);
      expect(result.millis).toEqual(1);
    });

    test('should throw error when duration literal is invalid', () => {
      const inputLiteral = '1d 2w';
      const exampleCall = () => DurationUtils.parse(inputLiteral);
      expect(exampleCall).toThrow(DurationParseError);
    });

    test('should return result of arithmetic operation in literal for simple example', () => {
      const duration1 = DurationUtils.parse('1w + 10d');
      expect(duration1.toStringLiteral()).toEqual('2w 3d');
    });

    test('should return result of arithmetic operation in literal for advanced example', () => {
      const duration1 = DurationUtils.parse('1w * 3 + 10d / 2');
      expect(duration1.toStringLiteral()).toEqual('3w 5d');
    });

    test('should return result of arithmetic operation in literal with nested expression', () => {
      const duration1 = DurationUtils.parse('(1w 2h + 5h + 30m) * 2');
      expect(duration1.toStringLiteral()).toEqual('2w 15h');
    });

    it('should parse correctly the duration literal with custom options', () => {
      const options: Options = {
        daytime: {
          from: '08:00',
          to: '16:00',
        },
        daysInWeek: 5,
      };

      const duration1 = DurationUtils.parse('1w 5d', options);
      expect(duration1.toStringLiteral()).toEqual('2w');
    });

    it('should parse correctly the duration literal with custom options and expression', () => {
      const options: Options = {
        daytime: {
          from: '08:00',
          to: '16:00',
        },
        daysInWeek: 5,
      };

      const duration1 = DurationUtils.parse('1w 5d + 3d', options);
      expect(duration1.toStringLiteral()).toEqual('2w 3d');
    });

    it('should parse correctly the duration literal with custom options and term', () => {
      const options: Options = {
        daytime: {
          from: '08:00',
          to: '16:00',
        },
        daysInWeek: 5,
      };

      const duration1 = DurationUtils.parse('1w 5d * 4', options);
      expect(duration1.toStringLiteral()).toEqual('8w');
    });

    it('should parse correctly the duration literal with custom options and term and expression in correct order', () => {
      const options: Options = {
        daytime: {
          from: '08:00',
          to: '16:00',
        },
        daysInWeek: 5,
      };

      const duration1 = DurationUtils.parse('1w + 5d * 4', options);
      expect(duration1.toStringLiteral()).toEqual('5w');
    });
  });

  describe('#validate', () => {
    test('should return false when duration literal is invalid', () => {
      const inputLiteral = '1d 2w';
      const result = DurationUtils.validate(inputLiteral);
      expect(result.isValid).not.toBeTruthy();
    });

    test('should return true when duration literal is invalid', () => {
      const inputLiteral = '1w 2d';
      const result = DurationUtils.validate(inputLiteral);
      expect(result.isValid).toBeTruthy();
    });
  });
});
