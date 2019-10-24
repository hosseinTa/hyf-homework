let countS = 0;
let countL = 0;

const result = document.getElementById('log')
const startButton = document.getElementById('start');
const gameTime = document.querySelector('input[type=text]');
gameTime.focus();

const player = [document.getElementById('scoreS'), document.getElementById('scoreL')];
console.log(player[0]);
console.log(player[1]);

startButton.addEventListener('click', startGame)

gameTime.addEventListener("keypress", checkEnter);

function checkEnter(e) {
  if (e.key === "Enter") {
    startButton.focus();
    startGame();
  }
}

function startGame() {
  countS = 0;
  countL = 0;
  document.addEventListener('keypress', logKey);
  const time = gameTime.value;
  setTimeout(GameOver, time * 1000);
  player[0].textContent = `Press S`;
  player[1].textContent = `Press L`;
  player[0].style.background = 'none';
  player[1].style.background = 'none';
}

function GameOver() {
  document.removeEventListener('keypress', logKey);
  if (countS > countL) {
    giveGiftToWinner(0)
    result.textContent = `player ${0 + 1} win.`;
  }
  if (countS < countL) {
    giveGiftToWinner(1)
    result.textContent = `player ${1 + 1} win.`;
  }
  if (countS === countL) {
    result.textContent = `No player win.`;
    giveGiftToWinner(0)
    giveGiftToWinner(1)
  }
}

function logKey(e) {
  console.log(e)
  if (e.key.toLowerCase() === 's') {
    countS += 1;
    player[0].textContent = `Press 1 ${countS}`;
  }
  if (e.key.toLowerCase() === 'l') {
    countL += 1;
    player[1].textContent = `Press 2 ${countL}`;
  }
  console.log(`l = ${countL}`)
  console.log(`s = ${countS}`)
}

function giveGiftToWinner(winner) {
  player[winner].style.backgroundImage = 'url("https://media.giphy.com/media/3oEhmXZk3262W6lPC8/giphy.gif")';
  player[winner].style.backgroundSize = '35vh';
  player[winner].style.backgroundRepeat = 'no-repeat'
}