## 2026-06-13 - [Sync I/O in OpenCode hooks]
**Learning:** OpenCode plugin hooks like `experimental.chat.system.transform` run on every chat turn. Using synchronous file system operations (`fs.readFileSync`) here blocks the main thread and creates a severe performance bottleneck.
**Action:** Always use async operations (`fs.promises.readFile`) and cache/memoize static file reads within hot paths like plugin hook callbacks.
