/*
 * Authour: Alfred Maina 
 * Company: @jackaltech (http://jackaltech.com)
 */

let score, activePlayer, currentScore, finalScore, isPlaying, player1, player2;

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

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (isPlaying) {
        var dice1 = Math.floor(Math.random() * 6 + 1);
        var dice2 = Math.floor(Math.random() * 6 + 1);

        document.getElementById('dice-1').src = 'assets/images/dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'assets/images/dice-' + dice2 + '.png';
        showDice();

        if (dice1 === 1 & dice2 === 1 || dice1 === 2 & dice2 === 2 || dice1 === 3 & dice2 === 3 || dice1 === 5 & dice2 === 5) {
            alert('Sorry you rolled ' + dice1 + ' and ' + dice1 + ' you lose your current score');
            currentScore = 0;
            nextPlayer();
        } else if (dice1 === 6 && dice2 === 6) {
            alert('You rolled 6 and 6 so you lose your entire score');
            score[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else if (dice1 === 4 && dice2 === 4) {
            alert('You rolled 4 and 4 so you lose your entire score');
            score[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else {
            currentScore += dice1 + dice2;
            document.getElementById('current-' + activePlayer).textContent = currentScore;
        }

    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (isPlaying) {
        score[activePlayer] += currentScore;
        document.getElementById('score-' + activePlayer).innerText = score[activePlayer];

        //check if player has won
        finalScore = document.getElementById('finalScore').value;
        var winningScore;
        if (finalScore) {
            winningScore = finalScore;
        } else {
            winningScore = 100;
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

document.querySelector('.btn-new').addEventListener('click', function() {
    init();
});
