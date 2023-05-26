function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

let intervalId;

document.getElementById('startButton').addEventListener('click', function () {
  intervalId = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  this.disabled = true;
  document.getElementById('stopButton').disabled = false;
});

document.getElementById('stopButton').addEventListener('click', function () {
  clearInterval(intervalId);

  this.disabled = true;
  document.getElementById('startButton').disabled = false;
});
