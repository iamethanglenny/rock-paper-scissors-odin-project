function playGame() {

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Helper function to generate a random computer choice
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

// Helper function to get human choice
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    while (choice !== "rock" && choice !== "scissors" && choice !== "paper") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    } 
    return choice;
}

// Play a round and get the result
function playRound(humanChoice, computerChoice) {
    // Determine round winner and return the result
    if (humanChoice === computerChoice) {
      return "tie";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      return "human";
    } else {
      return "computer";
    }
  }


// Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        // Play a round and get the result
        const result = playRound(humanChoice, computerChoice);

        if (result === "human") {
            humanScore++;
            console.log(`Round ${i}: You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
          } else if (result === "computer") {
            computerScore++;
            console.log(`Round ${i}: You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
          } else {
            console.log(`Round ${i}: It's a tie!`);
          }
      
          // Display updated score after each round
          console.log(`Current Score: Human ${humanScore} - Computer ${computerScore}`);
        }
    

    // Declare overall winner based on scores
    if (humanScore === computerScore) {
        // Both scores equal
        console.log("It's a tie!")
    } else if (humanScore > computerScore) {
        // Human wins
        console.log(`You win! You scored: ${humanScore} and Computer scored: ${computerScore}`)
    } else {
        // Computer wins
        console.log(`You lose! Computer scored: ${computerScore} and You scored: ${humanScore}`)
    }
}

playGame();