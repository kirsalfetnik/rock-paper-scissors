function computerPlay() {
    let game = ["Rock", "Paper", "Scissors"];
    let value = game[Math.floor(Math.random()*game.length)];
    console.log("Computer chooses", value);

    return value.toUpperCase();
}


function playerPlay() {
    let value = prompt("Write a value:").toUpperCase();

    return value;
}


function playRound(playerSelection, computerSelection) {
    
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
            return("It's a draw!")
        }
    }
     
}


function game() {
    
    for (let i = 1; i <= 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();