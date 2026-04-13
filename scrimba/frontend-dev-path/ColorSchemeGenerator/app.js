const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");

    dropdown.addEventListener("click", () => {
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate");
        menu.classList.toggle("menu-open");
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            selected.innerHTML = option.textContent;
            select.classList.remove("select-clicked");
            caret.classList.remove("caret-rotate");
            menu.classList.remove("menu-open");

            options.forEach(opt => {
                opt.classList.remove("active");
            });

            option.classList.add("active");
        });
    });
});

let colorsArray = []

const getColorHex = () => {
    const colorPickerValue = document.querySelector("input").value
    const hexCode = colorPickerValue.substring(1)
    return hexCode
}

document.querySelector("input").addEventListener("input", getColorHex )

const getColorScheme = async (hex,mode) => {
    const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`);
    const scheme = await response.json()
    colorsArray = scheme
}

const changeColors = () => {
    const colorsDiv = document.querySelectorAll(".color")
    colorsDiv.forEach((div, index)=> {
        const color = colorsArray.colors[index].hex.value
        div.style.backgroundColor = color
    })
}

const changeHex = () => {
    const colorsP = document.querySelectorAll(".fex")
    colorsP.forEach((p, index)=> {
        const color = colorsArray.colors[index].hex.value
        p.textContent = color
    })
}

document.querySelector("button").addEventListener("click", ()=>{
    const hexCode = getColorHex()
    const selectedTheme = document.querySelector(".selected").textContent.toLowerCase()
    getColorScheme(hexCode, selectedTheme)
    changeColors()
    changeHex()
})

const manageCopyAnimation = () => {
    const copy =  document.querySelector(".copy")
    copy.classList.add("copy-active")
    copy.classList.add("copy-animation")
    navigator.clipboard.writeText(color.style.backgroundColor)
    setTimeout(()=>{
        copy.classList.remove("copy-active")
        copy.classList.remove("copy-animation")
    }, 5000) 
}

const copy = () => {
    const colors = document.querySelectorAll(".color")
    colors.forEach(color => color.addEventListener("click", ()=>{ 
    manageCopyAnimation()
    }))
}

copy()