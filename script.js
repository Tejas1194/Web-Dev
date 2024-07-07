// Questions for the quiz
const questions = [
    {
        question: "Who is the main character of Spider-Man?",
        answers: ["Bruce Wayne", "Clark Kent", "Peter Parker", "Tony Stark"],
        correct: 2
    },
    {
        question: "What is Spider-Man's real name?",
        answers: ["Steve Rogers", "Peter Parker", "Wade Wilson", "Matt Murdock"],
        correct: 1
    },
    {
        question: "Which city does Spider-Man protect?",
        answers: ["Gotham City", "Metropolis", "New York City", "Star City"],
        correct: 2
    }
];

let currentQuestion = 0;

// Function to display the current question
const showQuestion = () => {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    
    questionElement.textContent = questions[currentQuestion].question;
    answersElement.innerHTML = '';
    
    questions[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersElement.appendChild(button);
    });
}

// Function to check the selected answer
const selectAnswer = (index) => {
    const isCorrect = index === questions[currentQuestion].correct;
    alert(isCorrect ? 'Correct!' : 'Wrong answer. Try again!');
    if (isCorrect) {
        nextQuestion();
    }
}

// Function to move to the next question
const nextQuestion = () => {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        alert('Quiz completed!');
        currentQuestion = 0; // Reset to first question if you want to loop the quiz
    }
    showQuestion();
}

// Initialize the quiz when the document is fully loaded
document.addEventListener('DOMContentLoaded', showQuestion);
