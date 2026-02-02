// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class App extends APIResource {
  /**
   * Get app info
   */
  retrieve(options?: RequestOptions): APIPromise<AppRetrieveResponse> {
    return this._client.get('/app', options);
  }

  /**
   * Initialize the app
   */
  initialize(options?: RequestOptions): APIPromise<AppInitializeResponse> {
    return this._client.post('/app/init', options);
  }
}

export interface AppRetrieveResponse {
  git: boolean;

  hostname: string;

  path: AppRetrieveResponse.Path;

  time: AppRetrieveResponse.Time;
}

export namespace AppRetrieveResponse {
  export interface Path {
    config: string;

    cwd: string;

    data: string;

    root: string;

    state: string;
  }

  export interface Time {
    initialized?: number;
  }
}

export type AppInitializeResponse = boolean;

export declare namespace App {
  export {
    type AppRetrieveResponse as AppRetrieveResponse,
    type AppInitializeResponse as AppInitializeResponse,
  };
}
