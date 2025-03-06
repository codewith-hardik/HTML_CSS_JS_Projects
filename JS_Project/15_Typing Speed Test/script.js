// script.js
const displayTextEl = document.getElementById("display-text");
const typingInputEl = document.getElementById("typing-input");
const timeLeftEl = document.getElementById("time-left");
const wpmEl = document.getElementById("wpm");
const errorsEl = document.getElementById("errors");
const accuracyEl = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart-btn");

let timer = 60;
let interval;
let isTyping = false;
let errors = 0;
let typedCharacters = 0;
let correctCharacters = 0;

const paragraphs = [
  "AI allows computers to learn and solve problems almost like a person.AI systems are trained on huge amounts of information and learn to identify the patterns in it, in order carry out tasks such as having human-like conversation, or predicting a product an online shopper might buy. ",
  "Artificial intelligence (AI) refers to computer systems capable of performing complex tasks that historically only a human could do, such as reasoning, making decisions, or solving problems.",
 " Today, the term “AI” describes a wide range of technologies that power many of the services and goods we use every day – from apps that recommend TV shows to chatbots that provide customer support in real time. But do all of these really constitute artificial intelligence as most of us envision it? And if not, then why do we use the term so often?",
  "In this article, you’ll learn more about artificial intelligence, what it actually does, and different types of it. In the end, you’ll also learn about some of its benefits and dangers and explore flexible courses that can help you expand your knowledge of AI even further.  ",
  "As researchers attempt to build more advanced forms of artificial intelligence, they must also begin to formulate more nuanced understandings of what intelligence or even consciousness precisely mean. In their attempt to clarify these concepts, researchers have outlined four types of artificial intelligence.",
    "Reactive machines are the most basic type of artificial intelligence. Machines built in this way don’t possess any knowledge of previous events but instead only “react” to what is before them in a given moment. As a result, they can only perform certain advanced tasks within a very narrow scope, such as playing chess, and are incapable of performing tasks outside of their limited context. ",    
    "Machines with limited memory possess a limited understanding of past events. They can interact more with the world around them than reactive machines can. For example, self-driving cars use a form of limited memory to make turns, observe approaching vehicles, and adjust their speed. However, machines with only limited memory cannot form a complete understanding of the world because their recall of past events is limited and only used in a narrow band of time. ",
    "Machines that possess a “theory of mind” represent an early form of artificial general intelligence. In addition to being able to create representations of the world, machines of this type would also have an understanding of other entities that exist within the world. As of this moment, this reality has still not materialized. ",
    "Machines with self-awareness are the theoretically most advanced type of AI and would possess an understanding of the world, others, and itself. This is what most people mean when they talk about achieving AGI. Currently, this is a far-off reality. "
];

function startTest() {
  isTyping = true;
  interval = setInterval(() => {
    timer--;
    timeLeftEl.textContent = timer;

    if (timer <= 0) {
      clearInterval(interval);
      typingInputEl.disabled = true;
      displayResults();
    }
  }, 1000);
}

function updateStats() {
  const wpm = Math.round(typedCharacters / 5 / ((60 - timer) / 60));
  const accuracy = Math.round((correctCharacters / typedCharacters) * 100);

  wpmEl.textContent = isNaN(wpm) ? 0 : wpm;
  accuracyEl.textContent = isNaN(accuracy) ? 100 : accuracy;
}

function displayResults() {
  alert(
    `Test Completed!\nWPM: ${wpmEl.textContent}\nErrors: ${errorsEl.textContent}\nAccuracy: ${accuracyEl.textContent}%`
  );
}

function initTest() {
  const randomParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
  displayTextEl.textContent = randomParagraph;
  typingInputEl.value = "";
  timer = 60;
  errors = 0;
  typedCharacters = 0;
  correctCharacters = 0;

  timeLeftEl.textContent = timer;
  wpmEl.textContent = 0;
  errorsEl.textContent = 0;
  accuracyEl.textContent = 100;
  typingInputEl.disabled = false;
}

typingInputEl.addEventListener("input", () => {
  if (!isTyping) startTest();

  const inputText = typingInputEl.value;
  const displayText = displayTextEl.textContent;

  typedCharacters = inputText.length;
  correctCharacters = inputText
  .split("")
    .filter((char, i) => char === displayText[i]).length;
  errors = typedCharacters - correctCharacters;

  errorsEl.textContent = errors;
  updateStats();
});

restartBtn.addEventListener("click", () => {
  clearInterval(interval);
  isTyping = false;
  initTest();
});

// Initialize the test on page load
initTest();
