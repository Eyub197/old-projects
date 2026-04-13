let firstNumber = null
let operation = null
let displayValue = 0
let resultDisplay = false

const operationDiv = document.querySelector(".operation")
const resultDiv = document.querySelector(".result")
const numberButtons = document.querySelectorAll(".numbers")
const operationButtons = document.querySelectorAll(".operation")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")
const backsSpaceButton = document.querySelector(".backspace")
const decimalButton = document.querySelector(".decimal")
const calculator = document.querySelector(".calculator")


let add = (number1, number2) => {return number1 + number2 }

let subtract = (number1, number2) => {return number1 - number2}

let multiply = (number1, number2) => {return number1 * number2}

let divide =  (number1, number2) => {return number1 / number2}

function operate ()  {
    const fNum = parseFloat(firstNumber)
    const secondNumber =  parseFloat(displayValue)
    
    switch(operation){
        case "+" :
            displayValue = add(fNum, secondNumber)
            break
        case "-" :
            displayValue =  subtract(fNum, secondNumber)
            break
        case "*" :
            displayValue =  multiply(fNum, secondNumber)
            break
        case "/" :
            secondNumber === 0 ? displayValue = "you thought you are smart don't you little, its okay have a nice day :) "
            : displayValue =  divide(fNum, secondNumber)
            break
        default : 
            console.log("added an valid operation")
   }

   if(isNaN(displayValue)){displayValue = "gotcha 2"}

   resultDiv.textContent = isNaN(displayValue) ? displayValue : parseFloat(displayValue.toFixed(2))
}  


let showNumbers = (number) => {
    if (displayValue === null || resultDisplay) {
        displayValue = number
        resultDisplay = false
    } else {
        if (number === '.' && displayValue.includes('.')) {
            return; 
          }
        displayValue += number
    }
    displayValue = displayValue.replace(/^0+/, '');
    operationDiv.textContent = displayValue
};

let showOperation = (selectedOperation) => {
    if(firstNumber === null) {firstNumber = parseInt(displayValue)}

    operation = selectedOperation
    displayValue = ''
    operationDiv.textContent += displayValue + operation;
    resultDisplay = false
};

numberButtons.forEach(nButton => nButton.addEventListener('click', () => {

   showNumbers(nButton.textContent)
}))

operationButtons.forEach( oButton => oButton.addEventListener('click', () => showOperation(oButton.textContent)))

equalsButton.addEventListener('click', () => {
    firstNumber === null ? resultDiv.textContent = "gotcha" : operate();
    firstNumber = null
    operation = null
}  )

clearButton.addEventListener('click', ()=> {
    console.log("im clicked")
    displayValue = ""
    operation = ""
    operationDiv.textContent = ""
    resultDiv.textContent = "" })

backsSpaceButton.addEventListener('click', ()=> {
    if(!resultDisplay){
        displayValue = displayValue.slice(0, -1)
        console.log("im clicked")
        operationDiv.textContent = displayValue || "0"
    } 
})

decimalButton.addEventListener('click', ()=> { 
    displayValue += '.'
    operationDiv.textContent = displayValue
    if (!displayValue.includes('.')) {
        displayValue += '.'
        operationDiv.textContent = displayValue
     }  
    })


document.addEventListener("keydown", (event) => {
    const key = event.key;
  
    const isNumericKey = (/^[0-9.]$/).test(key);
  
    if (isNumericKey) {
      event.preventDefault();
    }
  
    
    if (isNumericKey) {
      showNumbers(key)
    }
  
   
    if ((/[\+\-\*\/]/).test(key)) {
      event.preventDefault()
      showOperation(key)
    }
  
  
    if (key === "Enter") {
      event.preventDefault()
      equalsButton.click()
    }
  
  
    if (key === "Backspace") {
      event.preventDefault()
      backsSpaceButton.click()
    }
  })