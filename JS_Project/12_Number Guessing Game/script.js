document.addEventListener('DOMContentLoaded', () => {
    const min = 1;
    const max = 100;
    let randomNumber = generateRandomNumber(min, max);
    let attempts = 0;
    let bestScore = null;
  
    const guessInput = document.getElementById('guessInput');
    const submitBtn = document.getElementById('submitBtn');
    const restartBtn = document.getElementById('restartBtn');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const bestScoreDisplay = document.getElementById('bestScore');
  
    submitBtn.addEventListener('click', handleGuess);
    restartBtn.addEventListener('click', restartGame);
  
    function handleGuess() {
      const guess = parseInt(guessInput.value);
      if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}.`, 'error');
        return;
      }
  
      attempts++;
      attemptsDisplay.textContent = attempts;
  
      if (guess === randomNumber) {
        setMessage(`🎉 Correct! The number was ${randomNumber}.`, 'success');
        updateBestScore();
        disableGame();
      } else if (guess < randomNumber) {
        setMessage('📉 Too low! Try again.', 'error');
      } else {
        setMessage('📈 Too high! Try again.', 'error');
      }
  
      guessInput.value = '';
    }
  
    function setMessage(msg, type) {
      message.textContent = msg;
      message.style.color = type === 'success' ? '#4caf50' : '#f44336';
    }
  
    function disableGame() {
      guessInput.disabled = true;
      submitBtn.disabled = true;
    }
  
    function restartGame() {
      randomNumber = generateRandomNumber(min, max);
      attempts = 0;
      attemptsDisplay.textContent = attempts;
      setMessage('Game restarted! Make a guess.', 'info');
      guessInput.disabled = false;
      submitBtn.disabled = false;
      guessInput.value = '';
    }
  
    function updateBestScore() {
      if (bestScore === null || attempts < bestScore) {
        bestScore = attempts;
        bestScoreDisplay.textContent = bestScore;
      }
    }
  
    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });
  