
var Question = [{
    "Question": "there are _______ surahs of the HOLY QURAN",
    "option1":"120",
    "option2":"114",
    "option3":"118",
    "option4":"104",

    "answer": "2"
}, {
    "Question": "The first revelation was written by________?",
    "option1":"Khalid Bin Saeed(RA)",
    "option2":"Zaid Bin Harith(RA)",
    "option3":"none of these",
    "option4":"Hazrat Abu Bakr(RA)",
    "answer": "1"
}, {
    "Question": "The first caliph of islam was ________ ?",
    "option1":"HAZRAT ALI(RA)",
    "option2":"HAZRAT ABU BAKR(RA)",
    "option3":"None of these",
    "option4":"HAZRAT UMER(RA)",
    "answer": "2"
}, {
    "Question": "_______ is the qibla of the Muslim",
    "option1":"Baitul-Luhum",
    "option2":"Baitul-Muqdas",
    "option3":"Kaabatullah",
    "option4":"Makkah",
    "answer": "None the these"
}, {
    "Question": "The first Muazzin of ISLAM was ___________ ?",
    "option1":"HAZRAT BILAL(RA)",
    "option2":"HAZRAT UBAIDULLAH(RA)",
    "option3":"HAZRAT HUSSAIN(RA)",
    "option4":"None of these",
    //"choices": ["", "", ""],
    "answer": "1"
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
        resultCont.textContent = 'your score:'+ score;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
