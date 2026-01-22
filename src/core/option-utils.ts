import { calculateMilitaryTimeWindowInSec } from '@libchrono/time';
import type { Options } from '$core/types/options';
import type { ParsedOptions } from '$core/types/parsed-options';

const millisInHour = 3_600_000;

export const parseOptions = (opt: Options): ParsedOptions => {
	const dayLengthInMillis =
		calculateMilitaryTimeWindowInSec(opt.daytime.from, opt.daytime.to) * 1000;

	return {
		dayLengthInMillis,
		weekLengthInMillis: opt.daysInWeek * dayLengthInMillis,
		hoursInDay: Math.floor(dayLengthInMillis / millisInHour),
		daysInWeek: opt.daysInWeek,
	};
};
