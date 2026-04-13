const btnGenerate = document.querySelector("button");
const input1 = document.querySelector(".first-password");
const input2 = document.querySelector(".second-password");
const passwordLength = document.querySelector(".length")
const noSymbols = document.querySelector("#sOff")
const noNumbers = document.querySelector("#nOff")
const icon = document.querySelector(".far")
const main = document.querySelector("main")
const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const labels = document.querySelectorAll("label")
let password1 = "";
let password2 = "";

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0",
"1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
"{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


const getRandomChar = () => { 
    let filteredCharacters = characters

    if(noSymbols.checked){
        const symbolsToRemove = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
        filteredCharacters = filteredCharacters.filter(char => !symbolsToRemove.includes(char))
    }   

    if(noNumbers.checked){
        filteredCharacters = filteredCharacters.filter(char => isNaN(char))
    }

    return filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)]
}

const resetPasswords = () => { input1.value = "", input2.value = "", password1 = "", password2 = "" }

passwordLength.addEventListener("click", ()=> passwordLength.value = "")

input1.addEventListener("click", ()=>{
    input1.select()
    document.execCommand("copy")
    input1.blur()
})

input2.addEventListener("click", ()=>{
    input2.select()
    document.execCommand("copy")
    input2.blur()
})


const getPasswords = (length) => {
    if(passwordLength.value){
        length = passwordLength.value
        
        for (let count = 0; count < length; count++) {
            password1 += getRandomChar();
            password2 += getRandomChar();
        }
    }else{
        for (let count = 0; count < 12; count++) {
            password1 += getRandomChar();
            password2 += getRandomChar();
        }
    }  
}

btnGenerate.addEventListener("click", ()=> {
    resetPasswords()
    getPasswords()

    input1.value = password1;
    input2.value = password2;
})

let isClicked = false

icon.addEventListener("click", ()=> {
    if(!isClicked){
        main.style.backgroundColor = "white"
        h1.style.color = "#2B283A"
        p.style.color = "#6B7280"
        labels.forEach(label => label.style.color = "#6B7280")
        isClicked = true
    }else{
        main.style.backgroundColor = "#1F2937"
        h1.style.color = "white"
        p.style.color = "#D5D4D8"
        labels.forEach(label => label.style.color = "#D5D4D8")
        isClicked = false
    }
})