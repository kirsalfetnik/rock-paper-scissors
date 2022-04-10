let playerScore = 0;
let computerScore = 0;
const info = document.querySelector("#info");
const textPlayer = document.querySelector("#scorePlayer");
const textComputer = document.querySelector("#scoreComputer");

function playerPlay() {
    let result = prompt("Make a choice:").toUpperCase();

    return result;
}

function computerPlay() {
    let gameArray = ["Rock", "Paper", "Scissors"];
    let result = gameArray[Math.floor(Math.random() * gameArray.length)];
    console.log("Computer chooses", result);

    return result.toUpperCase();
}


function playRound(playerSelection) {
    
    let computerSelection = computerPlay();
    
    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK") {
            return ["It's a draw!"];
        } else if (computerSelection === "PAPER") {
            return ["You lose! Paper beats Rock", computerScore++];
        } else {
            return ["You win! Rock beats Scissors", playerScore++];
        }
    }

    if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            return ["You win! Paper beats Rock", playerScore++];
        } else if (computerSelection === "PAPER") {
            return ["It's a draw!"];
        } else {
            return ["You lose! Scissors beat Paper", computerScore++];
        }
    }

    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            return ["You lose! Rock beats Scissors", computerScore++];
        } else if (computerSelection === "PAPER") {
            return ["You win! Scissors beat Paper", playerScore++];
        } else {
            return ["It's a draw!"];
        }
    }
     
}


const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', function() { 
    info.textContent = playRound("ROCK")[0];
    textPlayer.textContent = playerScore;
    textComputer.textContent = computerScore;

})

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', function() {
    info.textContent = playRound("PAPER")[0];
    textPlayer.textContent = playerScore;
    textComputer.textContent = computerScore;
})

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', function() {
    info.textContent = playRound("SCISSORS")[0];
    textPlayer.textContent = playerScore;
    textComputer.textContent = computerScore;
})



