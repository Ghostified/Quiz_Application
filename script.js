//function to set the questions
const questions = [
    {
        question: "Who is the greatest wizard of all time? ",
        answers: [
            { text:"Gilderoy Lockhart", correct: false},
            { text:"Lord Voldemort", correct: false},
            { text:"Grindewald", correct: false},
            { text:"Albus Dumbledore", correct: true},
        ]

    },

    {
        question: "Which house was professor sprout the dorm master? ",
        answers: [
            { text:"Griffindor", correct: false},
            { text:"Raven Claw", correct: false},
            { text:"Huffle Puff", correct: true},
            { text:"Slytherin", correct: false},
        ]
    },

    {
        question: "Which one is not an ingredient of the polyjuice potion? ",
        answers: [
            { text:"LaceWing Flies", correct: false},
            { text:"Knot Grass", correct: false},
            { text:"Bezoar", correct: true},
            { text:"Flux Weed", correct: false},
        ] 
    },

    {
        question: "Who was the Quidditch captain in Harry's First Year? ",
        answers: [
            { text:"Katie Bell", correct: false},
            { text:"Bill Weasly", correct: false},
            { text:"Oliver Wood", correct: true},
            { text:"Mundungus Fletcher", correct: false},
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");

//create variable to create a question index and store the score
let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    //reset the previous state
    resetState();

    //Diplay the question
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    //Display the answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        //add true or false to the dataset
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        //click function -> event listener when a mouse is clicked on the answer of the question
        button.addEventListener("click", selectAnswer);

    });
}

//Functions that removes answers from display 
function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

//selection function event
function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");

        //increase score
        score ++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    //function to  disable multiple clicks and highlight the correct answer if a wrong one is selected 
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display = "block";
}

//function to show score
function  showScore(){
    resetState();
    questionElement.innerHTML = `Your Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};

function handleButton() {
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

//event listener to retry and play the game again after completeing all questions
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleButton();
    } else {
        startQuiz ();
    }
})

//display output -> call the first question index and the answers options
startQuiz();