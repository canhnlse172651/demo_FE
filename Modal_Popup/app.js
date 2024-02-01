

var btnOpen = document.querySelector('.open-modal-btn')
var btnExit = document.querySelector('.modal-header .close')
var btnClose = document.querySelector('.modal-footer button')
var modal = document.querySelector('.modal')



function display(){

    modal.classList.toggle('hiden')

}



btnOpen.addEventListener('click',display)
btnExit.addEventListener('click',display)
btnClose.addEventListener('click',display)


