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


const computerSelection = getComputerChoice()
console.log(computerSelection)
const playerSelection = "rock" //COME BACK TO THIS

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie. Play again!"
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return "You lose. Paper beats rock."
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return "You win. Rock beats scissors."
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win. Paper beats rock."
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose. Scissors beat paper."
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose. Rock beats scissors."
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win. Scissors beats paper."
    } else {
        return "Something went wrong"
    }
}

console.log(playRound(playerSelection, computerSelection))