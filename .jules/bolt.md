## 2026-06-17 - Cached Synchronous I/O in Chat Transform Hooks
**Learning:** In OpenCode plugins, `experimental.chat.system.transform` hooks run on every single chat turn. Performing synchronous operations like `fs.readFileSync` within these hooks blocks the main thread frequently, causing a significant performance bottleneck during chat interactions.
**Action:** Always cache the results of synchronous I/O operations outside the hook function (e.g., in a closure or module scope) when they don't need to be dynamically re-evaluated on every turn.
