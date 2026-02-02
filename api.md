# Event

Types:

- <code><a href="./src/resources/event.ts">EventListResponse</a></code>

Methods:

- <code title="get /event">client.event.<a href="./src/resources/event.ts">list</a>() -> EventListResponse</code>

# App

Types:

- <code><a href="./src/resources/app.ts">AppRetrieveResponse</a></code>
- <code><a href="./src/resources/app.ts">AppInitializeResponse</a></code>

Methods:

- <code title="get /app">client.app.<a href="./src/resources/app.ts">retrieve</a>() -> AppRetrieveResponse</code>
- <code title="post /app/init">client.app.<a href="./src/resources/app.ts">initialize</a>() -> AppInitializeResponse</code>

# Config

Types:

- <code><a href="./src/resources/config.ts">ModeConfig</a></code>
- <code><a href="./src/resources/config.ts">ConfigRetrieveResponse</a></code>
- <code><a href="./src/resources/config.ts">ConfigListProvidersResponse</a></code>

Methods:

- <code title="get /config">client.config.<a href="./src/resources/config.ts">retrieve</a>() -> ConfigRetrieveResponse</code>
- <code title="get /config/providers">client.config.<a href="./src/resources/config.ts">listProviders</a>() -> ConfigListProvidersResponse</code>

# Session

Types:

- <code><a href="./src/resources/session/session.ts">Session</a></code>
- <code><a href="./src/resources/session/session.ts">SessionListResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionDeleteResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionAbortResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionInitResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionSummarizeResponse</a></code>

Methods:

- <code title="post /session">client.session.<a href="./src/resources/session/session.ts">create</a>() -> Session</code>
- <code title="get /session">client.session.<a href="./src/resources/session/session.ts">list</a>() -> SessionListResponse</code>
- <code title="delete /session/{id}">client.session.<a href="./src/resources/session/session.ts">delete</a>(id) -> SessionDeleteResponse</code>
- <code title="post /session/{id}/abort">client.session.<a href="./src/resources/session/session.ts">abort</a>(id) -> SessionAbortResponse</code>
- <code title="post /session/{id}/init">client.session.<a href="./src/resources/session/session.ts">init</a>(id, { ...params }) -> SessionInitResponse</code>
- <code title="post /session/{id}/revert">client.session.<a href="./src/resources/session/session.ts">revert</a>(id, { ...params }) -> Session</code>
- <code title="post /session/{id}/summarize">client.session.<a href="./src/resources/session/session.ts">summarize</a>(id, { ...params }) -> SessionSummarizeResponse</code>
- <code title="post /session/{id}/unrevert">client.session.<a href="./src/resources/session/session.ts">unrevert</a>(id) -> Session</code>

## Share

Methods:

- <code title="post /session/{id}/share">client.session.share.<a href="./src/resources/session/share.ts">create</a>(id) -> Session</code>
- <code title="delete /session/{id}/share">client.session.share.<a href="./src/resources/session/share.ts">delete</a>(id) -> Session</code>

## Message

Types:

- <code><a href="./src/resources/session/message.ts">AbortedError</a></code>
- <code><a href="./src/resources/session/message.ts">AssistantMessage</a></code>
- <code><a href="./src/resources/session/message.ts">FilePartSource</a></code>
- <code><a href="./src/resources/session/message.ts">FilePartSourceText</a></code>
- <code><a href="./src/resources/session/message.ts">Message</a></code>
- <code><a href="./src/resources/session/message.ts">OutputLengthError</a></code>
- <code><a href="./src/resources/session/message.ts">Part</a></code>
- <code><a href="./src/resources/session/message.ts">ProviderAuthError</a></code>
- <code><a href="./src/resources/session/message.ts">UnknownError</a></code>
- <code><a href="./src/resources/session/message.ts">MessageListResponse</a></code>

Methods:

- <code title="post /session/{id}/message">client.session.message.<a href="./src/resources/session/message.ts">create</a>(id, { ...params }) -> AssistantMessage</code>
- <code title="get /session/{id}/message">client.session.message.<a href="./src/resources/session/message.ts">list</a>(id) -> MessageListResponse</code>

# Find

Types:

- <code><a href="./src/resources/find.ts">Range</a></code>
- <code><a href="./src/resources/find.ts">FindRetrieveResponse</a></code>
- <code><a href="./src/resources/find.ts">FindRetrieveFileResponse</a></code>
- <code><a href="./src/resources/find.ts">FindRetrieveSymbolResponse</a></code>

Methods:

- <code title="get /find">client.find.<a href="./src/resources/find.ts">retrieve</a>({ ...params }) -> FindRetrieveResponse</code>
- <code title="get /find/file">client.find.<a href="./src/resources/find.ts">retrieveFile</a>({ ...params }) -> FindRetrieveFileResponse</code>
- <code title="get /find/symbol">client.find.<a href="./src/resources/find.ts">retrieveSymbol</a>({ ...params }) -> FindRetrieveSymbolResponse</code>

# File

Types:

- <code><a href="./src/resources/file.ts">FileRetrieveResponse</a></code>
- <code><a href="./src/resources/file.ts">FileRetrieveStatusResponse</a></code>

Methods:

- <code title="get /file">client.file.<a href="./src/resources/file.ts">retrieve</a>({ ...params }) -> FileRetrieveResponse</code>
- <code title="get /file/status">client.file.<a href="./src/resources/file.ts">retrieveStatus</a>() -> FileRetrieveStatusResponse</code>

# Log

Types:

- <code><a href="./src/resources/log.ts">LogCreateResponse</a></code>

Methods:

- <code title="post /log">client.log.<a href="./src/resources/log.ts">create</a>({ ...params }) -> LogCreateResponse</code>

# Mode

Types:

- <code><a href="./src/resources/mode.ts">ModeListResponse</a></code>

Methods:

- <code title="get /mode">client.mode.<a href="./src/resources/mode.ts">list</a>() -> ModeListResponse</code>

# Tui

Types:

- <code><a href="./src/resources/tui.ts">TuiAppendPromptResponse</a></code>
- <code><a href="./src/resources/tui.ts">TuiOpenHelpResponse</a></code>

Methods:

- <code title="post /tui/append-prompt">client.tui.<a href="./src/resources/tui.ts">appendPrompt</a>({ ...params }) -> TuiAppendPromptResponse</code>
- <code title="post /tui/open-help">client.tui.<a href="./src/resources/tui.ts">openHelp</a>() -> TuiOpenHelpResponse</code>
