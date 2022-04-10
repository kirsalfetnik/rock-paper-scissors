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
            return("It's a draw!");
        } else if (computerSelection === "PAPER") {
            return("You lose! Paper beats Rock");
        } else {
            return("You win! Rock beats Scissors");
        }
    }

    if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            return("You win! Paper beats Rock");
        } else if (computerSelection === "PAPER") {
            return("It's a draw!");
        } else {
            return("You lose! Scissors beat Paper");
        }
    }

    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            return("You lose! Rock beats Scissors");
        } else if (computerSelection === "PAPER") {
            return("You win! Scissors beat Paper");
        } else {
            return("It's a draw!");
        }
    }
     
}


const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', function() {
    console.log(playRound("ROCK"));
})

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', function() {
    console.log(playRound("PAPER"));
})

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', function() {
    console.log(playRound("SCISSORS"));
})

