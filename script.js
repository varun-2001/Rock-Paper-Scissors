// GAME LOGIC
let computerScore=0;
let playerScore=0;

function gameOver(){
    return computerScore==5 || playerScore ==5;
}


// ELEMENTS
const winOrLose = document.getElementById("winOrLose");
const beatsElement = document.getElementById("beatsElement");
const playerSign = document.getElementById("playerSign");
const computerSign=document.getElementById("computerSign");
const playerScoreText=document.getElementById("playerScore");
const computerScoreText=document.getElementById("computerScore");
const rockChoice=document.getElementById("rock");
const paperChoice=document.getElementById("paper");
const scissorsChoice=document.getElementById("scissors");

rockChoice.addEventListener('click', ()=> handleClick("Rock"));
paperChoice.addEventListener('click', ()=> handleClick("Paper"));
scissorsChoice.addEventListener('click', ()=> handleClick("Scissors"));

function handleClick(playerSelection) {
    if (computerScore == 5 || playerScore == 5){
        if(confirm("Game Over! \nRestart Game?"));{
            restartGame();
        }
        return;
    }
    let computerSelection=computerPlay();
    changeSign(playerSelection, computerSelection);
    let result = playRound(playerSelection,computerSelection);

    playerScoreText.textContent=`Player: ${playerScore}`;
    computerScoreText.textContent=`Computer:${computerScore}`;
    
    
}

// FUNCTION THAT LETS USER SEE THE SIGNS USED BY COMPUTER AND USER
function changeSign(playerSelection, computerSelection){
    switch (playerSelection){
        case "Rock":
            playerSign.textContent="🪨";
            break;
        case "Paper":
            playerSign.textContent="📃";
            break;
        case "Scissors":
            playerSign.textContent="✂️";
            break;
    }

    switch (computerSelection){
        case "Rock":
            computerSign.textContent="🪨";
            break;
        case "Paper":
            computerSign.textContent="📃";
            break;
        case "Scissors":
            computerSign.textContent="✂️";
            break;
    }
}

// FUNCTION THAT RETURNS ROCK PAPER SCISSORS RANDOMLY
function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "Rock";
    } else if (random === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// FUNCTION THAT RETURNS THE RESULT OF THE ROUND
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        winOrLose.textContent="It's a Tie!";
        beatsElement.textContent=`${playerSelection} ties ${computerSelection}`
    }

    // ROCK-SCISSORS & ROCK-PAPER
    else if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            playerScore++;
            winOrLose.textContent="You Win!";
            beatsElement.textContent="Rock beats Scissors!";
        }
        else {
            computerScore++;
            winOrLose.textContent="You Lose!";
            beatsElement.textContent="Paper beats Rock!";        }
    }

    // SCISSORS-ROCK & SCISSORS-PAPER
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            computerScore++;
            winOrLose.textContent="You Lose!";
            beatsElement.textContent="Rock beats Scissors!";
        }
        else {
            playerScore++;
            winOrLose.textContent="You Win!";
            beatsElement.textContent="Scissors beats Paper!";
        }
    }

    // PAPER-ROCK & PAPER-SCISSORS
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerScore++;
            winOrLose.textContent="You Win!";
            beatsElement.textContent="Paper beats Rock!";
        }
        else {
            computerScore++;
            winOrLose.textContent="You Lose!";
            beatsElement.textContent="Scissors beats Paper!";
        }
    }
}

// RESTART GAME
function restartGame(){
    playerScore=0;
    computerScore=0;
    playerScoreText.textContent=`Player: ${playerScore}`;
    computerScoreText.textContent=`Computer:${computerScore}`
    playerSign.textContent="🤴";
    computerSign.textContent="🤖";
    winOrLose.textContent="Choose your weapon!";
    beatsElement.textContent="First to score 5 Points wins the game";
}
