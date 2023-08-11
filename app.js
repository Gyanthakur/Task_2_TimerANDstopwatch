let timerInterval;
let stopwatchInterval;
let stopwatchTime = 0;

function formatTime(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function formatMilliseconds(milliseconds) {
  const ms = Math.floor(milliseconds / 10) % 100; // Taking the last two digits
  return `${String(ms).padStart(2, '0')}`;
}

function startTimer() {
  let timeInSeconds = 0;
  document.getElementById("timerDisplay").textContent = formatTime(timeInSeconds);

  timerInterval = setInterval(() => {
    timeInSeconds++;
    document.getElementById("timerDisplay").textContent = formatTime(timeInSeconds);
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timerDisplay").textContent = "00:00:00";
}

function startStopwatch() {
  document.getElementById("stopwatchDisplay").textContent = "00:00:00.00";

  stopwatchInterval = setInterval(() => {
    stopwatchTime += 10;
    const formattedTime = formatTime(Math.floor(stopwatchTime / 1000));
    const formattedMilliseconds = formatMilliseconds(stopwatchTime);
    document.getElementById("stopwatchDisplay").textContent = `${formattedTime}.${formattedMilliseconds}`;
  }, 10);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById("stopwatchDisplay").textContent = "00:00:00.00";
}
