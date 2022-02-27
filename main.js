const form = document.querySelector('form');
const input = document.querySelector(".input input")
const divs = document.querySelectorAll('.word div');

const letter = "ABCDE"
/**
 * 바꺼라ㅉㅈ
 */

form.addEventListener("submit", e=>{
    e.preventDefault()
    console.log(input.value)
    let div_arr = Array.from(divs)
    let div = div_arr.find(e=>!e.innerText)
    div.style.color = "#303030"
    if(letter[div_arr.indexOf(div)] === input.value.toUpperCase()) div.style.color = "#50ff50"
    div.innerText = input.value.toUpperCase()
    input.value = ""
})