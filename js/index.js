// let a = [1,2,3,4,5]


// let natija  = a.map((item)=>{
//    if (item % 2 == 0 ) {
//     return `${item}-juft`
//     } else {
//         return `${item}-toq`
//     }

// })

// console.log(natija);

// function forEach (arr , fun)
// for (let i = a.length ; i > -2; i--) {
//     console.log(i);
//     if (i == -1) {
//         a[i] = 6
//     }

// }

// let person = {
//     name: "Jaloliddin",
//     age :25,
//     adres: "Andijon",
//     Passport: true
// }

// let nat = Object.keys(person)
// let val = Object.values(person)

// nat.forEach((item)=>{

// })

// console.log(arr);

// import { btn , h1 , input } from "./ui.js";
// import { getinput } from "./logic.js";

// btn.addEventListener("click" , ()=>{
//     h1.textContent = getinput(input)
// })

// function getId() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(1)
//         }, 1000);
//     })
// }


// async function getData(){
//     const res  = await getId()
//     let a = 3 + res;
//     console.log(a);
// }

// getData()
// function getId() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(1)
//         }, 1000);
//     })
// }

const h3 = document.querySelector(".h3")
const p = document.querySelector(".p")
const btn = document.querySelector(".btn")

btn.addEventListener(("click"), getData)

async function getData() {
    const res = await fetch("https://api.adviceslip.com/advice")
    let Data = await res.json()

   h3.textContent = `ADVICE #`+ Data.slip.id
   p.textContent = Data.slip.advice

}

getData()