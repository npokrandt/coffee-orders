
var startOrdersBtn = document.getElementById("start-orders")

// 2 stages:
// build order card
// check the users answer to the real one
// main code
function startGame(){
    document.body.style.backgroundColor = "lightgreen"
    var parent = document.getElementById("coffee-area")
    console.log(parent)
    var coffeeCard = document.createElement("form")
    coffeeCard.className = "coffee-card"
    //coffeeCard.style.backgroundColor = "green"
    console.log(coffeeCard)
    parent.appendChild(coffeeCard)

    parent = document.querySelector("form")
    console.log(parent)
    var coffeeHeader = document.createElement("h4")
    coffeeHeader.innerHTML = "Order Card"
    console.log(coffeeHeader)
    parent.appendChild(coffeeHeader)
}

startOrdersBtn.addEventListener("click", function() {
    startGame()
})