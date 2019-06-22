/*
  * Authour: Alfred Maina 
  * Company: @jackaltech (http://jackaltech.com)
*/

var score, activePlayer, currentScore;

init();

function init(){
  score = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  document.querySelector('#score-0').innerHTML = 0;
  document.querySelector('#score-1').innerHTML = 0;
  document.querySelector('#current-0').innerHTML = 0;  
  document.querySelector('#current-1').innerHTML = 0;
  hideDice();
  
}

function hideDice(){  
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
}
function showDice(){  
  document.getElementById('dice-1').style.display = 'block';
  document.getElementById('dice-2').style.display = 'block';
}

document.querySelector('.btn-roll').addEventListener('click', function(){
  var dice1 = Math.floor(Math.random() * 6 + 1);
  var dice2 = Math.floor(Math.random() * 6 + 1);

  document.getElementById('dice-1').src = 'assets/images/dice-' + dice1 + '.png';  
  document.getElementById('dice-2').src = 'assets/images/dice-' + dice2 + '.png';
  showDice();

  currentScore += dice1 + dice2;
  document.getElementById('current-' + activePlayer).textContent = currentScore;
  
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  score[activePlayer] += currentScore;
  document.getElementById('score-' + activePlayer).innerText = score[activePlayer];
  nextPlayer();
});

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.player-2-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', function(){
  init();
});
