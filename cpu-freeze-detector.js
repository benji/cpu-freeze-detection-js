let lastSeenTickTime = null;
let tickIntervalHandle = null;
const tickIntervalMs = 100;
const cpuThresholdMs = 500;

function startCpuMonitoring() {
  //console.log("start monitoring CPU with interval(ms)=" + tickIntervalMs);
  lastSeenTickTime = null;

  tickIntervalHandle = setInterval(() => {
    const tickTime = new Date().getTime();
    if (lastSeenTickTime !== null) {
      const tickDelta = tickTime - lastSeenTickTime;
      if (tickDelta > cpuThresholdMs) {
        const minFreezeTime = tickDelta - tickIntervalMs;
        console.log("Detected CPU freeze > " + minFreezeTime + "ms");
      }
    }
    lastSeenTickTime = tickTime;
  }, tickIntervalMs);
}

window.addEventListener("focus", (e) => {
  startCpuMonitoring();
});

window.addEventListener("blur", (e) => {
  clearInterval(tickIntervalHandle);
});

startCpuMonitoring();
