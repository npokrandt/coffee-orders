
var startOrdersBtn = document.getElementById("start-orders")

var coffeeOrders = []
// 2 stages:
// build order card
// check the users answer to the real one
// main code
function startGame(){
    var id = "coffee" + coffeeOrders.length
    document.body.style.backgroundColor = "lightgreen"
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
    coffeeLabel1.innerHTML = "Coffee Type: <span>Test</span>"
    console.log(coffeeLabel1)
    parent.appendChild(coffeeLabel1)
    
    var coffeeLabel2 = document.createElement("label")
    coffeeLabel2.class = "not-inline"
    coffeeLabel2.innerHTML = "Creamer Amount: <span>Test</span>"
    console.log(coffeeLabel2)
    parent.appendChild(coffeeLabel2)
    
    var coffeeLabel3 = document.createElement("label")
    coffeeLabel3.class = "not-inline"
    coffeeLabel3.innerHTML = "Coffee Type: <span>Test</span>"
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


}

startOrdersBtn.addEventListener("click", function() {
    startGame()
})