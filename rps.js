const rockBtn = document.querySelector('#rock')
rockBtn.addEventListener('click', () => {
playerChoice= "rock"
game()
})


let playerScore = 0
let computerScore = 0
let draws = 0
let gameOptions = ["rock", "paper", "scissors"]
// Get computers choice
function getComputerChoice(){
return (gameOptions[(Math.floor(Math.random() * gameOptions.length))]);
}

//function to determine winner and keep score
function playRound(computerChoice, playerChoice){
if (playerChoice === computerChoice){
    draws++
    return("This is a draw")
}
else if (playerChoice === "rock") {
    if(computerChoice=== "paper"){
    computerScore++
    return("You Lose Paper beats Rock")  
}else{
    playerScore++
    return("You Win Rock beats Scissors")  
    }
}
else if (playerChoice === "paper"){
    if (computerChoice === "scissors"){
    computerScore++
    return("You lose Scissors beats Paper")
}else{
    playerScore++
    return("You win Paper beats Rock")
    }
}
else if(playerChoice === "scissors"){
    if(computerChoice === "rock"){
        computerScore++
        return("You lose Rock beats Scissors")
}else{
        playerScore++
    return("You win Scissors beats Paper")
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
    alert("You are the Winner")
    } else if (computerScore === 5)
        alert("GG Loser")
break
}
}
}









