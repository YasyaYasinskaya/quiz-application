const choiceContainers = $('.choice-container');
const choiceTexts = $('.choice-text');
<<<<<<< HEAD
const progressText = $("#progressText");
const progressBarFull = $("#progressBarFull");
const scoreText = $("#score");
const game = $("#game");
const loader = $("#loader");
=======
const progressText=$("#progressText");
const progressBarFull=$("#progressBarFull");
>>>>>>> 237620c9340fd1aba69190bab239077e1d623fff

const scoreBonus = 10;

<<<<<<< HEAD
let questions = [];
let currentQuestion = {};
=======
let questions = [
  
];
let currentQuestion = {};


>>>>>>> 237620c9340fd1aba69190bab239077e1d623fff
let questionCounter = -1;
let acceptingAnswers = false;
let score = 0;

$.ajax({
  method: 'GET',
  url: 'https://opentdb.com/api.php?amount=3',
  dataType: "json"
})
.done(function(response) {
  for (const loadedQuestion of response.results) {
    const formattedQuestion = {
      'question': $.parseHTML(loadedQuestion.question)[0].textContent
    };
    const answerChoices = [];
    for (const incorrectAnswer of loadedQuestion.incorrect_answers) {
      const parsedIncorrectAnswer = $.parseHTML(incorrectAnswer)[0].textContent;
      answerChoices.push(parsedIncorrectAnswer);
    }
    formattedQuestion.answerIndex = Math.floor(Math.random() * answerChoices.length);
    const parsedCorrectAnswer = $.parseHTML(loadedQuestion.correct_answer)[0].textContent;
    answerChoices.splice(formattedQuestion.answerIndex, 0, parsedCorrectAnswer);
    formattedQuestion.answerChoices = answerChoices;
<<<<<<< HEAD
    questions.push(formattedQuestion);
  }
  game.removeClass('hidden');
  loader.addClass('hidden');
  getNewQuestion();
})
.fail(function(err) {
  console.error(err);
});

=======
    questions.push(formattedQuestion)
  }
  getNewQuestion()

})
.fail(function(err) {
  console.error(err)
})



>>>>>>> 237620c9340fd1aba69190bab239077e1d623fff
for (const choice of choiceTexts) {
  $(choice).click(function(event) {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = event.target;
<<<<<<< HEAD
    const selectedAnswerIndex = $(selectedChoice).attr("id");
    const classToApply = currentQuestion.answerIndex == selectedAnswerIndex ? "correct" : "incorrect";
    $(selectedChoice.parentElement).addClass(classToApply);
    if (classToApply === "correct") {
      incrementScore(scoreBonus);
    }
=======
    const selectedAnswerIndex = $(event.target).attr("id");
    const classToApply = currentQuestion.answerIndex == selectedAnswerIndex ? "correct" : "incorrect";
    $(selectedChoice.parentElement).addClass(classToApply);  
>>>>>>> 237620c9340fd1aba69190bab239077e1d623fff
    setTimeout(function() {
      $(selectedChoice.parentElement).removeClass(classToApply);
      getNewQuestion();
    }, 1000);
  });
}

<<<<<<< HEAD
function getNewQuestion() {
  questionCounter++;
  if (questionCounter >= questions.length) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign('end.html');
  }
  progressText.text(`${questionCounter + 1}/${questions.length}`)
  progressBarFull.css({'width': `${((questionCounter + 1) / questions.length) * 100}%`});
  currentQuestion = questions[questionCounter];
  $('#question').text(currentQuestion.question);
=======





function getNewQuestion() {
  questionCounter++;
  if (questionCounter >= questions.length) {
    localStorage.setItem("mostRecentScore",score);
    return window.location.assign('end.html');
  }
  progressText.text(`${questionCounter+1}/${questions.length}`);
  progressBarFull.css({'width':`${((questionCounter+1)/questions.length)*100}%`})
  currentQuestion = questions[questionCounter];
  $('#question').text(currentQuestion.question)
>>>>>>> 237620c9340fd1aba69190bab239077e1d623fff
  for (let index = 0; index < choiceContainers.length; index++) {
    if (index < currentQuestion.answerChoices.length) {
      choiceContainers.eq(index).find(".choice-text").text(currentQuestion.answerChoices[index]);
      choiceContainers.eq(index).css({'visibility': 'visible'});
    } else {
      choiceContainers.eq(index).css({'visibility': 'hidden'});
    }
  }
  acceptingAnswers = true;
}

function incrementScore(number) {
  score += number;
  scoreText.text(score);
};