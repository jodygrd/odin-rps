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
        return "Something went wrong";
    }
}


const computerSelection = getComputerChoice()
console.log(computerSelection)



function getPlayerChoice() {
    playerSelection = prompt("Rock, paper, or scissors?", "rock").toLowerCase()
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
        return playerSelection;
    } else {
        console.log("refresh and try again")
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie. Play again!")
        return "tie"
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log("You lose. Paper beats rock.")
        return "lose"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log("You win. Rock beats scissors.")
        return "win"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win. Paper beats rock.")
        return "win"
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log("You lose. Scissors beat paper.")
        return "lose"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("You lose. Rock beats scissors.")
        return "lose"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win. Scissors beats paper.")
        return "win"
    } else {
        console.log("Something went wrong")
        return "tie"
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == "win"){
            playerScore++
        } else if (roundResult == "lose"){
            computerScore++
        } 
    }
    if (playerScore > computerScore){
        console.log("You win!!")
    } else if (computerScore > playerScore){
        console.log("You lose.")
    } else {
        console.log("No winner. Play again?")
    }
}

game();
