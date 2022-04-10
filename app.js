let playerScore = 0;
let computerScore = 0;
const textPlayer = document.querySelector("#scorePlayer");
const textComputer = document.querySelector("#scoreComputer");
const info = document.querySelector("#info");

const newButton = document.createElement("button");
newButton.textContent = "New Game!";
newButton.style.cssText = "margin: 0 auto; color: green;";

newButton.addEventListener('click', function() {
    computerScore = 0;
    playerScore = 0;
    textPlayer.textContent = playerScore;
    textComputer.textContent = computerScore;
    info.textContent = "Make your choice!";
    newButton.parentNode.replaceChild(info, newButton);

})



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

function finalScore() {
    if (playerScore === 5) {
        alert("You won!");
        info.textContent = "New Game";
        info.parentNode.replaceChild(newButton, info);
    }
    
    if (computerScore === 5) {
        alert("You lost");
        info.textContent = "New Game";
        info.parentNode.replaceChild(newButton, info);
    }
}


const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', function() { 
    info.textContent = playRound("ROCK")[0];
    textPlayer.textContent = playerScore;
    textComputer.textContent = computerScore;

    finalScore();
})

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', function() {
    info.textContent = playRound("PAPER")[0];
    textPlayer.textContent = playerScore;
    textComputer.textContent = computerScore;

    finalScore();
})

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', function() {
    info.textContent = playRound("SCISSORS")[0];
    textPlayer.textContent = playerScore;
    textComputer.textContent = computerScore;

    finalScore();
})



