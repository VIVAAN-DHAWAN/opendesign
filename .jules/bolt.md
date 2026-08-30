## 2026-06-10 - [Optimize chat transform hook in OpenDesign plugin]
**Learning:** [Avoiding synchronous file system operations in OpenCode plugin chat transform hooks prevents blocking the main thread during frequent chat interactions.]
**Action:** [Always use asynchronous methods like `fs.promises.readFile` and implement caching for files that are read frequently or on hot paths.]
