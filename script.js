function cpuburn(durationMs) {
  //console.time("cpuburn");
  const start = new Date().getTime();
  while (new Date().getTime() - start < durationMs);
  //console.timeEnd("cpuburn");
}
