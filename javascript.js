function getComputerChoice(){
    // randomly returns either rock, paper or scissors
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0){
        return "rock"
    } else if (compChoice == 1) {
        return "paper"
    } else if (compChoice == 2) {
        return "scissors"
    } else {
        console.log("Something went wrong");
    }
}

console.log(getComputerChoice())
let computerSelection = getComputerChoice()
const playerSelection = "rock" //COME BACK TO THIS

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie. Play again!"
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
           return "You lose. Paper beats rock."
        } else {
           return "You win. Scissors beat paper."
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return "You win. Paper beats rock."
        } else {
            return "You lose. Paper beats scissors."
        }
    } else {
        if (computerSelection == "scissors") {
            return "You win. Rock beats scissors."
        } else {
            return "You lose. Scissors beat paper."
        }
    }
}

console.log(playRound(computerSelection, playerSelection))