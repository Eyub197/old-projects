const openIcon = document.querySelector(".open")
const menu = document.querySelector(".menuE")
const closeIcon = document.querySelector(".close")

openIcon.addEventListener("click", ()=>{
    menu.classList.add("open")
})

closeIcon.addEventListener("click", ()=>{
    menu.classList.remove("open")
})