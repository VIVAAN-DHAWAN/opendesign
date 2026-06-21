## 2024-05-15 - OpenCode Plugin Transform Hook Performance
**Learning:** OpenCode plugin hooks like `experimental.chat.system.transform` run on every single chat turn. Using synchronous file operations (`fs.existsSync`, `fs.readFileSync`) inside these hot paths blocks the Node.js event loop and severely degrades performance.
**Action:** Always cache the results of synchronous operations in a closure-level variable or use asynchronous alternatives if available to prevent main thread blocking on hot paths.
