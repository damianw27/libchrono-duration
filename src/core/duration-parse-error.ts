import type { DurationErrorListener } from '$core/duration-error-listener';
import type { ParsingError } from '$core/types/parsing-error';

export class DurationParseError {
	public errors: ParsingError[];

	public constructor(readonly errorListener: DurationErrorListener) {
		this.errors = errorListener.errors;
	}
}
