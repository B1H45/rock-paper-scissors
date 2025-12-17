console.log("Hello World");


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return "rock"
        case 1:
            return "scissors"
        case 2:
            return"paper"
    }
}

function getHumanChoice() {
    let entry = prompt("Enter 'rock', 'paper', or 'scissors'");
    return entry;
}

let humanScore = 0;
let computerScore = 0;

function declareWinner(humanChoice, computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
}

function declareLoser(humanChoice, computerChoice) {
    console.log(`You lose! ${humanChoice} is defeated by ${computerChoice}`);
    computerScore++;
}

function declareTie(humanChoice, computerChoice) {
    console.log(`Tie! You both chose ${humanChoice}`);
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            declareTie(humanChoice, computerChoice);
        } else if (computerChoice =="scissors") {
            declareLoser(humanChoice, computerChoice);

        } else {
            declareWinner(humanChoice, computerChoice);

        }
    }

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            declareTie(humanChoice, computerChoice);
        } else if (computerChoice =="paper") {
            declareLoser(humanChoice, computerChoice);

        } else {
            declareWinner(humanChoice, computerChoice);
        }
    }

    if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            declareTie(humanChoice, computerChoice);
        } else if (computerChoice =="rock") {
            declareLoser(humanChoice, computerChoice);

        } else {
            declareWinner(humanChoice, computerChoice);
        }
    }

}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();
console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);