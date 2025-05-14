// Simple quiz questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hypertext Markdown Language",
            "Hyperloop Machine Language",
            "Helicopters Terminals Motorboats Lamborginis"
        ],
        answer: "Hypertext Markup Language"
    },
    {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "1997"],
        answer: "1995"
    },
    {
        question: "Which of these is a JavaScript framework?",
        options: ["Django", "Flask", "React", "Laravel"],
        answer: "React"
    }
];

 
// Get DOM elements
const questionElement = document.querySelector('.question');
const questionNumberElement = document.querySelector('.question-number');
const optionsContainer = document.querySelector('.options-container');
const nextButton = document.querySelector('.next-btn');
const resultContainer = document.querySelector('.result');
const scoreElement = document.querySelector('.score');
const restartButton = document.querySelector('.restart-btn');


// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;


// Initialize the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}


// Display current question
function showQuestion() {
    // Reset state
    selectedAnswer = null;
    resultContainer.classList.add('hidden');
    
    // Get current question
    const currentQuestion = questions[currentQuestionIndex];
    
    // Update question number
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    
    // Update question text
    questionElement.textContent = currentQuestion.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    
    // Add new options
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectAnswer(option));
        optionsContainer.appendChild(button);
    });
}


// Handle answer selection
function selectAnswer(answer) {
    // Remove selected class from all options
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    event.target.classList.add('selected');
    selectedAnswer = answer;
}

// Show results
function showResults() {
    questionElement.textContent = '';
    questionNumberElement.textContent = '';
    optionsContainer.innerHTML = '';
    nextButton.classList.add('hidden');
    
    scoreElement.textContent = score;
    resultContainer.classList.remove('hidden');
}


// Check answer and move to next question
function nextQuestion() {
    if (selectedAnswer === null) {
        alert('Please select an answer!');
        return;
    }
    
    // Check if answer is correct
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++;
    }
    
    // Move to next question or show results
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Event listeners
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', startQuiz);

// Start the quiz when page loads
startQuiz();