/**
 * Object witch contains values of durations all kind of duration unit.
 */
export interface PlainDuration extends Record<string, number> {
	readonly weeks: number;
	readonly days: number;
	readonly hours: number;
	readonly minutes: number;
	readonly seconds: number;
	readonly millis: number;
}
