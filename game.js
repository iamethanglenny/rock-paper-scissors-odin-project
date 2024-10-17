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


function playRound(humanChoice, computerChoice) {

}

function playGame() {

}