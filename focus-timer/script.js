let time;
let timerInterval = null;
let isRunning = false;
let isFocus = true;

const FOCUS_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

const timerDisplay = document.getElementById("timer");
const modeText = document.getElementById("mode");
const alarmSound = document.getElementById("alarmSound");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// ===== DISPLAY =====
function updateDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

// ===== GUARDAR ESTADO =====
function saveState() {
    localStorage.setItem("focusTimer", JSON.stringify({
        time,
        isFocus,
        isRunning
    }));
}

function loadState() {
    const saved = JSON.parse(localStorage.getItem("focusTimer"));
    if (!saved) {
        time = FOCUS_TIME;
        return;
    }

    time = saved.time;
    isFocus = saved.isFocus;
    isRunning = false;

    updateMode();
    updateDisplay();
}

// ===== MODO =====
function updateMode() {
    if (isFocus) {
        modeText.textContent = "Tiempo de concentración";
        modeText.className = "focus";
    } else {
        modeText.textContent = "Tiempo de descanso";
        modeText.className = "break";
    }
}

// ===== TIMER =====
function startTimer() {
    if (isRunning) return;

    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;

    timerInterval = setInterval(() => {
        time--;

        if (time <= 0) {
            alarmSound.play();

            isFocus = !isFocus;
            time = isFocus ? FOCUS_TIME : BREAK_TIME;
            updateMode();
        }

        updateDisplay();
        saveState();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    saveState();
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isFocus = true;
    time = FOCUS_TIME;

    updateMode();
    updateDisplay();

    startBtn.disabled = false;
    pauseBtn.disabled = true;

    localStorage.removeItem("focusTimer");
}

// ===== EVENTOS =====
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// ===== INIT =====
loadState();
updateDisplay();
updateMode();
