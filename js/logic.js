import { body, form, mode, input, lightBtn, bioText, public_repos, followers, following, name, location, created_at, blog, company, twitter_username, login } from "./ui.js";



// Theme
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



// Click Func

export function click(el) {
    if (el == mode) {
        el.addEventListener('click', () => {
            Dark()
            localStorage.setItem("mode", "dark")
        })
    } else if (el == lightBtn) {
        el.addEventListener('click', () => {
            Dark()
            localStorage.setItem("mode", "")
        })
    } else if (el == form) {
        el.addEventListener("submit", (e) => {
            e.preventDefault()
            let user = input.value.trim()

            async function getData() {
                const res = await fetch(`https://api.github.com/users/${user}`)
                let Data = await res.json()

                avatar.src = Data.avatar_url ? Data.avatar_url : "./imgs/png/GIt-logo.png"
                bioText.textContent = Data.bio ? Data.bio : "Not Available"
                followers.textContent = Data.followers ? Data.followers : 0
                following.textContent = Data.following ? Data.following : 0
                name.textContent = Data.name ? Data.name : "User not available"
                blog.textContent = Data.blog ? Data.blog : "Blog not available"
                login.textContent =  Data.login ? "@" + Data.login : "Login not available"
                login.setAttribute("href", `${Data.html_url}`)
                company.textContent = Data.company ? Data.company : "Not Available"
                twitter_username.textContent = Data.twitter_username ? Data.twitter_username : "Not Available"
                blog.setAttribute("href", Data.blog)
                location.textContent = Data.location ? Data.location : "Not Available"
                created_at.textContent = creat(Data.created_at) 
                public_repos.textContent = Data.public_repos ? Data.public_repos : 0

            }
            if (user) {
                getData()
            }
        })
    }
}

function time(mon) {
    let month = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    let dax = new Date();
    let Moth = month[mon]
    return Moth;

}

// Creat github
const creat = (el) => {
    let a = el.split("T");
    let b = a[0].split("-")
    return  `Joined ${b[2]} ${time(b[1].substr(1))} ${b[0]}` 
}
// Creat github end

// let c = "2020-04-25Tdvdsd"

// console.log(creat(c));

