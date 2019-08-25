/*
 * Author: Alfred Maina 
 * Company: @jackaltech (http://jackaltech.com)
 */

var score, activePlayer, currentScore, finalScore, isPlaying, player1, player2;

player0 = prompt('Player One:');
player1 = prompt('Player Two:');

init();

function init() {
  score = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  document.querySelector('#score-0').innerHTML = 0;
  document.querySelector('#score-1').innerHTML = 0;
  document.querySelector('#current-0').innerHTML = 0;
  document.querySelector('#current-1').innerHTML = 0;
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.getElementById('wins-0').textContent = '';
  document.getElementById('wins-1').textContent = '';
  isPlaying = true;
  hideDice();

  //Player's names
  if (player1) {
    document.getElementById('player-0').textContent = player0;
  } else {
    document.getElementById('player-0').textContent = 'player-1';
  }
  if (player1) {
    document.getElementById('player-1').textContent = player1;
  } else {
    document.getElementById('player-1').textContent = 'player-2';
  }

}

function hideDice() {
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
}

function showDice() {
  document.getElementById('dice-1').style.display = 'block';
  document.getElementById('dice-2').style.display = 'block';
}

document.querySelector('.btn-roll').addEventListener('click', function () {
  if (isPlaying) {
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);

    document.getElementById('dice-1').src = 'assets/images/dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'assets/images/dice-' + dice2 + '.png';
    showDice();

    if (dice1 === 1 || dice2 === 1) {
      currentScore = 0;
      nextPlayer();
    } else if (dice1 === 6 && dice2 === 6) {
      score[activePlayer] = 0;
      document.getElementById('score-' + activePlayer).textContent = 0;
      nextPlayer();
    } else if (dice1 === 4 && dice2 === 4) {
      score[activePlayer] = 0;
      document.getElementById('score-' + activePlayer).textContent = 0;
      nextPlayer();
    } else {
      currentScore += dice1 + dice2;
      document.getElementById('current-' + activePlayer).textContent = currentScore;
    }

  }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (isPlaying) {
    score[activePlayer] += currentScore;
    document.getElementById('score-' + activePlayer).innerText = score[activePlayer];

    //check if player has won
    finalScore = document.getElementById('finalScore').value;
    var winningScore;
    if (finalScore) {
      winningScore = finalScore;
    } else {
      winningScore = 20;
    }
    if (score[activePlayer] >= winningScore) {
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('#wins-' + activePlayer).innerHTML = ' wins!!';
      hideDice();
      document.querySelector('.player-0-panel').classList.remove('active');
      document.querySelector('.player-1-panel').classList.remove('active');
      isPlaying = false;
    } else {
      nextPlayer();
    }
  }

});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  currentScore = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  hideDice();
}

document.querySelector('.btn-new').addEventListener('click', function () {
  init();
});