let calcText = document.querySelector("#calculator-container h4")
let numberButtons = document.querySelectorAll('.number')
let actionButtons = document.querySelectorAll('.action')

numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log('i am a number')
    })
})

actionButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log('i am an action')
    })
})