import { PlainDurationUtils } from '$core/plain-duration-utils';
import type { ParsedOptions } from '$core/types/parsed-options';
import type { DaysStatementContext } from '$generated/context/days-statement-context';
import type { DurationStatementContext } from '$generated/context/duration-statement-context';
import type { HoursStatementContext } from '$generated/context/hours-statement-context';
import type { MillisecondsStatementContext } from '$generated/context/milliseconds-statement-context';
import type { MinutesStatementContext } from '$generated/context/minutes-statement-context';
import type { SecondsStatementContext } from '$generated/context/seconds-statement-context';
import type { WeeksStatementContext } from '$generated/context/weeks-statement-context';
import type { BaseOperand } from '$terms/types/base-operand';

const digitRegExp = /\d+/g;

const zeroSign = '0';
const zeroValue = 0;

export type DurationContext =
	| WeeksStatementContext
	| DaysStatementContext
	| HoursStatementContext
	| MinutesStatementContext
	| SecondsStatementContext
	| MillisecondsStatementContext;

export class DurationStatement implements BaseOperand {
	public constructor(private readonly context: DurationStatementContext) {}

	public solve = (opt: ParsedOptions): number => {
		const plainDuration = {
			weeks: this.extractValue(this.context.weeksStatement()),
			days: this.extractValue(this.context.daysStatement()),
			hours: this.extractValue(this.context.hoursStatement()),
			minutes: this.extractValue(this.context.minutesStatement()),
			seconds: this.extractValue(this.context.secondsStatement()),
			millis: this.extractValue(this.context.millisecondsStatement()),
		};

		return PlainDurationUtils.getTimestamp(plainDuration, opt);
	};

	private extractValue = (context: DurationContext | null): number => {
		if (context === null) {
			return zeroValue;
		}

		return parseFloat(context.getText().match(digitRegExp)?.[0] ?? zeroSign);
	};
}
