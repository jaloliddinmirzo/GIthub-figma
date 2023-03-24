// mode
const mode = document.querySelector('.mode')
const lightBtn = document.querySelector('.light-btn')
const body = document.querySelector('body')

// IP MANZIL
const form = document.querySelector("#form")
const input = document.querySelector(".input")
const avatar = document.querySelector("#avatar")

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
    localStorage.setItem("mode", "dark")
})


lightBtn.addEventListener('click', () => {
    Dark()
    localStorage.setItem("mode", "")
})


form.addEventListener("submit", (e) => {
    e.preventDefault()
    let user = input.value

    async function getData() {
        const res = await fetch(`https://api.github.com/users/${user}`)
        let Data = await res.json()

        console.log(Data.avatar_url);

        avatar.src = Data.avatar_url

    }
    getData()

})

