document.addEventListener("DOMContentLoaded", () => {
    const questions = [
      {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1,
      },
      {
        question: "What is the capital of France?",
        answers: ["Berlin", "London", "Paris", "Madrid"],
        correct: 2,
      },
      {
        question: "Which language is used for web development?",
        answers: ["Python", "HTML", "C++", "Java"],
        correct: 1,
      },
    ];
  
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedAnswers = [];
  
    const questionElement = document.getElementById("question");
    const answersContainer = document.getElementById("answers");
    const nextButton = document.getElementById("next-btn");
    const prevButton = document.getElementById("prev-btn");
    const progressElement = document.getElementById("progress");
    const scoreElement = document.getElementById("score");
    const scoreSection = document.querySelector(".score-section");
    const restartButton = document.getElementById("restart-btn");
  
    function loadQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      answersContainer.innerHTML = "";
  
      currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.onclick = () => selectAnswer(index);
        if (selectedAnswers[currentQuestionIndex] === index) {
          button.classList.add("selected");
        }
        answersContainer.appendChild(button);
      });
  
      updateProgress();
      prevButton.disabled = currentQuestionIndex === 0;
      nextButton.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
    }
  
    function selectAnswer(index) {
      selectedAnswers[currentQuestionIndex] = index;
    }
  
    function updateProgress() {
      progressElement.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    }
  
    function endQuiz() {
      document.querySelector(".quiz-container").classList.add("hidden");
      scoreSection.classList.remove("hidden");
  
      score = selectedAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correct ? 1 : 0);
      }, 0);
  
      scoreElement.textContent = `${score} / ${questions.length}`;
    }
  
    nextButton.onclick = () => {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
      } else if (currentQuestionIndex === questions.length - 1) {
        endQuiz();
      }
    };
  
    prevButton.onclick = () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
      }
    };
  
    restartButton.onclick = () => {
      currentQuestionIndex = 0;
      score = 0;
      selectedAnswers = [];
      document.querySelector(".quiz-container").classList.remove("hidden");
      scoreSection.classList.add("hidden");
      loadQuestion();
    };
  
    loadQuestion();
  });
  
  
  
  