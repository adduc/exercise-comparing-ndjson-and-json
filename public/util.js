var previous_heap = window.performance.memory
  ? window.performance.memory.usedJSHeapSize
  : 0;
var previous_time = window.performance.now();

var measurements = [];

function profileMemory(event) {
  if (typeof window.performance.memory === 'undefined') {
    return;
  }

  [mb, memory] = [1024 * 1024, window.performance.memory];

  console.log({
    event,
    delta_time_ms: (window.performance.now() - previous_time).toFixed(2),
    delta_mb: ((memory.usedJSHeapSize - previous_heap) / mb).toFixed(2),
    used_mb: (memory.usedJSHeapSize / mb).toFixed(2),
  });

  // aggregate measurements
  measurements[event] = measurements[event] || [];
  measurements[event].push((memory.usedJSHeapSize / mb).toFixed(2));

  // prep for next measurement
  previous_heap = memory.usedJSHeapSize;
  previous_time = window.performance.now();
}
