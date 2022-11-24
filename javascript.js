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
;


let buttons = document.getElementsByClassName("player-buttons")

for (button of buttons) {
    button.addEventListener("click", function(e) {
        let playerSelection = e.target.innerHTML.toLowerCase();
        let computerSelection = getComputerChoice();
        displayCompSelection(computerSelection);
        playRound(playerSelection, computerSelection);
    })
}

//capture player selection

function displayCompSelection(computerSelection){
    document.getElementById("computer-choice").innerHTML = `${computerSelection}`
}



//Player clicks 
    //get player choice
    //get computer choice
    //playRound



// function getPlayerChoice() {


//     // if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
//     //     return playerSelection;
//     // } else {
//     //     document.getElementById("results").innerHTML = `${"refresh and try again")
//     // }
// }

// getPlayerChoice();




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

// function game(){
//     // let playerScore = 0;
//     // let computerScore = 0
    
//     // for (let i = 0; i < 5; i++) {
//     //     let playerSelection = getPlayerChoice();
//     //     let computerSelection = getComputerChoice();
//     //     let roundResult = playRound(playerSelection, computerSelection);
//     //     if (roundResult == "win"){
//     //         playerScore++
//     //     } else if (roundResult == "lose"){
//     //         computerScore++
//     //     } 
//     // }

//     if (playerScore > computerScore){
//         document.getElementById("results").innerHTML = `${"You win!!")
//     } else if (computerScore > playerScore){
//         document.getElementById("results").innerHTML = `${"You lose.")
//     } else {
//         document.getElementById("results").innerHTML = `${"No winner. Play again?")
//     }
// }

//game();
