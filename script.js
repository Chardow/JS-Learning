'use strict';
function diceImage(value){
  document.querySelector('.dice').src=`dice-${value}.png`;
}
function rollDice(){
  return Math.trunc(Math.random()*6)+1;
}
function selectedPlayer(){
  if(document.querySelector('.player--0').classList.contains('player--active')){
    return 0;
  }else{
    return 1;
  }
}
function currentScore(addToTotall, player){
  if(addToTotall){
    let totalScore = Number(document.getElementById(player===0 ? 'current--0' : 'current--1').textContent) + Number(document.getElementById(player===0 ? 'score--0' : 'score--1').textContent)
    document.getElementById(player===0 ? 'score--0' : 'score--1').textContent = totalScore;
  }
  document.getElementById(player===0 ? 'current--0' : 'current--1').textContent=0;
}
function buttonsBehavior(activate){
  if(activate){
    document.querySelector('.btn--roll').disabled = false;
    document.querySelector('.btn--hold').disabled = false;
  }else{
    document.querySelector('.btn--roll').disabled = true;
    document.querySelector('.btn--hold').disabled = true;
  }
}
function changePlayer(){
  if(document.querySelector('.player--0').classList.contains('player--active')){
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  }else{
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
  }
}
function exposeWinner(player){
  if(player===0){
    document.querySelector('.player--0').classList.add('player--winner');
          
          buttonsBehavior(false);
  }else{
    document.querySelector('.player--1').classList.add('player--winner');
          
          buttonsBehavior(false);
  }
}
document.querySelector('.btn--roll').addEventListener('click',function(){
  let diceValue = rollDice();
  diceImage(diceValue);
  
  if(diceValue===1){
    currentScore(false,selectedPlayer());
    changePlayer();
  }else{
    switch(selectedPlayer()){
      case 0:
        document.getElementById('current--0').textContent = Number(document.getElementById('current--0').textContent) + diceValue;
        if(Number(document.getElementById('current--0').textContent)>=100){
         exposeWinner(0);
        }
        break;
      case 1:
        document.getElementById('current--1').textContent = Number(document.getElementById('current--1').textContent) + diceValue;
        if(Number(document.getElementById('current--1').textContent)>=100){
          exposeWinner(1);
        }
        break;
    }
  }
})
document.querySelector('.btn--hold').addEventListener('click',function(){
  if(document.querySelector('.player--0').classList.contains('player--active')){
    currentScore(true,0);
    if(Number(document.querySelector('#score--0').textContent)>=100){
      exposeWinner(0);
    }else{
      changePlayer();
    }
  }else{
    currentScore(true,1)
    if(Number(document.querySelector('#score--1').textContent)>=100){
      exposeWinner(1);
    }else{
      changePlayer();
    }
  }
})
document.querySelector('.btn--new').addEventListener('click',function(){
  console.log('new game')
  buttonsBehavior(true);
 document.querySelectorAll('.score').forEach(element => {
  element.textContent=0;
 });
 document.querySelectorAll('.current-score').forEach(element => {
  element.textContent=0;
 });
 document.querySelectorAll('.player').forEach(element =>{
  element.classList.remove('player--winner','player--active')
  
 })
 document.querySelector('.player--0').classList.add('player--active')
})