$(document).ready(function () {

  $("#results").hide();
  $("#game").hide();

  $("#start").on("click", function () {
    //start button dissapear
    $("#start").remove();
    //and game card appears 
    $("#game").show();
    //timer starts count down
    startGame.startTimer();
    //changing background color when time is started 
    $("#counting").css("background-color", "rgb(237, 237, 90)");
  });
});



var startGame = {

  timer: 120,

  // start the timer & show the questions
  startTimer: function () {
    $("#display-time").text("Time remaining: " + startGame.timer);
    setInterval(startGame.countdown, 1000);
    trivia.displayQuestions();
  },

  // decrement the timer
  countdown: function () {
    startGame.timer--;
    $("#display-time").text("Time remaining: " + startGame.timer);
    if (startGame.timer === 0) {
      startGame.stopTimer();
      $("#display-time").empty();
    }
  },

  // stop the timer and check the options
  stopTimer: function () {
    clearInterval();
    trivia.checkAnswers();
  },

  // hide the questions and time & display the result page
  showResultPage: function (numCorrect, numIncorrect, numUnanswered) {

    $("#results").show();
    $("#questions").empty();
    $("#display-time").empty();
    $("#counting").remove();
    $("#correct-options").text("Correct: " + numCorrect);
    $("#incorrect-options").text("Incorrect: " + numIncorrect);
    $("#unanswered").text("Unanswered: " + numUnanswered);
  }
};

// Functions
var trivia = {

  
  displayQuestions: function () {
    var divContainer = $("#questions");
    var answerGroup = $(".form-check");
    divContainer.append('<h2>Questions</h2>');

    for (var i = 0; i < questions.length; i++) {

      divContainer.append('<div id="question">' + questions[i].question + '</div>' + '<p></p>');

      var answer1 = questions[i].options[0];
      var answer2 = questions[i].options[1];
      var answer3 = questions[i].options[2];
      var answer4 = questions[i].options[3];

      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer4 + '</label></div>' + '<br></br>');
    }

    // submit button 
    var doneButton = '<button class="btn btn-warning btn-lg" id="done-button" type="submit">Submit</button>';
    divContainer.append(doneButton);
    $("#done-button").on("click", startGame.stopTimer);
  },

  // checking if the user's choice match with the correct answer
  checkAnswers: function () {
    var correctAnswer;
    var userAnswer;
    var numCorrect = 0;
    var numIncorrect = 0;
    var numUnanswered = 0;

    for (var i = 0; i < questions.length; i++) {
      correctAnswer = questions[i].correct;
      userAnswer = $('input[id=radio' + i + ']:checked + label').text();

      if (userAnswer === correctAnswer) {
        numCorrect++;
      } else if (userAnswer === "") {
        numUnanswered++;
      } else if (userAnswer !== correctAnswer) {
        {
          numIncorrect++;
        }
      }
    }

    startGame.showResultPage(numCorrect, numIncorrect, numUnanswered);
  },
};

//Variables
var questions = [{
  question: "What was wrong with the couch Ross returned to the store?",
  options: ["It had stain", "It was torn", "It was cut in half", "The color was wrong"],
  correct: "It was cut in half"
}, {
  question: "What was Phoebe in charge of at Rachel's suprise party?",
  options: ["Ice and food", "Cups and food", "Cups and ice", "Balloons and ice"],
  correct: "Cups and ice"
}, {
  question: "What is the name of Phoebe's alter-ego?",
  options: ["Phoebe Neeby", "Regina Falange", "Princess Consuela Bananahammock", "Mrs.Crap Bag"],
  correct: "Regina Falange"
}, {
  question: "Who was Chandler's TV magazine always addressed to?",
  options: ["Mr. Chandler Bang", "Chandler Bung", "Miss Chanandler Bong", "Chandler Beng"],
  correct: "Miss Chanandler Bong"
}, {
  question: "Which is not a Phoebe song?",
  options: ["Double-jointed boy", "My mother's ashes", "Terry's a jerk", "My mom, the cat"],
  correct: "My mom, the cat"
}, {
  question: "What was Monica's apartment number?",
  options: ["16", "24", "20", "19"],
  correct: "20"
}, {
  question: "What is Chandler's address in Yemen?",
  options: ["15 Yemen Road", "15 Yemen Street", "15 Yemen Avenue", "15 Yemen Drive"],
  correct: "15 Yemen Road"
}, {
  question: "What is the name of Chandler's roommate after Joey moves out?",
  options: ["George", "David", "Eddie", "Frank"],
  correct: "Eddie"
}];