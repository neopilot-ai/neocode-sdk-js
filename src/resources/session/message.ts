// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessageAPI from './message';
import * as FindAPI from '../find';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MessageResource extends APIResource {
  /**
   * Create and send a new message to a session
   */
  create(id: string, body: MessageCreateParams, options?: RequestOptions): APIPromise<AssistantMessage> {
    return this._client.post(path`/session/${id}/message`, { body, ...options });
  }

  /**
   * List messages for a session
   */
  list(id: string, options?: RequestOptions): APIPromise<MessageListResponse> {
    return this._client.get(path`/session/${id}/message`, options);
  }
}

export interface AbortedError {
  data: unknown;

  name: 'MessageAbortedError';
}

export interface AssistantMessage {
  id: string;

  cost: number;

  mode: string;

  modelID: string;

  path: AssistantMessage.Path;

  providerID: string;

  role: 'assistant';

  sessionID: string;

  system: Array<string>;

  time: AssistantMessage.Time;

  tokens: AssistantMessage.Tokens;

  error?: ProviderAuthError | UnknownError | OutputLengthError | AbortedError;

  summary?: boolean;
}

export namespace AssistantMessage {
  export interface Path {
    cwd: string;

    root: string;
  }

  export interface Time {
    created: number;

    completed?: number;
  }

  export interface Tokens {
    cache: Tokens.Cache;

    input: number;

    output: number;

    reasoning: number;
  }

  export namespace Tokens {
    export interface Cache {
      read: number;

      write: number;
    }
  }
}

export type FilePartSource = FilePartSource.FileSource | FilePartSource.SymbolSource;

export namespace FilePartSource {
  export interface FileSource {
    path: string;

    text: MessageAPI.FilePartSourceText;

    type: 'file';
  }

  export interface SymbolSource {
    kind: number;

    name: string;

    path: string;

    range: FindAPI.Range;

    text: MessageAPI.FilePartSourceText;

    type: 'symbol';
  }
}

export interface FilePartSourceText {
  end: number;

  start: number;

  value: string;
}

export type Message = Message.UserMessage | AssistantMessage;

export namespace Message {
  export interface UserMessage {
    id: string;

    role: 'user';

    sessionID: string;

    time: UserMessage.Time;
  }

  export namespace UserMessage {
    export interface Time {
      created: number;
    }
  }
}

export interface OutputLengthError {
  data: unknown;

  name: 'MessageOutputLengthError';
}

export type Part =
  | Part.TextPart
  | Part.FilePart
  | Part.ToolPart
  | Part.StepStartPart
  | Part.StepFinishPart
  | Part.SnapshotPart
  | Part.PatchPart;

export namespace Part {
  export interface TextPart {
    id: string;

    messageID: string;

    sessionID: string;

    text: string;

    type: 'text';

    synthetic?: boolean;

    time?: TextPart.Time;
  }

  export namespace TextPart {
    export interface Time {
      start: number;

      end?: number;
    }
  }

  export interface FilePart {
    id: string;

    messageID: string;

    mime: string;

    sessionID: string;

    type: 'file';

    url: string;

    filename?: string;

    source?: MessageAPI.FilePartSource;
  }

  export interface ToolPart {
    id: string;

    callID: string;

    messageID: string;

    sessionID: string;

    state:
      | ToolPart.ToolStatePending
      | ToolPart.ToolStateRunning
      | ToolPart.ToolStateCompleted
      | ToolPart.ToolStateError;

    tool: string;

    type: 'tool';
  }

  export namespace ToolPart {
    export interface ToolStatePending {
      status: 'pending';
    }

    export interface ToolStateRunning {
      status: 'running';

      time: ToolStateRunning.Time;

      input?: unknown;

      metadata?: { [key: string]: unknown };

      title?: string;
    }

    export namespace ToolStateRunning {
      export interface Time {
        start: number;
      }
    }

    export interface ToolStateCompleted {
      input: { [key: string]: unknown };

      metadata: { [key: string]: unknown };

      output: string;

      status: 'completed';

      time: ToolStateCompleted.Time;

      title: string;
    }

    export namespace ToolStateCompleted {
      export interface Time {
        end: number;

        start: number;
      }
    }

    export interface ToolStateError {
      error: string;

      input: { [key: string]: unknown };

      status: 'error';

      time: ToolStateError.Time;
    }

    export namespace ToolStateError {
      export interface Time {
        end: number;

        start: number;
      }
    }
  }

  export interface StepStartPart {
    id: string;

    messageID: string;

    sessionID: string;

    type: 'step-start';
  }

  export interface StepFinishPart {
    id: string;

    cost: number;

    messageID: string;

    sessionID: string;

    tokens: StepFinishPart.Tokens;

    type: 'step-finish';
  }

  export namespace StepFinishPart {
    export interface Tokens {
      cache: Tokens.Cache;

      input: number;

      output: number;

      reasoning: number;
    }

    export namespace Tokens {
      export interface Cache {
        read: number;

        write: number;
      }
    }
  }

  export interface SnapshotPart {
    id: string;

    messageID: string;

    sessionID: string;

    snapshot: string;

    type: 'snapshot';
  }

  export interface PatchPart {
    id: string;

    files: Array<string>;

    hash: string;

    messageID: string;

    sessionID: string;

    type: 'patch';
  }
}

export interface ProviderAuthError {
  data: ProviderAuthError.Data;

  name: 'ProviderAuthError';
}

export namespace ProviderAuthError {
  export interface Data {
    message: string;

    providerID: string;
  }
}

export interface UnknownError {
  data: UnknownError.Data;

  name: 'UnknownError';
}

export namespace UnknownError {
  export interface Data {
    message: string;
  }
}

export type MessageListResponse = Array<MessageListResponse.MessageListResponseItem>;

export namespace MessageListResponse {
  export interface MessageListResponseItem {
    info: MessageAPI.Message;

    parts: Array<MessageAPI.Part>;
  }
}

export interface MessageCreateParams {
  modelID: string;

  parts: Array<MessageCreateParams.TextPartInput | MessageCreateParams.FilePartInput>;

  providerID: string;

  messageID?: string;

  mode?: string;

  system?: string;

  tools?: { [key: string]: boolean };
}

export namespace MessageCreateParams {
  export interface TextPartInput {
    text: string;

    type: 'text';

    id?: string;

    synthetic?: boolean;

    time?: TextPartInput.Time;
  }

  export namespace TextPartInput {
    export interface Time {
      start: number;

      end?: number;
    }
  }

  export interface FilePartInput {
    mime: string;

    type: 'file';

    url: string;

    id?: string;

    filename?: string;

    source?: MessageAPI.FilePartSource;
  }
}

export declare namespace MessageResource {
  export {
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
