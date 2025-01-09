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
        // round.textContent="Round"+ currentRound + 1+": It's a tie! Both chose " +humanChoice;
        appendMessage(`Round ${currentRound + 1}: It's a tie! Both chose ${humanChoice}`);

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        appendMessage(`Round ${currentRound + 1}: You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        // console.log(`Round ${currentRound + 1}: You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        appendMessage(`Round ${currentRound + 1}: You lose! ${computerChoice} beats ${humanChoice}`);
    }

    // console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
    currentRound++;
    appendMessage(`Score: Human - ${humanScore}, Computer - ${computerScore}`,"blue");

    if (currentRound === totalRounds) {
        declareWinner();
    }
}



// Declare the winner
function declareWinner() {
    const winner=document.createElement('p');

    if (humanScore > computerScore) {
        winner.textContent="Congratulations! You won the game!";
    } else if (humanScore < computerScore) {
        winner.textContent="Sorry, the computer won the game.";

    } else {
        winner.textContent="Meow! 🐱 It's a tie!";

    }
    winner.setAttribute("style", "font-size: 28px; color: red")
    game.appendChild(winner);

    // Reset the game
    rstButton=document.createElement('button');
    rstButton.textContent="Reset Game";
    rstButton.style.background='green';
    rstButton.style.color='white';
    rstButton.addEventListener("click",resetGame);
    game.appendChild(rstButton);
}


// Reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
    game.innerHTML='';
    appendMessage("Game restarted, Enjoy 😊","green");
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
// Append messages to the game container
function appendMessage(message,color="black") {
    const msgElement = document.createElement("p");
    msgElement.textContent = message;
    msgElement.style.color = color;
    game.appendChild(msgElement);
}

// Start the game
function playGame() {
    // console.log("Game started! Make your choice.");
}

playGame();
