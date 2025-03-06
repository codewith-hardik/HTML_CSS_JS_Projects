// script.js
const cardGrid = document.querySelector(".card-grid");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");
const themeToggle = document.getElementById("theme-toggle");
const levelSelect = document.getElementById("level-select");

const cardImages = [
  "🍎", "🍊", "🍇", "🍌", "🍉", "🍓", "🥝", "🍒"
]; // Emojis for simplicity

let cards = [];
let flippedCards = [];
let matchedCards = [];
let score = 0;
let timer = 60;
let interval;

// Shuffle an array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Create the cards
function createCards(level) {
  const pairs = level === "easy" ? 4 : level === "medium" ? 6 : 8;
  const selectedImages = cardImages.slice(0, pairs);
  const gameCards = shuffle([...selectedImages, ...selectedImages]);
  cardGrid.innerHTML = "";
  gameCards.forEach((img) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = img;
    card.innerHTML = `<span>${img}</span>`;
    card.addEventListener("click", flipCard);
    cardGrid.appendChild(card);
  });
  cards = document.querySelectorAll(".card");
}

// Flip a card
function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
    this.classList.add("flipped");
    flippedCards.push(this);
    if (flippedCards.length === 2) checkMatch();
  }
}

// Check for a match
function checkMatch() {
  const [firstCard, secondCard] = flippedCards;
  if (firstCard.dataset.value === secondCard.dataset.value) {
    matchedCards.push(firstCard, secondCard);
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    flippedCards = [];
    if (matchedCards.length === cards.length) {
      clearInterval(interval);
      alert("Congratulations! You matched all the cards!");
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      flippedCards = [];
    }, 1000);
  }
}

// Start the timer
function startTimer() {
  clearInterval(interval);
  timer = 60;
  timerDisplay.textContent = `Time: ${timer}s`;
  interval = setInterval(() => {
    timer--;
    timerDisplay.textContent = `Time: ${timer}s`;
    if (timer === 0) {
      clearInterval(interval);
      alert("Time's up! Game over!");
    }
  }, 1000);
}

// Restart the game
function restartGame() {
  matchedCards = [];
  flippedCards = [];
  score = 0;
  scoreDisplay.textContent = `Score: 0`;
  createCards(levelSelect.value);
  startTimer();
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  document.body.style.setProperty("--bg-color", document.body.style.getPropertyValue("--bg-color") === "#000000" ? "#ffffff" : "#000000");
  document.body.style.setProperty("--text-color", document.body.style.getPropertyValue("--text-color") === "#ffffff" ? "#000000" : "#ffffff");
});

// Event listeners
restartButton.addEventListener("click", restartGame);
levelSelect.addEventListener("change", restartGame);

// Initialize the game
createCards("easy");
startTimer();
