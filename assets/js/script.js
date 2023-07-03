
// What remains:
// the rest of the main game
    //want to do 10 coffee cards dropping at a set pace
    //3 different paces, plus possible randomness
    //maybe set different amounts
    //be able to play again after a run
    //don't care much about saving stats
// some css touch-up and responsiveness
    //design end game page
    //maybe add correctness label
    //style button some
    //see what else, if any, to add to
// random extra stuff
    //??
// deployment!
    //gotta wait until I have an IC

var startOrdersBtn = document.getElementById("start-orders")
var playAgainBtn = document.getElementById("play-again")
var coffeeArea = document.getElementById("coffee-area")
var gameEndPage = document.getElementById("game-end-page")

var coffeeTypes = ["latte", "cappuccino", "mocha", "espresso", "americano"]
var creamerAmounts = ["black", "little", "normal", "a bit extra", "koolaid"]
var sizes = ["small", "regular", "large", "extra large"]
var coffeeNum = 3
var counter = 1
var clickCounter = 0

var coffeeInterval

function startGame(){
    coffeeInterval = setInterval(createCard, 1000)
    startOrdersBtn.style.display = "none"
}

//refactor at some point
function writeLabel(text, value, parent){
    var coffeeLabel = document.createElement("label")
    coffeeLabel.class = "not-inline"
    coffeeLabel.innerHTML =  text + ": " + value
    //console.log(coffeeLabel)
    parent.appendChild(coffeeLabel)
}

function createCard(){
    var id = "coffee" + counter

    var coffeeType = coffeeTypes[Math.floor(Math.random() * 5)]
    var creamerAmount = creamerAmounts[Math.floor(Math.random() * 5)]
    var size = sizes[Math.floor(Math.random() * 4)]

    //adding the card to the area
    var parent = document.getElementById("coffee-area")
    //console.log(parent)
    var coffeeCard = document.createElement("form")
    coffeeCard.className = "coffee-card"
    coffeeCard.id = id
    //coffeeCard.style.backgroundColor = "green"
    //console.log(coffeeCard)
    parent.appendChild(coffeeCard)

    parent = document.getElementById(id)
    //console.log(parent)

    var coffeeHeader = document.createElement("h4")
    coffeeHeader.innerHTML = "Order Card #" + counter
    //console.log(coffeeHeader)
    parent.appendChild(coffeeHeader)

    writeLabel("Coffee Type", coffeeType, parent)
    writeLabel("Creamer Amount", creamerAmount, parent)
    writeLabel("Size", size, parent)

    var divId = "inputArea" + counter
    var coffeeDiv = document.createElement("div")
    coffeeDiv.id = divId
    //console.log(coffeeDiv)
    parent.appendChild(coffeeDiv)

    var coffeeButton = document.createElement("button")
    coffeeButton.type = "button"
    coffeeButton.textContent = "Submit Order"
    coffeeButton.setAttribute("data-order-number", counter)
    //console.log(coffeeButton)
    parent.appendChild(coffeeButton)

    parent = document.getElementById(divId)
    var coffeeLabel2 = document.createElement("label")
    coffeeLabel2.innerHTML = "How Many Creamers?"
    //console.log(coffeeLabel2)
    parent.appendChild(coffeeLabel2)

    var coffeeInput= document.createElement("input")
    coffeeInput.type = "text"
    coffeeInput.id = counter
    //console.log(coffeeInput)
    parent.appendChild(coffeeInput)

    var answer = calculateCreamers(coffeeType, creamerAmount, size)
    coffeeButton.setAttribute("data-answer", answer)
    //console.log(coffeeButton.dataset)

    counter++

    if (counter > coffeeNum){
        clearInterval(coffeeInterval)
    }
}

function calculateCreamers(type, amount, size) {
    
    if (amount === "black"){
        return 0
    } else {
        var typeNum = JSON.parse(localStorage.getItem(type))
        var amountNum = JSON.parse(localStorage.getItem(amount))
        var total = typeNum + amountNum
        //console.log(total)
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

function checkOrder(event){

    if (event.target.matches("button")){
        var answer = event.target.getAttribute("data-answer")
        var orderNumber = event.target.getAttribute("data-order-number")
        var answerAttempt = document.getElementById(orderNumber).value
        var card = document.getElementById("coffee" + orderNumber)
        if (answerAttempt === answer){
            //console.log("correct answer!")
            coffeeArea.removeChild(card)
            clickCounter++
        } else {
            //console.log("wrong answer. Try again!")
            //continue
        }
        if (clickCounter == coffeeNum){
            endGame()
        }
        
    }  
    //get the input of the user
    //compare it to the right answer
    //if correct, remove that coffee card
    //else throw up complaint
}

function endGame(){
    console.log("Game over!")
    gameEndPage.style.display = "block"
}

function startGameOver(){
    gameEndPage.style.display = "none"
    counter = 1
    clickCounter = 0
    coffeeInterval = setInterval(createCard, 1000)
}

startOrdersBtn.addEventListener("click", startGame)
playAgainBtn.addEventListener("click", startGameOver)

//will add way to single in on the buttons
coffeeArea.addEventListener("click", checkOrder)



