import { ParsedOptions } from '$core/types/parsed-options';

export interface BaseOperand {
  readonly solve: (opt: ParsedOptions) => number;
}
