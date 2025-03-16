let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const lapsList = document.getElementById("laps-list");

function updateTimer() {
  milliseconds += 10;

  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds += 1;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }

  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
  millisecondsDisplay.textContent = String(milliseconds / 10).padStart(2, "0");
}

function startTimer() {
  if (!isRunning) {
    interval = setInterval(updateTimer, 10);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  isRunning = false;
  minutesDisplay.textContent = "00";
  secondsDisplay.textContent = "00";
  millisecondsDisplay.textContent = "00";
  lapsList.innerHTML = "";
}

function recordLap() {
  const lapTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
    milliseconds / 10
  ).padStart(2, "0")}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  lapsList.appendChild(lapItem);
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);