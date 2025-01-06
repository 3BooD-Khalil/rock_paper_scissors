const container= document.querySelector(".container");
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) return "rock";
    if (x === 1) return "paper";
    return "scissors";
}

// Scores and round tracker
let humanScore = 0;
let computerScore = 0;
let currentRound = 0;
const totalRounds = 5;

// UI Elements
const rock = document.querySelector("#rock");
rock.style.background = "lightblue";

const paper = document.querySelector("#paper");
paper.style.background = "lime";

const scissors = document.querySelector("#scissors");
scissors.style.background = "pink";

const game=document.querySelector(".game");
// const round=document.querySelector(".round");

// Play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`Round ${currentRound + 1}: It's a tie! Both chose ${humanChoice}`);
        // round.textContent="Round"+ currentRound + 1+": It's a tie! Both chose " +humanChoice;
        const round=document.createElement("p");
        round.textContent=`Round ${currentRound + 1}: It's a tie! Both chose ${humanChoice}`;
        game.appendChild(round);

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`Round ${currentRound + 1}: You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        const round=document.createElement("p");
        round.textContent=`Round ${currentRound + 1}: You win! ${humanChoice} beats ${computerChoice}`;
        game.appendChild(round);
    } else {
        console.log(`Round ${currentRound + 1}: You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        const round=document.createElement("p");
        round.textContent=`Round ${currentRound + 1}: You lose! ${computerChoice} beats ${humanChoice}`;
        game.appendChild(round);
    }

    console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
    currentRound++;
    const curRound=document.createElement("p");
    curRound.textContent=`Score: Human - ${humanScore}, Computer - ${computerScore}`;
    curRound.style.color= 'blue';
    game.appendChild(curRound);

    if (currentRound === totalRounds) {
        declareWinner();
    }
}



// Declare the winner
function declareWinner() {
    const winner=document.createElement('p');

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
        winner.textContent="Congratulations! You won the game!";
    } else if (humanScore < computerScore) {
        console.log("Sorry, the computer won the game.");
        winner.textContent="Sorry, the computer won the game.";

    } else {
        console.log("Meow! 🐱 It's a tie!");
        winner.textContent="Meow! 🐱 It's a tie!";

    }
    winner.setAttribute("style", "font-size: 28px; color: red")
    game.appendChild(winner);

    // Reset the game
    resetGame();
}

// Reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
    console.log("Game reset. Play again!");
}

// Event Listeners
rock.addEventListener("click", () => {
    if (currentRound < totalRounds) {
        playRound("rock", getComputerChoice());
    }
});

paper.addEventListener("click", () => {
    if (currentRound < totalRounds) {
        playRound("paper", getComputerChoice());
    }
});

scissors.addEventListener("click", () => {
    if (currentRound < totalRounds) {
        playRound("scissors", getComputerChoice());
    }
});

// Start the game
function playGame() {
    console.log("Game started! Make your choice.");
}

playGame();
