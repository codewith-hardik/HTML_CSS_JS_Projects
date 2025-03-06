// app.js

let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const playerChoiceDisplay = document.getElementById('player-chosen');
const computerChoiceDisplay = document.getElementById('computer-chosen');

const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    playerChoiceDisplay.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if (playerChoice === computerChoice) {
        resultText.textContent = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        resultText.textContent = "You win this round!";
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        resultText.textContent = "Computer wins this round!";
    }
}
