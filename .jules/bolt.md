## 2024-06-16 - Cache Bootstrap Content in Chat Transform Hook
**Learning:** The `experimental.chat.system.transform` hook runs on every chat turn. Synchronous operations like `fs.readFileSync` in this hot path block the main thread and degrade performance.
**Action:** Cache the results of static file reads and expensive parsing operations that are required by frequently called hooks to ensure the main thread remains unblocked.
