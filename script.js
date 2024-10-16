'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let message = document.querySelector('.message');
let scores = 20;
let highScore = Number(document.querySelector('.highscore').textContent);
let bodyBg = document.querySelector('body');
function lockCheck(toLock){
  document.querySelector('.check').disabled=toLock;
}
const checkClick = function(){
 
  let suggestNumber = Number(document.querySelector('.guess').value)
  if(!suggestNumber || suggestNumber>20){
    message.textContent = 'Please type any suggestion between [1-20]'
  }else if(suggestNumber==secretNumber){
    if(scores>highScore){
      message.textContent = `Bravo! You have reached new highscore with ${scores} points`;
      highScore=scores;
      document.querySelector('.highscore').textContent=highScore;
    }else{
      message.textContent = `Bravo! You have suggest the right number`
    }
    lockCheck(true);
    bodyBg.style.backgroundColor='green'
    
  }else{
    scores-=2;
    document.querySelector('.score').textContent = scores;
    if(scores>0){
      message.textContent = `${suggestNumber} is ${suggestNumber>secretNumber ? 'higher':'lower'} than secret number`;
    }else{
      message.textContent = "Lost!";
      bodyBg.style.backgroundColor='red'
      lockCheck(true);
    }

  }
}

const againClick = function(){
  secretNumber = Math.trunc(Math.random()*20)+1;
  message.textContent = "Start guessing...";
  scores = 20
  bodyBg.style.backgroundColor='#222'
  document.querySelector('.score').textContent = scores;
  document.querySelector('.guess').value='';
  lockCheck(false)
}


document.querySelector('.check').addEventListener('click',checkClick);
document.querySelector('.again').addEventListener('click',againClick)

document.querySelector('.number').addEventListener('mouseenter',function(e){
  e.target.textContent = secretNumber
  })
document.querySelector('.number').addEventListener('mouseleave',function(e){
  e.target.textContent="?"
})