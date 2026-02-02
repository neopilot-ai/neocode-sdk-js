// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FindAPI from './find';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Find extends APIResource {
  /**
   * Find text in files
   */
  retrieve(query: FindRetrieveParams, options?: RequestOptions): APIPromise<FindRetrieveResponse> {
    return this._client.get('/find', { query, ...options });
  }

  /**
   * Find files
   */
  retrieveFile(
    query: FindRetrieveFileParams,
    options?: RequestOptions,
  ): APIPromise<FindRetrieveFileResponse> {
    return this._client.get('/find/file', { query, ...options });
  }

  /**
   * Find workspace symbols
   */
  retrieveSymbol(
    query: FindRetrieveSymbolParams,
    options?: RequestOptions,
  ): APIPromise<FindRetrieveSymbolResponse> {
    return this._client.get('/find/symbol', { query, ...options });
  }
}

export interface Range {
  end: Range.End;

  start: Range.Start;
}

export namespace Range {
  export interface End {
    character: number;

    line: number;
  }

  export interface Start {
    character: number;

    line: number;
  }
}

export type FindRetrieveResponse = Array<FindRetrieveResponse.FindRetrieveResponseItem>;

export namespace FindRetrieveResponse {
  export interface FindRetrieveResponseItem {
    absolute_offset: number;

    line_number: number;

    lines: FindRetrieveResponseItem.Lines;

    path: FindRetrieveResponseItem.Path;

    submatches: Array<FindRetrieveResponseItem.Submatch>;
  }

  export namespace FindRetrieveResponseItem {
    export interface Lines {
      text: string;
    }

    export interface Path {
      text: string;
    }

    export interface Submatch {
      end: number;

      match: Submatch.Match;

      start: number;
    }

    export namespace Submatch {
      export interface Match {
        text: string;
      }
    }
  }
}

export type FindRetrieveFileResponse = Array<string>;

export type FindRetrieveSymbolResponse = Array<FindRetrieveSymbolResponse.FindRetrieveSymbolResponseItem>;

export namespace FindRetrieveSymbolResponse {
  export interface FindRetrieveSymbolResponseItem {
    kind: number;

    location: FindRetrieveSymbolResponseItem.Location;

    name: string;
  }

  export namespace FindRetrieveSymbolResponseItem {
    export interface Location {
      range: FindAPI.Range;

      uri: string;
    }
  }
}

export interface FindRetrieveParams {
  pattern: string;
}

export interface FindRetrieveFileParams {
  query: string;
}

export interface FindRetrieveSymbolParams {
  query: string;
}

export declare namespace Find {
  export {
    type Range as Range,
    type FindRetrieveResponse as FindRetrieveResponse,
    type FindRetrieveFileResponse as FindRetrieveFileResponse,
    type FindRetrieveSymbolResponse as FindRetrieveSymbolResponse,
    type FindRetrieveParams as FindRetrieveParams,
    type FindRetrieveFileParams as FindRetrieveFileParams,
    type FindRetrieveSymbolParams as FindRetrieveSymbolParams,
  };
}
