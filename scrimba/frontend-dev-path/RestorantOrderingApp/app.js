import foodArray from "/data.js"

const main = document.querySelector("main")
const orderSection = document.querySelector(".wrapper")
const yourOrder = document.querySelector(".your-order")
const form = document.querySelector(".data")
let orders = []

const render = () => {
    
   return foodArray.map(food => {

    const {emoji, name, ingredients, price, id} = food

    return`
        <section class="food grid">
            <p class="emoji">${emoji}</p>
            <h3 class="food-name">${name}</h3>
            <p class="food-ingredients">${ingredients.join(" ")}</p>
            <p class="price">$${price}</p>
            <i class="fa-solid fa-plus icon" data-add="${id}"></i>
        </section>
        `
    })
    
}

main.innerHTML = render().join("")

const handleIconClick = () => {
    
    foodArray.forEach(food => {
        const icon = document.querySelector(`.icon[data-add="${food.id}"]`);
        icon.addEventListener("click", () => {
            orders.push({
                name: food.name,
                price: food.price
            })
            yourOrder.classList.remove("hidden")
           renderOrders()
        })
    })
}

const renderOrders = () => {

    orderSection.innerHTML = ``

    orders.forEach((order, index) => {
        orderSection.innerHTML += `
        <section class="order grid">  
            <h4 class="order-name">${order.name}</h4>
            <a class="remove" data-index="${index}">remove</a>
            <p class="order-price">$${order.price}</p>
        </section>
        `
    })

    orderSection.innerHTML += `
        <section class="buy-order flex">
        <div class="buy-order-details flex">
            <h4 class="total-price">Total price</h4>
            <p class="end-price">$${calculateTotal()}</p>
        </div>
        <div class="buy-btn-container"><button class="buy radius btn">Complete order</button></div>
        </section>
    `  
}

const calculateTotal = () => { 
    return orders.reduce( (total, food) => total + food.price , 0) }
    
const handleRemoveClick = () => {
    orderSection.addEventListener("click", (event)=>{
        if(event.target.classList.contains("remove")){
            const indexToDelete = event.target.getAttribute("data-index")
            orders.splice(indexToDelete, 1)
            renderOrders()
        }
    })
}

const handleBuyButton = () => {
    orderSection.addEventListener("click", (event)=>{
        if(event.target.classList.contains("buy")){
            document.querySelector(".modal").style.display = "flex"
        }
    })
}

const buyOrder = () => {
    form.addEventListener("click", event => {
       if (event.target.classList.contains("pay")) {
            event.preventDefault()
            let from = new FormData(form)
            let name = from.get("name")
            document.querySelector(".modal").style.display = "none"
            orderSection.classList.add("hidden")
            yourOrder.classList.add("hidden")
            let container = document.createElement("section")
            container.style.backgroundColor = "#ECFDF5"
            container.style.padding = "1.5em"
            container.style.marginTop = "1em"
            container.classList.add("radius")
            let h3 = document.createElement("h3")
            h3.textContent = `Thanks, ${name}! Your orders is in your way`
            h3.style.textAlign = "center"
            h3.style.color = "#065F46"
            main.appendChild(container)
            container.appendChild(h3)
        }
    })
}


handleIconClick()
handleRemoveClick()
handleBuyButton()
buyOrder()
