export const formatTime = (seconds) => {
  const hours = Math.floor(seconds /3600);
  const minutes = Math.floor((seconds % 3600) /60);
  const secs = seconds % 60;
  return `${String(hours).padStart(1,'0')}h ${String(minutes).padStart(2,'0')}m ${String(secs).padStart(2,'0')}s`;
};