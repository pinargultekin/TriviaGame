//Variables
var questions = [{
  question: "What was wrong with the couch Ross returned to the store?",
  options: ["It had stain", "It was torn", "It was cut in half", "The color was wrong"],
  correctAnswer: "It was cut in half"
}, {
  question: "What was Phoebe in charge of at Rachel's suprise party?",
  options: ["Ice and food", "Cups and food", "Cups and ice", "Balloons and ice"],
  correctAnswer: "Cups and ice"
}, {
  question: "What is the name of Phoebe's alter-ego?",
  options: ["Phoebe Neeby", "Regina Falange", "Princess Consuela Bananahammock", "Mrs.Crap Bag"],
  correctAnswer: "Regina Falange"
}, {
  question: "Who was Chandler's TV magazine always addressed to?",
  options: ["Mr. Chandler Bang", "Chandler Bung", "Miss Chanandler Bong", "Chandler Beng"],
  correctAnswer: "Miss Chanandler Bong"
}, {
  question: "Which is not a Phoebe song?",
  options: ["Double-jointed boy", "My mother's ashes", "Terry's a jerk", "My mom, the cat"],
  correctAnswer: "My mom, the cat"
}, {
  question: "What was Monica's apartment number?",
  options: ["16", "24", "20", "19"],
  correctAnswer: "20"
}, {
  question: "What is Chandler's address in Yemen?",
  options: ["15 Yemen Road", "15 Yemen Street", "15 Yemen Avenue", "15 Yemen Drive"],
  correctAnswer: "15 Yemen Road"
}, {
  question: "What is the name of Chandler's roommate after Joey moves out?",
  options: ["George", "David", "Eddie", "Frank"],
  correctAnswer: "Eddie"
}];

var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var blank = 0;
var timer = 25;
var isTimer = false;
var set = 0;
var userChoice = "";

//Function
//When start button clicked;
$("#start").on("click", function () {
  //start button dissapear
  $("#start").remove();
  //and game card appears 
  $("#game").show();
  //with questions and options
  ask();
  //timer starts count down
  startTimer();
});
