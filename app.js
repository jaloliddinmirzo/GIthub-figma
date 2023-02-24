const mode = document.querySelector('.mode')
const body = document.querySelector('body')

mode.addEventListener('click' , ()=>{
    mode.classList.toggle('mode1')
    body.classList.toggle('bcg')

})