import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, remove, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://wearethechampions-9975f-default-rtdb.europe-west1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const EndorsementsListRef = ref(database, "Endorsements")

const inputFiled = document.querySelector("textarea")
const button = document.querySelector("button")
const EndorsementsList = document.querySelector("ul")

const clear = () => { inputFiled.value = "" }
const clearEndorsements = () => { EndorsementsList.innerHTML = "" }

const appendItemToList = (itemValue, itemId) => {
    let newItem = document.createElement("p")
    newItem.classList.add("newP")
    newItem.textContent = itemValue

    newItem.addEventListener("dblclick", () =>{
        let exactLocation = ref(database, `Endorsements/${itemId}`);
        remove(exactLocation)
    })

    EndorsementsList.insertBefore(newItem, EndorsementsList.firstChild)
}

onValue(EndorsementsListRef, (snapshot) => {
    clearEndorsements()
    if (snapshot.exists()) {
        const data = snapshot.val()
        Object.entries(data).forEach(([itemId, itemValue]) => {
            appendItemToList(itemValue, itemId)
        })
    } else {
        EndorsementsList.textContent = "There are no endorsements"
    }
})

button.addEventListener("click", () => {
    let inputValue = inputFiled.value
    if (inputValue.trim() !== "") {
        push(EndorsementsListRef, inputValue)
    }
    clear()
})
