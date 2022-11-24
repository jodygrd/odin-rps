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


let compScore = 0;
let humanScore = 0;

//PLAY A ROUND
let buttons = document.getElementsByClassName("player-buttons")
for (button of buttons) {
    button.addEventListener("click", function(e) {
        let playerSelection = e.target.innerHTML.toLowerCase();
        let computerSelection = getComputerChoice();
        displayCompSelection(computerSelection);
        if (playRound(playerSelection, computerSelection) == 'win'){
            humanScore++
        } else if (playRound(playerSelection, computerSelection) == 'lose'){
            compScore++
        }
        displayScore(compScore,humanScore);
    })
}

//DISPLAY COMP CHOICE
function displayCompSelection(computerSelection){
    document.getElementById("computer-choice").innerHTML = `${computerSelection}`
}

//DISPLAY SCORE
function displayScore(compScore, humanScore){
    document.getElementById("score").innerText = `Computer: ${compScore} vs Human: ${humanScore}`
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById("results").innerHTML = `${"It's a tie. Play again!"}`
        return "tie"
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        document.getElementById("results").innerHTML = `${"You lose. Paper beats rock."}`
        return "lose"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        document.getElementById("results").innerHTML = `${"You win. Rock beats scissors."}`
        return "win"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        document.getElementById("results").innerHTML = `${"You win. Paper beats rock."}`
        return "win"
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        document.getElementById("results").innerHTML = `${"You lose. Scissors beat paper."}`
        return "lose"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        document.getElementById("results").innerHTML = `${"You lose. Rock beats scissors."}`
        return "lose"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        document.getElementById("results").innerHTML = `${"You win. Scissors beats paper."}`
        return "win"
    } else {
        document.getElementById("results").innerHTML = `${"Something went wrong"}`
        return "tie"
    }
}


