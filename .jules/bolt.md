## 2024-06-08 - Synchronous Disk I/O in OpenCode System Transform Hooks

**Learning:** The `experimental.chat.system.transform` hook in OpenCode runs on every chat turn. Using synchronous disk I/O (`fs.readFileSync`) within this hot path blocks the main thread, potentially causing UI stuttering and degrading performance as the app scales.
**Action:** Always use asynchronous file operations (`fs.promises.readFile`) and cache the results where possible when reading static assets or configurations in frequently executed hooks.
