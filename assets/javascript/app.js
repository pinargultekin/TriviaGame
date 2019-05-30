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
