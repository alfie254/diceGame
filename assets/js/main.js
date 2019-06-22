/*
  * Authour: Alfred Maina 
  * Company: @jackaltech (http://jackatech.com)
*/

var score, activePlayer, currentScore;

init();

function init(){
  document.querySelector('#score-0').innerHTML = 0;
  document.querySelector('#score-1').innerHTML = 0;
  document.querySelector('#current-0').innerHTML = 0;  
  document.querySelector('#current-1').innerHTML = 0;
  hideDice();
  
}

function hideDice(){  
  document.querySelector('#dice-1').style.display = 'none';
  document.querySelector('#dice-2').style.display = 'none';
}
function showDice(){  
  document.querySelector('#dice-1').style.display = 'block';
  document.querySelector('#dice-2').style.display = 'block';
}
