'use strict';
const getModals = document.querySelectorAll('.show-modal')
let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
const closeModal = function(){
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}
getModals.forEach(currentModal => {
  currentModal.addEventListener('click',function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
});
document.querySelector('.close-modal').addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)
document.addEventListener('keyup',function(pressedKey){
  if(pressedKey.key==="Escape"){
    if(!modal.classList.contains('hidden')) closeModal();
  }
})
