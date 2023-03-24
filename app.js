const mode = document.querySelector('.mode')
const lightBtn = document.querySelector('.light-btn')
const body = document.querySelector('body')

const local = localStorage.getItem("mode")

if (local) {
    body.classList.add('bcg')
    mode.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
}

const Dark = () => {
    mode.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('bcg')
}

mode.addEventListener('click', () => {
    Dark()
    localStorage.setItem("mode","dark")
})


lightBtn.addEventListener('click', () => {
    Dark()
    localStorage.setItem("mode","")
})