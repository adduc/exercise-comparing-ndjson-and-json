var previous_heap = window.performance.memory
  ? window.performance.memory.usedJSHeapSize
  : 0;
var previous_time = window.performance.now();

var measured_mem = [];
var measured_time = [];

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
  measured_mem[event] = measured_mem[event] || [];
  measured_mem[event].push(memory.usedJSHeapSize / mb);

  measured_time[event] = measured_time[event] || [];
  measured_time[event].push(window.performance.now() - previous_time);

  // prep for next measurement
  previous_heap = memory.usedJSHeapSize;
  previous_time = window.performance.now();
}

function logAverages(event) {
  console.log({
    time_avg_ms: (
      measured_time[event].reduce((a, b) => a + b, 0) /
      measured_time[event].length
    ).toFixed(2),
    mem_avg_mb: (
      measured_mem[event].reduce((a, b) => a + b, 0) /
      measured_mem[event].length
    ).toFixed(2),
  });
}
