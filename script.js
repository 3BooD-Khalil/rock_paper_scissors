console.log("Meow 🐱")


function getComputerChoice(){
    let x=Math.floor(Math.random()*3);
    if(x===0){
        return "rock";
    }
        
    else if (x===1){
        return "paper";
    }
        
    else if(x===2){
        return "scissors";
    }
        

}



// HumanChoiceFunction
function getHumanChoice() {
    const choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

//score
let humanScore=0;
let computerScore=0;

//playRound

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

// //playGame
// function playGame() {
//     humanScore = 0;
//     computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         console.log(`Round ${i + 1}: Human: ${humanScore}, Computer: ${computerScore}`);
//     }

//     // Declare the winner
//     if (humanScore > computerScore) {
//         console.log("Congratulations! You won the game!");
//     } else if (humanScore < computerScore) {
//         console.log("Sorry, the computer won the game.");
//     } else {
//         console.log("It's a tie!");
//     }
// }

// // Start the game
// playGame();

const rock= document.querySelector("#rock");
rock.setAttribute("style", "background: lightblue;");
rock.addEventListener("click", (e) =>{
    playRound("rock",getComputerChoice());
    // e.target.style.background = "#555555";
} )
const paper= document.querySelector("#paper");
paper.setAttribute("style", "background: lime;");
paper.addEventListener("click", (e) =>{
    playRound("paper",getComputerChoice());
    // e.target.style.background = "#555555";
} )

const scissors= document.querySelector("#scissors");
scissors.setAttribute("style", "background: pink;");
scissors.addEventListener("click", (e) =>{
    playRound("scissors",getComputerChoice());
    // e.target.style.background = "#555555";
} )
