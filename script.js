const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resumeButton = document.getElementById('resumeButton');
const timeInput = document.getElementById('timeInput');
const countdownDisplay = document.getElementById('countdownDisplay');

let timer;
let remainingTime;

function startTimer() {
    const inputSeconds = parseInt(timeInput.value);
    if (isNaN(inputSeconds) || inputSeconds <= 0) {
        countdownDisplay.innerText = 'Please enter a valid number greater than 0';
        return;
    }
    remainingTime = inputSeconds;
    updateDisplay();
    toggleButtons('start');
    timer = setInterval(countdown, 1000);
}

function countdown() {
    remainingTime--;
    updateDisplay();
    if (remainingTime <= 0) {
        clearInterval(timer);
        countdownDisplay.innerText = 'Time is up!';
        toggleButtons('end');
    }
}

function pauseTimer() {
    clearInterval(timer);
    toggleButtons('pause');
}

function resumeTimer() {
    timer = setInterval(countdown, 1000);
    toggleButtons('resume');
}

function updateDisplay() {
    countdownDisplay.innerText = `Time remaining: ${remainingTime} seconds`;
}

function toggleButtons(action) {
    switch (action) {
        case 'start':
            startButton.disabled = true;
            pauseButton.disabled = false;
            resumeButton.disabled = true;
            timeInput.disabled = true;
            break;
        case 'pause':
            startButton.disabled = true;
            pauseButton.disabled = true;
            resumeButton.disabled = false;
            break;
        case 'resume':
            startButton.disabled = true;
            pauseButton.disabled = false;
            resumeButton.disabled = true;
            break;
        case 'end':
            startButton.disabled = false;
            pauseButton.disabled = true;
            resumeButton.disabled = true;
            timeInput.disabled = false;
            break;
    }
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);
