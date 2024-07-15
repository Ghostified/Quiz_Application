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
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    //Display the answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();