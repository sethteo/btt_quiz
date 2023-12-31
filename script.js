import { quiz1_questions } from "./questions/btt1.js";
import { quiz2_questions } from "./questions/btt2.js";
import { quiz3_questions } from "./questions/btt3.js";
import { quiz4_questions } from "./questions/btt4.js";
import { quiz5_questions } from "./questions/btt5.js";
import { quiz6_questions } from "./questions/btt6.js";

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizButton = document.getElementById("quiz-btn");
const imageElement = document.getElementById("image");
const quiz1 = document.getElementById('quiz_1');
const quiz2 = document.getElementById('quiz_2');
const quiz3 = document.getElementById('quiz_3');
const quiz4 = document.getElementById('quiz_4');
const quiz5 = document.getElementById('quiz_5');
const quiz6 = document.getElementById('quiz_6');


let questions;
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function shuffleArray(array) {
    const shuffledArray = array.slice(); // Create a copy of the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    if (currentQuestion.image) {
        imageElement.src = currentQuestion.image;
        imageElement.classList.remove("d-none");
        imageElement.classList.add("d-block");
      } else {
        imageElement.classList.remove("d-block")
        imageElement.classList.add("d-none")
      }

    const shuffledAnswers = shuffleArray(currentQuestion.answers);
    
    shuffledAnswers.forEach(answer => {
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
    if (questions.length - score < 5) {
        questionElement.innerHTML = `Good job, you passed! \nYou scored ${score} out of ${questions.length}`;
    } else {
        questionElement.innerHTML = `You failed, try again! \nYou scored ${score} out of ${questions.length}`;
    }
    nextButton.innerHTML = "Try again";
    nextButton.style.display = "block";
    quizButton.classList.remove("d-none");
    quizButton.classList.add("d-block");
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
        imageElement.classList.add("d-none")
        handleNextButton();
    } else {
        startQuiz();
    }
})

quizButton.addEventListener("click", () => {
    window.location.href = "quizpage.html";
})

quiz1.addEventListener("click", () => {
    questions = quiz1_questions;
    startQuiz();
})

quiz2.addEventListener("click", () => {
    questions = quiz2_questions;
    startQuiz();
})

quiz3.addEventListener("click", () => {
    questions = quiz3_questions;
    startQuiz();
})

quiz4.addEventListener("click", () => {
    questions = quiz4_questions;
    startQuiz();
})

quiz5.addEventListener("click", () => {
    questions = quiz5_questions;
    startQuiz();
})

quiz6.addEventListener("click", () => {
    questions = quiz6_questions;
    startQuiz();
})