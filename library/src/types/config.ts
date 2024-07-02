import type { BaseIssue } from './issue.ts';
import type { ErrorMessage } from './other.ts';

/**
 * Config type.
 */
export interface Config<TIssue extends BaseIssue<unknown>> {
  /**
   * The selected language.
   */
  readonly lang?: string;
  /**
   * The error message.
   */
  readonly message?: ErrorMessage<TIssue>;
  /**
   * Whether it was abort early.
   */
  readonly abortEarly?: boolean;
  /**
   * Whether the pipe was abort early.
   */
  readonly abortPipeEarly?: boolean;
}
