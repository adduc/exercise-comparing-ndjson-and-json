# Exercise: Profiling memory usage parsing NDJSON and JSON

This exercise demos how NDJSON consumes less memory than JSON to parse
large payloads, even when the entire payload is already in memory.

## Benchmarks

With a 285MB Payload (2.4MB compressed):

| Method | Memory Usage | Time  |
| ------ | ------------ | ----- |
| JSON   | 480 MB       | 2.81s |
| NDJSON | 191 MB       | 3.09s |
