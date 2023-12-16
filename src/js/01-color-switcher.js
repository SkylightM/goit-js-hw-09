const body = document.body;
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

startButton.addEventListener('click', event => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  event.currentTarget.setAttribute('disabled', 'disabled');
});

stopButton.addEventListener('click', () => {
  clearInterval(timerId);
  startButton.removeAttribute('disabled');
});