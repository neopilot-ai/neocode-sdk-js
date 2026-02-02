// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Mode extends APIResource {
  /**
   * List all modes
   */
  list(options?: RequestOptions): APIPromise<ModeListResponse> {
    return this._client.get('/mode', options);
  }
}

export type ModeListResponse = Array<ModeListResponse.ModeListResponseItem>;

export namespace ModeListResponse {
  export interface ModeListResponseItem {
    name: string;

    tools: { [key: string]: boolean };

    model?: ModeListResponseItem.Model;

    prompt?: string;

    temperature?: number;
  }

  export namespace ModeListResponseItem {
    export interface Model {
      modelID: string;

      providerID: string;
    }
  }
}

export declare namespace Mode {
  export { type ModeListResponse as ModeListResponse };
}
