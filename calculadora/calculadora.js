const display = document.getElementById("display");

let currentValue = "";
let lastChar = "";

function appendNumber(num) {
    currentValue += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentValue === "") return;
    if (isOperator(lastChar)) return;

    currentValue += op;
    updateDisplay();
}

function appendDot() {
    const parts = currentValue.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];

    if (lastPart.includes(".")) return;

    currentValue += ".";
    updateDisplay();
}

function clearDisplay() {
    currentValue = "";
    updateDisplay();
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        const result = Function(`"use strict"; return (${currentValue})`)();
        currentValue = result.toString();
        updateDisplay();
    } catch {
        display.value = "Error";
        currentValue = "";
    }
}

function updateDisplay() {
    display.value = currentValue || "0";
    lastChar = currentValue.slice(-1);
}

function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

// Soporte teclado
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key)) appendNumber(e.key);
    if (["+", "-", "*", "/"].includes(e.key)) appendOperator(e.key);
    if (e.key === ".") appendDot();
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") deleteLast();
    if (e.key === "Escape") clearDisplay();
});

