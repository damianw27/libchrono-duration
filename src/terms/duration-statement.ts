import { BaseOperand } from '$terms/types/base-operand';
import { PlainDurationUtils } from '$core/plain-duration-utils';
import { MillisecondsStatementContext } from '$generated/context/milliseconds-statement-context';
import { SecondsStatementContext } from '$generated/context/seconds-statement-context';
import { MinutesStatementContext } from '$generated/context/minutes-statement-context';
import { HoursStatementContext } from '$generated/context/hours-statement-context';
import { DaysStatementContext } from '$generated/context/days-statement-context';
import { WeeksStatementContext } from '$generated/context/weeks-statement-context';
import { DurationStatementContext } from '$generated/context/duration-statement-context';
import { ParsedOptions } from '$core/types/parsed-options';

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
