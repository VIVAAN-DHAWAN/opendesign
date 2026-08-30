
## 2026-06-20 - Prevent synchronous file reading in OpenCode chat transform hooks
**Learning:** Hooks like `experimental.chat.system.transform` run on every chat turn. Performing synchronous operations like `fs.readFileSync` in these hot paths blocks the main thread.
**Action:** Memoized the file content at the plugin level so it is only read once during the first chat turn.
