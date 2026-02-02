// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class File extends APIResource {
  /**
   * Read a file
   */
  retrieve(query: FileRetrieveParams, options?: RequestOptions): APIPromise<FileRetrieveResponse> {
    return this._client.get('/file', { query, ...options });
  }

  /**
   * Get file status
   */
  retrieveStatus(options?: RequestOptions): APIPromise<FileRetrieveStatusResponse> {
    return this._client.get('/file/status', options);
  }
}

export interface FileRetrieveResponse {
  content: string;

  type: 'raw' | 'patch';
}

export type FileRetrieveStatusResponse = Array<FileRetrieveStatusResponse.FileRetrieveStatusResponseItem>;

export namespace FileRetrieveStatusResponse {
  export interface FileRetrieveStatusResponseItem {
    added: number;

    path: string;

    removed: number;

    status: 'added' | 'deleted' | 'modified';
  }
}

export interface FileRetrieveParams {
  path: string;
}

export declare namespace File {
  export {
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileRetrieveStatusResponse as FileRetrieveStatusResponse,
    type FileRetrieveParams as FileRetrieveParams,
  };
}
