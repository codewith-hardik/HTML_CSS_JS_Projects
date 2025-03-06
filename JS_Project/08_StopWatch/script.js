// script.js
let startStopBtn = document.getElementById('start-stop-btn');
let resetBtn = document.getElementById('reset-btn');
let timeDisplay = document.getElementById('time-display');

let timerInterval;
let isRunning = false;
let elapsedSeconds = 0;

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
    timeDisplay.textContent = formatTime(elapsedSeconds);
}

function startStopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Start';
    } else {
        timerInterval = setInterval(() => {
            elapsedSeconds++;
            updateDisplay();
        }, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedSeconds = 0;
    isRunning = false;
    updateDisplay();
    startStopBtn.textContent = 'Start';
}

startStopBtn.addEventListener('click', startStopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize the display
updateDisplay();
