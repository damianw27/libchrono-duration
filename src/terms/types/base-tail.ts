import type { ParsedOptions } from '$core/types/parsed-options';

export interface BaseTail {
	readonly apply: (timestamp: number, opt: ParsedOptions) => number;
}
