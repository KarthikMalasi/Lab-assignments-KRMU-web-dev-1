const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "mars"
    },
    {
        question: "What is 5 + 7?",
        answer: "12"
    },
    {
        question: "Who wrote 'Harry Potter'?",
        answer: "jk rowling"
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "blue whale"
    }
];


function runQuiz() {
    let score = 0;  

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz finished! You scored " + score + " out of " + quizQuestions.length);
}


runQuiz();
