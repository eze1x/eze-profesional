let time = 25 * 60; // 25 minutos en segundos
let timerInterval = null;
let isRunning = false;
let isFocus = true;

const timerDisplay = document.getElementById("timer");
const modeText = document.getElementById("mode");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    timerInterval = setInterval(() => {
        time--;

        if (time <= 0) {
            clearInterval(timerInterval);
            isRunning = false;

            if (isFocus) {
                isFocus = false;
                time = 5 * 60;
                modeText.textContent = "Tiempo de descanso";
            } else {
                isFocus = true;
                time = 25 * 60;
                modeText.textContent = "Tiempo de concentración";
            }

            updateDisplay();
            startTimer();
        }

        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isFocus = true;
    time = 25 * 60;
    modeText.textContent = "Tiempo de concentración";
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
