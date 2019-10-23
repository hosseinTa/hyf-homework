
let countS = 0;
let countL = 0;

const result = document.getElementById('log')
const startButton = document.getElementById('start');
const gameTime = document.querySelector('input[type=text]');

const scoreBoardS = document.getElementById('scoreS')
const scoreBoardL = document.getElementById('scoreL')

startButton.addEventListener('click' , startGame)

function startGame() {
    countS = 0;
    countL = 0;
    document.addEventListener('keypress', logKey);
    const time = gameTime.value; 
    setTimeout( GameOver , time * 1000 );
    scoreBoardS.textContent = `Press S`;
    scoreBoardL.textContent = `Press L`;
    document.getElementById('scoreS').style.background = 'none';
    document.getElementById('scoreL').style.background = 'none';
}

function GameOver() {
  document.removeEventListener('keypress', logKey);
  if(countS > countL) {
    result.textContent = 'S WIN' 
    document.getElementById('scoreS').style.background = 'red';
  }
  if(countS < countL) {
    result.textContent = 'L WIN';
    document.getElementById('scoreL').style.background = 'red';
  }
}

function logKey(e) {
  console.log(e)
  if(e.key.toLowerCase() === 's') {
    countS += 1;
    scoreBoardS.textContent = `Press S ${countS}`;
  }
  if(e.key.toLowerCase() === 'l') {
    countL += 1;
    scoreBoardL.textContent = `Press L ${countL}`;
  }
  console.log(`l = ${countL}`)
  console.log(`s = ${countS}`)
}