

var Question = [{
    "Question": "What is the full form of IP?",
    "option1":"internet provider",
    "option2":"Internet Port",
    "option3":"internet Protocol",
    "option4":"other",

    "answer": "2"
}, {
    "Question": "Who is the founder of Microsoft?",
    "option1":"Bill Gates",
    "option2":"Steve Jobs",
    "option3":"Steve Wozniak",
    "option4":"other",
    "answer": "0"
}, {
    "Question": "1 byte = ?",
    "option1":"8 bits",
    "option2":"64 bits",
    "option3":"1024 bits",
    "option4":"32 bits",
    "answer": "0"
}, {
    "Question": "The C programming language was developed by?",
    "option1":"Brendan Eich",
    "option2":"Dennis Ritchie",
    "option3":"Guido van Rossum",
    "option4":"other",
    "answer": "1"
}, {
    "Question": "What does CC mean in emails?",
    "option1":"Carbon Copy",
    "option2":"Creative Commons",
    "option3":"Hard copy",
    "option4":"other",
    "choices": ["", "", ""],
    "answer": "0"
}];

var currentQuestion = 0;
var score = 0;

var container = document.getElementById("quizContainer");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var questionEl;
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

var totQuestions = Question.length;

function loadQuestion (questionIndex){
console.log(Question)
    var q = Question[questionIndex];
    questionEl = document.getElementById("Question");
    questionEl.textContent = (questionIndex + 1)+ '.' + q.Question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

function loadNextQuestion (){
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if(currentQuestion < 5 && Question[currentQuestion].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent ='Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display ='none';
        resultCont.style.display ='';
        resultCont.textContent = 'your score:'+score;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
