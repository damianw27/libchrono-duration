import { PlainDuration } from '$core/types/plain-duration';
import { ParsedOptions } from '$core/types/parsed-options';

const millisInHour = 3_600_000;
const millisInMinute = 60_000;
const millisInSecond = 1_000;
const minutesInHour = 60;
const secondsInMinute = 60;
const unitsOrder = ['w', 'd', 'h', 'm', 's', 'ms'];
const durationLiteralSeparator = ' ';

const literalElementsMap: Record<string, string> = {
  weeks: 'w',
  days: 'd',
  hours: 'h',
  minutes: 'm',
  seconds: 's',
  millis: 'ms',
};

/**
 * Utils class which allows to invoke some operations on timestamp of duration.
 */
export class PlainDurationUtils {
  /**
   * Method witch allows to converts timestamp in number format to PlainDuration.
   * @param {number} timestamp - duration timestamp
   * @param {ParsedOptions} opt
   */
  public static getPlainDuration = (timestamp: number, opt: ParsedOptions): PlainDuration => ({
    weeks: PlainDurationUtils.getWeeks(timestamp, opt),
    days: PlainDurationUtils.getDays(timestamp, opt),
    hours: PlainDurationUtils.getHours(timestamp, opt),
    minutes: PlainDurationUtils.getMinutes(timestamp),
    seconds: PlainDurationUtils.getSeconds(timestamp),
    millis: PlainDurationUtils.getMillis(timestamp),
  });

  /**
   * Method witch allows to extract weeks count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   * @param {ParsedOptions} opt
   */
  public static getWeeks = (timestamp: number, opt: ParsedOptions): number =>
    Math.floor(timestamp / opt.weekLengthInMillis);

  /**
   * Method witch allows to extract days count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   * @param {ParsedOptions} opt
   */
  public static getDays = (timestamp: number, opt: ParsedOptions): number => {
    const weeksTimestamp = PlainDurationUtils.getWeeks(timestamp, opt) * opt.weekLengthInMillis;
    return Math.floor((timestamp - weeksTimestamp) / opt.dayLengthInMillis);
  };

  /**
   * Method witch allows to extract hours count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   * @param {ParsedOptions} opt
   */
  public static getHours = (timestamp: number, opt: ParsedOptions): number =>
    Math.floor(timestamp / millisInHour) % opt.hoursInDay;

  /**
   * Method witch allows to extract minutes count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   */
  public static getMinutes = (timestamp: number): number =>
    Math.floor(timestamp / millisInMinute) % minutesInHour;

  /**
   * Method witch allows to extract seconds count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   */
  public static getSeconds = (timestamp: number): number =>
    Math.floor(timestamp / millisInSecond) % secondsInMinute;

  /**
   * Method witch allows to extract milliseconds count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   */
  public static getMillis = (timestamp: number): number => timestamp % millisInSecond;

  /**
   * Method witch allows to converts PlainDuration to timestamp in number format.
   * @param {PlainDuration} plainDuration
   * @param {ParsedOptions} opt
   */
  public static getTimestamp = (plainDuration: PlainDuration, opt: ParsedOptions): number => {
    const millisInWeeks = plainDuration.weeks * opt.weekLengthInMillis;
    const millisInDays = plainDuration.days * opt.dayLengthInMillis;
    const millisInHours = plainDuration.hours * millisInHour;
    const millisInMinutes = plainDuration.minutes * millisInMinute;
    const millisInSeconds = plainDuration.seconds * millisInSecond;

    return (
      millisInWeeks +
      millisInDays +
      millisInHours +
      millisInMinutes +
      millisInSeconds +
      plainDuration.millis
    );
  };

  /**
   * Method which allows to converts PlainDuration to string literal format.
   * @param {PlainDuration} plainDuration
   */
  public static getStringLiteral = (plainDuration: PlainDuration): string =>
    Object.entries(plainDuration)
      .filter(([, value]) => value !== 0)
      .map(([key, value]) => `${value}${literalElementsMap[key]}`)
      .sort(PlainDurationUtils.sortOverUnits)
      .join(durationLiteralSeparator);

  private static sortOverUnits = (a: string, b: string) => {
    const aUnitIndex = unitsOrder.indexOf(a.slice(-1));
    const bUnitIndex = unitsOrder.indexOf(b.slice(-1));

    if (aUnitIndex < bUnitIndex) {
      return -1;
    }

    if (aUnitIndex > bUnitIndex) {
      return 1;
    }

    const aNum = parseInt(a.slice(0, -1), 10);
    const bNum = parseInt(b.slice(0, -1), 10);
    return aNum - bNum;
  };
}
