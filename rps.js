// Get computers choice
let gameOptions = ["rock", "paper", "scissors"]
function getComputerChoice(){
return (gameOptions[(Math.floor(Math.random() * gameOptions.length))]);
}
//let computerChoice = getComputerChoice();
//console.log(computerChoice)
// Prompt User for rock paper scissor 
//let playerChoice = prompt("Rock, Paper, Or Scissors").toLowerCase();
//compare if 1st is greater than 2nd
function playRound(computerChoice, playerChoice){
if (playerChoice === computerChoice){
alert("This is a tie")
}
else if (playerChoice === "rock") {
    if(computerChoice=== "paper"){
    alert("Computer Won")
}
else {
    alert("Player Won")
}
}
else if (playerChoice === "paper"){
if (computerChoice === "scissors"){
alert("Computer Won")
}
else{
    alert("Player Won")
}
}
else if(playerChoice === "scissors"){
    if(computerChoice === "rock"){
        alert("Computer Won")
    }
    else{
        alert("Player Won")
    }
}
}

const playerChoice = "rock";
const computerChoice= getComputerChoice();
console.log(playRound(computerChoice, playerChoice));
