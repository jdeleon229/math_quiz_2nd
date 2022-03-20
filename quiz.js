//Calling the first question
var questionElement = document.getElementById('question');
var answerAElement = document.getElementById('answerA');
var answerBElement = document.getElementById('answerB');
var answerCElement = document.getElementById('answerC');
var answerDElement = document.getElementById('answerD');

var welcomeSectionEl = document.getElementById("welcome");

var quizSection = document.getElementById("quiz");

var questionIndex = 0;

var endGameEl = document.getElementById("score");

var startButton = document.getElementById("startButton");

var questions = [
    {
        question: 'Question 1',
        answerA: 'Answer A',
        answerB: 'Answer B',
        answerC: 'Answer C',
        answerD: 'Answer D'
    },
    {
        question: 'Question 2',
        answerA: 'Answer A',
        answerB: 'Answer B',
        answerC: 'Answer C',
        answerD: 'Answer D'
    },
    {
        question: 'Question 3',
        answerA: 'Answer A',
        answerB: 'Answer B',
        answerC: 'Answer C',
        answerD: 'Answer D'
    },
    {
        question: 'Question 4',
        answerA: 'Answer A',
        answerB: 'Answer B',
        answerC: 'Answer C',
        answerD: 'Answer D'
    },
];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    //why do i need line 53//
    console.log("click");
    welcomeSectionEl.classList.toggle("hide");
    quizSection.classList.toggle("hide");
}

function endGame() {
    alert("Game is over!");
}

function askNextQuestion() {
    if (questionIndex >= questions.length) {
        endGame();
    } else {
        questionElement.textContent = questions[questionIndex].question
        answerAElement.textContent = questions[questionIndex].answerA
        answerBElement.textContent = questions[questionIndex].answerB
        answerCElement.textContent = questions[questionIndex].answerC
        answerDElement.textContent = questions[questionIndex].answerD
    }
}

answerAElement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Answer A has been clicked.");
    questionIndex++;
    askNextQuestion();
});

answerBElement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Answer B has been clicked.");
    questionIndex++;
    askNextQuestion();
});

answerCElement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Answer C has been clicked.");
    questionIndex++;
    askNextQuestion();
});

answerDElement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Answer D has been clicked.");
    questionIndex++;
    askNextQuestion();
});

var timeRemaining = 30;
function startTimer() {
    var timerInterval = setInterval(function(){
        timeRemaining--;
        if (timeRemaining ===0) {
            clearInterval(timerInterval);
            endGame();
        }
        document.getElementById("timer").textContent = timeRemaining;
    }, 1000);
}

askNextQuestion();
startTimer();

/*
When the user visits the page, 
then the welcome section is displayed. 

When the user clicks on the start button, 
then the quizSection commences
then hide welcomeSection and make quizSelection visible,
then load the first question and answer buttons,
then start the timer.

When user selects an incorrect response, 
then the timer is deducted x points. 

When user selects a correct response, 
then the user receives x points. 
Then load next question.
Repeat until last question.

When user completes last question,
then timer stops
then hide quizSection and make scoreSection visible,
then user fills out form.

When user submits form,
then name and timer data is saved to local storage
then hide scoreSection and display welcomeSection. 





*/
