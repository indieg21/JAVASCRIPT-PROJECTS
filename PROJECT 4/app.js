const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button") // give array of buttons for the above
let userChoice    //these are empty variable to store the choice for any of the 3
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  // forEach is looped through the array of buttons. AddEv... Click to find the userChoice id. Once
  //found. It will display the userChoice
  

}))

function  generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  //console.log(randomNumber)
  
  if (randomNumber === 1) { // check the random number.
    computerChoice = "rock"
  }

  if (randomNumber === 2) {
    computerChoice = "scissors"
  }

  if (randomNumber === 3) {
    computerChoice = "paper"
  }
  computerChoiceDisplay.innerHTML = computerChoice

}

function getResult() { // compare all choices 
  if (computerChoice === userChoice) {
    result = "its a tie!"
  }
  if (computerChoice === "rock" && userChoice  === "paper") {
    result = "you win!"
}
if (computerChoice === "rock" && userChoice  === "scissors") {
  result = "you lost!"
}

if (computerChoice === "paper" && userChoice  === "scissors") {
  result = "you win!"
}

if (computerChoice === "paper" && userChoice  === "rock") {
  result = "you lost!"
}

if (computerChoice === "scissors" && userChoice  === "rock") {
  result = "you win!"
}
if (computerChoice === "scissors" && userChoice  === "paper") {
  result = "you lost!"
}
resultDisplay.innerHTML = result

}

