let playerScore = 0
let computerScore = 0
let draws = 0
const playerChoice = "rock";
let gameOptions = ["rock", "paper", "scissors"]
// Get computers choice
function getComputerChoice(){
return (gameOptions[(Math.floor(Math.random() * gameOptions.length))]);
}
// Prompt User for rock paper scissor 
//let playerChoice = prompt("Rock, Paper, Or Scissors").toLowerCase();

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
for (var i= 0; i<5; i++){
let computerChoice = getComputerChoice();
console.log(playRound(computerChoice, playerChoice));
}
if (playerScore > computerScore){
    return ("You Win");
} else{
    return ("GG Loser");
}

}

game()
console.log(draws)
console.log(playerScore)
console.log(computerScore)






