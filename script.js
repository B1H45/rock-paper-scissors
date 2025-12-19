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

let resultsBox = document.getElementById("resultsBox");
let humanScoreBox = document.getElementById("score");
let compScoreBox = document.getElementById("compScore");

function declareWinner(humanChoice, computerChoice) {
    resultsBox.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
    humanScoreBox.textContent = humanScore;
}

function declareLoser(humanChoice, computerChoice) {
    resultsBox.textContent = `You lose! ${humanChoice} is defeated by ${computerChoice}`;
    computerScore++;
    compScoreBox.textContent = computerScore;
}

function declareTie(humanChoice, computerChoice) {
    resultsBox.textContent = `Tie! You both chose ${humanChoice}`;
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

    if (humanScore >=5 || computerScore >=5) {
        if (humanScore > computerScore) {
            resultsBox.textContent = `You win ${humanScore} - ${computerScore}!`;
        } else {
            resultsBox.textContent = `Computer wins ${computerScore} - ${humanScore}!`
        }

        for (item of choices) {
            item.removeEventListener("click", buttonChoice);
            item.disabled = true;
        } 
    }

}

// function playGame() {
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
//     playRound(getHumanChoice(), getComputerChoice());
// }

// playGame();
// console.log(`Your score: ${humanScore}`);
// console.log(`Computer score: ${computerScore}`);

let choices = [
    document.getElementById("rock"),
    document.getElementById("paper"),
    document.getElementById("scissors")
]

let buttonChoice = (e) => {
    playRound(item.id, getComputerChoice());
    e.stopPropagation();
}

for (item of choices) {
    item.addEventListener("click", buttonChoice);
}



