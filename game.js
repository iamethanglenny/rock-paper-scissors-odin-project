const h1 = document.getElementById("heading");
h1.setAttribute("style", "color: black; font-size: 42px; text-align: center");
const p = document.getElementById("sub-heading");
p.setAttribute("style", "color: #001101; font-size: 24px; text-align: center");

let humanScore = 0;
let computerScore = 0;
let gameOver = false; // Flag to check if the game is over

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice) {
    if (gameOver) return; // Prevent playing if the game is over

    const computerChoice = getComputerChoice();
    let result;
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }

    updateScore();
    displayResult(result);
    checkWinner();
}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `Current Score: Human ${humanScore} - Computer ${computerScore}`;
}

function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = result;
}

function checkWinner() {
    const finalResult = document.getElementById("final-result");
    if (humanScore === 5) {
        finalResult.innerHTML = "Congratulations! You are the overall winner!";
        gameOver = true; // Set the game over flag
    } else if (computerScore === 5) {
        finalResult.innerHTML = "Sorry, the computer wins the game!";
        gameOver = true; // Set the game over flag
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false; // Reset the game over flag
    updateScore();
    document.getElementById("final-result").innerHTML = ""; // Clear final result message
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
