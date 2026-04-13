const number = document.querySelector("input")
const length = document.querySelector(".metric-feet-numbers")
const volume = document.querySelector(".liters-gallons-numbers")
const mass = document.querySelector(".kilos-pounds-numbers")
const btn = document.querySelector("button")
const moon = document.querySelector(".fa-moon")
const sun = document.querySelector(".fa-sun")
const units = document.querySelectorAll(".unit")
const converterTitles = document.querySelectorAll(".converter-title")
const converterValues = document.querySelectorAll(".converter-numbers")
const converter = document.querySelector("main")

let calculateLength = () => {
    const quantity = number.value
    let feet = quantity * 3.28084
    let meter = quantity * 0.304
    length.textContent = `${quantity} meters = ${feet.toFixed(3)} feet | ${quantity} feet = ${meter.toFixed(3)} meter`
}

let calculateVolume = () => {
    const quantity = number.value
    let liters =  3.785412 * quantity
    let gallons = 0.264172 * quantity
    volume.textContent = `${quantity} liters = ${gallons.toFixed(3)} gallons | ${quantity} gallons = ${liters.toFixed(3)} liters`
}

let calculateMass = () => {
    const quantity = number.value
    let kilos = quantity * 0.45359237
    let pounds = quantity * 2.2
    mass.textContent = `${quantity} Kilos = ${pounds.toFixed(3)} pounds | ${quantity} pounds = ${kilos.toFixed(3)} kilos`
}

btn.addEventListener('click', () => {
    calculateLength()
    calculateVolume()
    calculateMass()
})

/* Without a button mode
number.addEventListener('input', () => {
    calculateLength()
    calculateVolume()
    calculateMass()
})

*/

calculateLength()
calculateVolume()
calculateMass()

/*DARK MODE*/


const darkMode = () =>{
    const isDarkMode = converter.classList.contains("dark-mode")

    if(isDarkMode) {
        converter.classList.remove("dark-mode")
        moon.style.display = "unset"
        sun.style.display = "none"
        sun.classList.add("animation")
        moon.classList.add("animation")
        converter.style.backgroundColor = "#F4F4F4"
        units.forEach(unit => unit.style.backgroundColor = "#FFFFFF")
        converterTitles.forEach(title => title.style.color = "#5A537B")
        converterValues.forEach(value => value.style.color = "#353535")
    } else {
        converter.classList.add("dark-mode")
        moon.style.display = "none"
        sun.style.display = "unset"
        moon.classList.add("animation")
        converter.style.backgroundColor = "#1F2937"
        units.forEach(unit => unit.style.backgroundColor = "#273549")
        converterTitles.forEach(title => title.style.color = "white")
        converterValues.forEach(value => value.style.color = "#D2D2D2")
    }
}

sun.addEventListener("click", ()=> darkMode())
moon.addEventListener("click", ()=> darkMode())
