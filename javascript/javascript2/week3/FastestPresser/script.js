
let countS = 0;
let countL = 0;
document.addEventListener('keypress', logKey);

function logKey(e) {
  console.log(e)
  if(e.key.toLowerCase() === 's') {
    countS += 1;
  }
  if(e.key.toLowerCase() === 'l') {
    countL += 1;
  }
  console.log(`l = ${countL}`)
  console.log(`s = ${countS}`)
}