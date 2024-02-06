let playerScore = 0
let computerScore = 0
let draws = 0
let gameOptions = ["rock", "paper", "scissors"]

// rock button listener
const rockBtn = document.querySelector('#rock')
rockBtn.addEventListener('click', () => {
playerChoice= "rock"
game()
})

// paper button listener
const paperBtn = document.querySelector('#paper')
paperBtn.addEventListener('click', () => {
playerChoice= "paper"
game()
})

// scissors button listener
const scissorsBtn = document.querySelector('#scissors')
scissorsBtn.addEventListener('click', () => {
playerChoice= "scissors"
game()
})

// Get computers choice
function getComputerChoice(){
return (gameOptions[(Math.floor(Math.random() * gameOptions.length))]);
}

//function to determine winner and keep score
function playRound(computerChoice, playerChoice){
if (playerChoice === computerChoice){
    draws++
    drawsBoard()
    const roundWinner = document.querySelector("#roundWinner")
    roundWinner.textContent= "This is a draw"
}
else if (playerChoice === "rock") {
    if(computerChoice=== "paper"){
    computerScore++
    computerScoreBoard()
    const roundWinner = document.querySelector("#roundWinner")
    roundWinner.textContent="You Lose Paper beats Rock"
}else{
    playerScore++
    playerScoreBoard()
    const roundWinner = document.querySelector("#roundWinner")
    roundWinner.textContent= "You Win Rock beats Scissors"  
    }
}
else if (playerChoice === "paper"){
    if (computerChoice === "scissors"){
    computerScore++
    computerScoreBoard()
    const roundWinner = document.querySelector("#roundWinner")
    roundWinner.textContent= "You lose Scissors beats Paper"
}else{
    playerScore++
    playerScoreBoard()
    const roundWinner = document.querySelector("#roundWinner")
    roundWinner.textContent= "You win Paper beats Rock"
    }
}
else if(playerChoice === "scissors"){
    if(computerChoice === "rock"){
        computerScore++
        computerScoreBoard()
        const roundWinner = document.querySelector("#roundWinner")
        roundWinner.textContent= "You lose Rock beats Scissors"
}else{
        playerScore++
        playerScoreBoard()
        const roundWinner = document.querySelector("#roundWinner")
        roundWinner.textContent= "You win Scissors beats Paper"
    }
}
}

//function to play multiple rounds
function game(){
while (playerScore < 5 && computerScore < 5 ){
let computerChoice = getComputerChoice();{
console.log(playRound(computerChoice, playerChoice));
console.log(computerChoice)
console.log("Draws " + draws)
console.log("Player Score " + playerScore)
console.log("Computer Score " +computerScore)
if (playerScore === 5){
    const winner = document.querySelector('#winner')
    winner.textContent = "You are the Winner"
    winner.setAttribute('style', 'color: pink; background: yellow; font-size: 50px; text-align: center')
    } else if (computerScore === 5)
        winner.textContent = "GG Loser"
break
}
}
}

// Dom Manipulation to display computer score
function computerScoreBoard(){
    const computerScoreBoard = document.querySelector('#computerScoreBoard')
    computerScoreBoard.textContent = 'Computer Score: ' + computerScore
}
// Dom Manipulation to display player score
function playerScoreBoard(){
    const playerScoreBoard = document.querySelector('#playerScoreBoard')
    playerScoreBoard.textContent ='Player Score: ' + playerScore
}
// Dom Manipulation to display draws score
function drawsBoard(){
    const drawsBoard = document.querySelector('#drawsBoard')
    drawsBoard.textContent = 'Draws: ' + draws
}






