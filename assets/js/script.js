
var startOrdersBtn = document.getElementById("start-orders")

var coffeeOrders = []
var coffeeTypes = ["latte", "cappuccino", "mocha", "espresso", "americano"]
var creamerAmounts = ["black", "little", "normal", "a bit extra", "koolaid"]
var sizes = ["small", "regular", "large", "extra large"]
// 2 stages:
// build order card
// check the users answer to the real one
// main code

//refactor at some point
function startGame(){
    var id = "coffee" + coffeeOrders.length
    var coffeeType = coffeeTypes[Math.floor(Math.random() * 5)]
    var creamerAmount = creamerAmounts[Math.floor(Math.random() * 5)]
    var size = sizes[Math.floor(Math.random() * 4)]
    //document.body.style.backgroundColor = "lightgreen"
    var parent = document.getElementById("coffee-area")
    console.log(parent)
    var coffeeCard = document.createElement("form")
    coffeeCard.className = "coffee-card"
    coffeeCard.id = id
    //coffeeCard.style.backgroundColor = "green"
    console.log(coffeeCard)
    parent.appendChild(coffeeCard)
    //make sure to put it in the array!
    coffeeOrders.push(id)

    parent = document.getElementById(id)
    console.log(parent)

    var coffeeHeader = document.createElement("h4")
    coffeeHeader.innerHTML = "Order Card"
    console.log(coffeeHeader)
    parent.appendChild(coffeeHeader)

    var coffeeLabel1 = document.createElement("label")
    coffeeLabel1.class = "not-inline"
    coffeeLabel1.innerHTML = "Coffee Type: " + coffeeType
    console.log(coffeeLabel1)
    parent.appendChild(coffeeLabel1)
    
    var coffeeLabel2 = document.createElement("label")
    coffeeLabel2.class = "not-inline"
    coffeeLabel2.innerHTML = "Creamer Amount: " + creamerAmount
    console.log(coffeeLabel2)
    parent.appendChild(coffeeLabel2)
    
    var coffeeLabel3 = document.createElement("label")
    coffeeLabel3.class = "not-inline"
    coffeeLabel3.innerHTML = "Size: " + size
    console.log(coffeeLabel3)
    parent.appendChild(coffeeLabel3)

    var divId = "inputArea" + coffeeOrders.length
    var coffeeDiv = document.createElement("div")
    coffeeDiv.id = divId
    console.log(coffeeDiv)
    parent.appendChild(coffeeDiv)

    var coffeeButton = document.createElement("button")
    coffeeButton.type = "button"
    coffeeButton.textContent = "Submit Order"
    console.log(coffeeButton)
    parent.appendChild(coffeeButton)

    parent = document.getElementById(divId)
    var coffeeLabel4 = document.createElement("label")
    coffeeLabel4.innerHTML = "How Many Creamers?"
    console.log(coffeeLabel4)
    parent.appendChild(coffeeLabel4)

    var coffeeInput= document.createElement("input")
    coffeeInput.type = "text"
    console.log(coffeeInput)
    parent.appendChild(coffeeInput)

    var answer = calculateCreamers(coffeeType, creamerAmount, size)
    console.log(answer)
}

function calculateCreamers(type, amount, size) {
    
    if (amount === "black"){
        return 0
    } else {
        var typeNum = JSON.parse(localStorage.getItem(type))
        var amountNum = JSON.parse(localStorage.getItem(amount))
        var total = typeNum + amountNum
        console.log(total)
        if (size === "small"){
            total = Math.ceil(total / 2)
        } else if (size === "large"){
            total = total * 2
        } else if (size === "extra large"){
            total = total * 3
        }
        return total
    }
}

startOrdersBtn.addEventListener("click", function() {
    startGame()
})