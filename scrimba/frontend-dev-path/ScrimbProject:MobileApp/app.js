import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push , onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtest-1b3d0-default-rtdb.europe-west1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListRef = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingList = document.querySelector(".shopping-list")

const clear = () => {inputFieldEl.value = ""}

const clearShopListEl = () => { shoppingList.textContent = ""}


function appendItemToShoppingListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemValue

    newEl.addEventListener("click", ()=> {
        const path = ref(database, `shoppingList/${itemID}`)
        remove(path)
    })

    shoppingList.append(newEl)
}

onValue(shoppingListRef, function(snapshot) {
    if(snapshot.exists()) {

    let itemsArray = Object.entries(snapshot.val())

    clearShopListEl()

    for (let i = 0; i < itemsArray.length; i++) {
        let currentItem = itemsArray[i]
        let currentItemID = currentItem[0]
        let currentItemValue = currentItem[1]
        
        appendItemToShoppingListEl(currentItem)
    }
    }else{
        shoppingList.textContent = "No items here... yet"
    }

})

addButtonEl.addEventListener("click", ()=> {
    let inputValue = inputFieldEl.value
    push(shoppingListRef, inputValue)
    clear()
})
   
 

   
    
