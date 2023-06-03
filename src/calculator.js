let calcText = document.querySelector("#calculator-container h4")
let equationButtons = document.querySelectorAll('.equation')


let equation = ''

equationButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        equation = equation + event.target.textContent
        console.log(equation)
    })
})