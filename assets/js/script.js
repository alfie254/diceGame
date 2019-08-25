/**
 **Author: @alfie
 **Company: Vibral(Vibral.co.ke)
 **/

//var player0 = prompt('Player One: ');
//var player1 = prompt('Player Two: ');

var score, activePlayer, currentScore, finalScore, isPlaying, player1, player2;
init();

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

        document.getElementById('dice-1').src = "assets/images/dice-" + dice1 + ".png";
        document.getElementById('dice-2').src = "assets/images/dice-" + dice2 + ".png";
        currentScore += dice1 + dice2;
        document.getElementById('current-' + activePlayer).innerText = currentScore;
        showDice();
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    hideDice();
}

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (isPlaying) {
        score[activePlayer] += currentScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        finalScore = document.getElementById('finalScore').value;
        if (finalScore) {
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
            nextPlayer();
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init);