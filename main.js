const form = document.querySelector('form');
const input = form.querySelector('input');

form.addEventListener("submit", e=>{
    e.preventDefault()
    if (!input.value) return;
    console.log(input.value)
    //코드
    input.value = ""
})