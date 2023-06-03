let calcText = document.querySelector("#calculator-container h4")
let equationButtons = document.querySelectorAll('.equation')
let equalsButton = document.querySelector('.equals')
let clearButton = document.querySelector('.clear')

let equation = ''

equationButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        equation = equation + event.target.textContent
        console.log(equation)
    })
})

equalsButton.addEventListener('click', (event) => {
    console.log(event.target)
})

clearButton.addEventListener('click', (event) => {
    console.log(event.target)
})