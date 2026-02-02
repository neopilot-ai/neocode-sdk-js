// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessageAPI from './message';
import {
  AbortedError,
  AssistantMessage,
  FilePartSource,
  FilePartSourceText,
  Message,
  MessageCreateParams,
  MessageListResponse,
  MessageResource,
  OutputLengthError,
  Part,
  ProviderAuthError,
  UnknownError,
} from './message';
import * as ShareAPI from './share';
import { Share as ShareAPIShare } from './share';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SessionResource extends APIResource {
  share: ShareAPI.Share = new ShareAPI.Share(this._client);
  message: MessageAPI.MessageResource = new MessageAPI.MessageResource(this._client);

  /**
   * Create a new session
   */
  create(options?: RequestOptions): APIPromise<Session> {
    return this._client.post('/session', options);
  }

  /**
   * List all sessions
   */
  list(options?: RequestOptions): APIPromise<SessionListResponse> {
    return this._client.get('/session', options);
  }

  /**
   * Delete a session and all its data
   */
  delete(id: string, options?: RequestOptions): APIPromise<SessionDeleteResponse> {
    return this._client.delete(path`/session/${id}`, options);
  }

  /**
   * Abort a session
   */
  abort(id: string, options?: RequestOptions): APIPromise<SessionAbortResponse> {
    return this._client.post(path`/session/${id}/abort`, options);
  }

  /**
   * Analyze the app and create an AGENTS.md file
   */
  init(id: string, body: SessionInitParams, options?: RequestOptions): APIPromise<SessionInitResponse> {
    return this._client.post(path`/session/${id}/init`, { body, ...options });
  }

  /**
   * Revert a message
   */
  revert(id: string, body: SessionRevertParams, options?: RequestOptions): APIPromise<Session> {
    return this._client.post(path`/session/${id}/revert`, { body, ...options });
  }

  /**
   * Summarize the session
   */
  summarize(
    id: string,
    body: SessionSummarizeParams,
    options?: RequestOptions,
  ): APIPromise<SessionSummarizeResponse> {
    return this._client.post(path`/session/${id}/summarize`, { body, ...options });
  }

  /**
   * Restore all reverted messages
   */
  unrevert(id: string, options?: RequestOptions): APIPromise<Session> {
    return this._client.post(path`/session/${id}/unrevert`, options);
  }
}

export interface Session {
  id: string;

  time: Session.Time;

  title: string;

  version: string;

  parentID?: string;

  revert?: Session.Revert;

  share?: Session.Share;
}

export namespace Session {
  export interface Time {
    created: number;

    updated: number;
  }

  export interface Revert {
    messageID: string;

    diff?: string;

    partID?: string;

    snapshot?: string;
  }

  export interface Share {
    url: string;
  }
}

export type SessionListResponse = Array<Session>;

export type SessionDeleteResponse = boolean;

export type SessionAbortResponse = boolean;

export type SessionInitResponse = boolean;

export type SessionSummarizeResponse = boolean;

export interface SessionInitParams {
  messageID: string;

  modelID: string;

  providerID: string;
}

export interface SessionRevertParams {
  messageID: string;

  partID?: string;
}

export interface SessionSummarizeParams {
  modelID: string;

  providerID: string;
}

SessionResource.Share = ShareAPIShare;
SessionResource.MessageResource = MessageResource;

export declare namespace SessionResource {
  export {
    type Session as Session,
    type SessionListResponse as SessionListResponse,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionAbortResponse as SessionAbortResponse,
    type SessionInitResponse as SessionInitResponse,
    type SessionSummarizeResponse as SessionSummarizeResponse,
    type SessionInitParams as SessionInitParams,
    type SessionRevertParams as SessionRevertParams,
    type SessionSummarizeParams as SessionSummarizeParams,
  };

  export { ShareAPIShare as Share };

  export {
    MessageResource as MessageResource,
    type AbortedError as AbortedError,
    type AssistantMessage as AssistantMessage,
    type FilePartSource as FilePartSource,
    type FilePartSourceText as FilePartSourceText,
    type Message as Message,
    type OutputLengthError as OutputLengthError,
    type Part as Part,
    type ProviderAuthError as ProviderAuthError,
    type UnknownError as UnknownError,
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
  };
}
