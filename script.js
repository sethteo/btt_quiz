import { questions } from "./btt1.js";

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const imageElement = document.getElementById("image");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    if (currentQuestion.image) {
        imageElement.src = currentQuestion.image;
        imageElement.style.display = "block"; // Show the image
      } else {
        imageElement.style.display = "none"; // Hide the image
      }
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn", "btn-outline-primary", "container-fluid", "mb-4");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.remove("btn-outline-primary");
        selectedBtn.classList.add("btn-success");
        score++;
    } else {
        selectedBtn.classList.remove("btn-outline-primary");
        selectedBtn.classList.add("btn-danger")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.remove("btn-outline-primary");
            button.classList.add("btn-success");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})


startQuiz();