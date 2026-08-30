
## 2026-06-19 - Blocking I/O in Chat Transform Hooks
**Learning:** The experimental.chat.system.transform hook in OpenCode plugins runs on every chat turn. Synchronous operations like fs.readFileSync in this hot path block the main thread and significantly degrade performance.
**Action:** Cache the result of file reads in module scope so subsequent chat turns return immediately without hitting the filesystem.
