//first create a variable with array and objects for the questions that will be asked on the quiz.

// var with array + objects:
var questions = [
  {
    title:
      "What can provide you, as a developer, with deeper access to web applications and their browser?",
    choices: ["console.log", "inspect", "chrome dev tools", "terminal"],
    answer: "chrome dev tools",
  },
  {
    title:
      "What logical operator turns an expression that evaluates to true to false and vice versa?",
    choices: ["!", "banger", "===", ">"],
    answer: "!",
  },
  {
    title:
      "What comparison operator compares the equality and type of value (strict equality?",
    choices: [">==", "=", "!==", "==="],
    answer: "===",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables. What must arrays be enclosed in?",
    choices: [
      "paranthesis, commas",
      "qoutes, square brackets",
      "qoutes, curly brackets",
      "backslashes",
    ],
    answer: "qoutes, square brackets",
  },
  {
    title: "Arrays in Javascript can be used to store ____?",
    choices: [
      "booleans",
      "numbers and strings",
      "other arrays",
      "all of the above",
    ],
    answer: "all of the above",
  },
];
// Five questions total  on first deployment. If all runs smoothly I will try to add more.
//Declared variables:
var score = 0;
var questionIndex = 0;
// working code and further declared variables can go under here
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;
// seconds left is 15 seconds per question plus one second for the timer to be triggered. We are also holding the interval time of 0 and a pentalty time of 10 (should it be !10 or -10?)
var ulCreate = document.createElement("ul");
// creates a new element without having to go to html

timer.addEventListener("click", function () {
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      secondsLeft--;
      currentTime.textContent = "Time:" + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        allDone();
        currentTime.textContent = "Time's Up!";
      }
    }, 1000);
  }
  render(questionIndex);
});
// the event listener triggers the timer that's activated with the button. (the timer shows up on the screen)
// next i have the questions get rendered to the screen 
// questions + choices rendered:
function render(questionIndex) {
    questionsDiv.innerHTML = "";
// clears existing data
    ulCreate.innerHTML = "";
    for (var i=0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
// for loops loops through all the info in an array ^
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));

    })
}
// there's a new "forEach" for each of the question choices.