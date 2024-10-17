let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "scissors";
    } else if (randomNumber === 1) {
        return "rock";
    } else {
        return "paper";
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    while (choice !== "rock" && choice !== "scissors" && choice !== "paper") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    } 
    return choice;
}
console.log(getHumanChoice())


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


function playRound(humanChoice, computerChoice) {

    // log choices for clarity
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    // Determine the round winner and update the scores
    if (humanChoice === computerChoice) {
        console.log("It's a tie!") 
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        // Human wins
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`)
        humanScore++
    } else {
        // Computer wins
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`)
        computerScore++
    }
    // Display updated scores
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
}

function playGame() {

}