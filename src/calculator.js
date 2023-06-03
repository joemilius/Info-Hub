let calcText = document.querySelector("#calculator-container h4")
let equationButtons = document.querySelectorAll('.equation')
let equalsButton = document.querySelector('.equals')
let clearButton = document.querySelector('.clear')

let equation = ''

equationButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        let actionDict = {
            '+': ' + ',
            '-': ' - ',
            '/': ' / ',
            'x': ' x '
        }
        if (actionDict[event.target.textContent]){
            equation = equation + actionDict[event.target.textContent]
        } else {
            equation = equation + event.target.textContent
        }
        console.log(equation)
    })
})

equalsButton.addEventListener('click', (event) => {
    let actionArray = ['+', '-', '/', 'x']
    let equationArray = equation.split(' ')
    let multiplyDivideArray = [...equationArray]
    let total = 0
    console.log(equationArray)

    if(actionArray.some((element) => equationArray.includes(element)) && !actionArray.includes(equationArray[0]) && equationArray[0] !== ''){
        for(let i = 0; i < equationArray.length; i++){
            if('x' === equationArray[i]){
                    equationArray.splice((i - 1), 3, `${parseFloat(equationArray[i - 1]) * parseFloat(equationArray[i + 1])}`)
                    i = i - 1
                    console.log(equationArray)
            } else if('/' === equationArray[i]){
                    equationArray.splice((i - 1), 3, `${parseFloat(equationArray[i - 1]) / parseFloat(equationArray[i + 1])}`)
                    i = i - 1
                    console.log(equationArray)
               
            }
        }

        if (equationArray.length === 1){
            return parseFloat(equationArray[0])
        }

        if(equationArray.length > 2 && !actionArray.includes(equationArray[equationArray.length - 1]) && equationArray[equationArray.length - 1] !== ''){
            total += parseFloat(equationArray[0])
            for(let i = 1; i < equationArray.length; i++){
                if(equationArray[i] === '+'){
                    total += parseFloat(equationArray[i + 1])
                    console.log(total)
                } else if (equationArray[i] === '-'){
                    total -= parseFloat(equationArray[i + 1])
                }
            }
        }
        
    }

})

clearButton.addEventListener('click', (event) => {
    equation = ''
    console.log(equation)
})