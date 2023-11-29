// Get first computers choice
let gameOptions = ["Rock", "Paper", "Scissors"]
function getComputerChoice(){
return (gameOptions[(Math.floor(Math.random() * gameOptions.length))]);
}
let compChoice = getComputerChoice();
console.log(compChoice)
// Prompt User for rock paper scissor 
//allow user to type non case sensitive 
//compare if 1st is greater than 2nd