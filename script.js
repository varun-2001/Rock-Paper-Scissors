

// FUNCTION THAT RETURNS ROCK PAPER SCISSORS RANDOMLY

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// FUNCTION THAT RETURNS THE RESULT OF THE ROUND
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie! Try again!";
    }

    // ROCK-SCISSORS & ROCK-PAPER
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors!";
        }
        else {
            return "You Lose! Paper beats Rock!";
        }
    }

    // SCISSORS-ROCK & SCISSORS-PAPER
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors!";
        }
        else {
            return "You Win! Scissors beats Paper!";
        }
    }

    // PAPER-ROCK & PAPER-SCISSORS
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock!";
        }
        else {
            return "You Lose! Scissors beats Paper!";
        }
    }
}

// FUNCTION THAT PLAYS AND RETURNS THE RESULT OF THE GAME
function game() {
    let playerScore = 0;
    let machineScore =0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        alert(result);
        if (result == "You Win! Rock beats Scissors!" || result == "You Win! Scissors beats Paper!" || result == "You Win! Paper beats Rock!") {
            playerScore++;
        }
        else
            machineScore++;
    }
    if (playerScore > machineScore) {
        alert("You win the game!");
    }
    else if (playerScore < machineScore) {
        alert("You lose the game!");
    }
    else {
        alert("It's a tie!");
    }
}