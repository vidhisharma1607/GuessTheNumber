'use strict';
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// console.log(document.querySelector('.number').textContent=randomNumber);

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);
  //   console.log(typeof inputNumber, inputNumber);
  if (!inputNumber) {
    document.querySelector('.message').textContent = '🙅‍♀️ No valid input';
    document.querySelector('body').style.backgroundColor = '#8B0000';
  } else if (inputNumber === randomNumber) {
    document.querySelector('.message').textContent = '🎉 you are Correct';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (inputNumber > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 you are too high ';
      document.querySelector('body').style.backgroundColor = ' #F7B969';
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game :( ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (inputNumber < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 you are too low';
      document.querySelector('body').style.backgroundColor = '#F7B969';
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game :( ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
});
