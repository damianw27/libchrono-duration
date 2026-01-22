import type { ParsingError } from '$core/types/parsing-error';

export interface ValidationResult {
	readonly errors: ParsingError[];
	readonly isValid: boolean;
}
