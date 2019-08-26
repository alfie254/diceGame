/**
 **Author: @alfie
 **Company: Vibral(Vibral.co.ke)
 **/

var player0 = prompt('Player One: ');
var player1 = prompt('Player Two: ');

var score, activePlayer, currentScore, finalScore, isPlaying, player1, player2;
init();

if (player0) {
    document.getElementById('player-0').innerHTML = player0;
} else {
    document.getElementById('player-0').innerText = "Player-1";
}
if (player1) {
    document.getElementById('player-1').innerHTML = player1;
} else {
    document.getElementById('player-0').innerText = "Player-2";
}

function init() {
    document.getElementById('score-0').innerText = 0;
    document.getElementById('score-1').innerText = 0;
    document.getElementById('current-0').innerText = 0;
    document.getElementById('current-1').innerText = 0;
    document.getElementById('score-0').innerText = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#wins-1').textContent = "";
    document.querySelector('#wins-0').textContent = "";
    document.getElementById('finalScore').disabled = false;
    activePlayer = 0;
    currentScore = 0;
    score = [0, 0];
    hideDice();
    isPlaying = true;
}

function hideDice() {
    document.querySelector('.dice').classList.add('d-none');
    document.getElementById('dice-2').style.display = 'none';
}

function showDice() {
    document.querySelector('.dice').classList.remove('d-none');
    document.getElementById('dice-2').style.display = 'block';
}

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (isPlaying) {
        var dice1 = Math.floor(Math.random() * 6 + 1);
        var dice2 = Math.floor(Math.random() * 6 + 1);
        showDice();

        document.getElementById('dice-1').src = "assets/images/dice-" + dice1 + ".png";
        document.getElementById('dice-2').src = "assets/images/dice-" + dice2 + ".png";
        if (dice1 == 1 && dice2 == 1) {
            alert('You rolled two 1s, better luck next time. Next players Turn');
            nextPlayer();
        } else if (dice1 == 6 && dice2 == 6) {
            score[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).innerText = 0;
            alert('You rolled two 6s, you lost your entire score :-( Next players Turn');
            clearCurrent();
            nextPlayer();

        } else {
            currentScore += dice1 + dice2;
            document.getElementById('current-' + activePlayer).innerText = currentScore;
        }
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    hideDice();
}

function clearCurrent() {
    document.getElementById('current-' + activePlayer).innerText = 0;
}

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (isPlaying) {
        score[activePlayer] += currentScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        finalScore = document.getElementById('finalScore').value;
        if (finalScore) {
            document.getElementById('finalScore').disabled = true;
            winningScore = finalScore;
        } else {
            winningScore = 20;
        }
        if (score[activePlayer] >= winningScore) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('#wins-' + activePlayer).innerHTML = ' wins!!';
            hideDice();
            isPlaying = false;
        } else {
            clearCurrent();
            nextPlayer();
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init);