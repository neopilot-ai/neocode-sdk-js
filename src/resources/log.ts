// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Log extends APIResource {
  /**
   * Write a log entry to the server logs
   */
  create(body: LogCreateParams, options?: RequestOptions): APIPromise<LogCreateResponse> {
    return this._client.post('/log', { body, ...options });
  }
}

export type LogCreateResponse = boolean;

export interface LogCreateParams {
  /**
   * Log level
   */
  level: 'debug' | 'info' | 'error' | 'warn';

  /**
   * Log message
   */
  message: string;

  /**
   * Service name for the log entry
   */
  service: string;

  /**
   * Additional metadata for the log entry
   */
  extra?: { [key: string]: unknown };
}

export declare namespace Log {
  export { type LogCreateResponse as LogCreateResponse, type LogCreateParams as LogCreateParams };
}
