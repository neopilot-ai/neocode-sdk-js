// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SessionAPI from './session';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Share extends APIResource {
  /**
   * Share a session
   */
  create(id: string, options?: RequestOptions): APIPromise<SessionAPI.Session> {
    return this._client.post(path`/session/${id}/share`, options);
  }

  /**
   * Unshare the session
   */
  delete(id: string, options?: RequestOptions): APIPromise<SessionAPI.Session> {
    return this._client.delete(path`/session/${id}/share`, options);
  }
}
