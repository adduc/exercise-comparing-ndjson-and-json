# Exercise: Profiling memory usage parsing NDJSON and JSON

This exercise shows how NDJSON streaming can be used to consume less
memory in the browser than JSON for parsing large payloads.

## Benchmarks

With a 114 MB payload (917 kB compressed):

| Device     | Method | Memory Usage | Time  |
| ---------- | ------ | ------------ | ----- |
| HTC One M7 | JSON   | ???          | 6.69s |
| HTC One M7 | NDJSON | ???          | 5.61s |
| Laptop     | JSON   | 289.09 MB    | 1.03s |
| Laptop     | NDJSON | 124.32 MB    | 1.07s |

Larger payloads crashed the JSON parser on the HTC One M7, but the
NDJSON method was able to parse them.

With a 265 MB payload (2.4 MB compressed):

| Device     | Method | Memory Usage | Time    |
| ---------- | ------ | ------------ | ------- |
| HTC One M7 | JSON   | CRASHED      | CRASHED |
| HTC One M7 | NDJSON | ???          | 15.18s  |
| Laptop     | JSON   | 480.9 MB     | 3.17s   |
| Laptop     | NDJSON | 247.6 MB     | 3.4s    |
