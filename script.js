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
// function clears existing data
// questions + choices rendered:
function render(questionIndex) {
  questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    // appends question title only
    var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = userQuestion;
  }

  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (compare));
  })
}
// for loops loops through all the info in an array ^
// there's a new "forEach" for each of the question choices.
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {

    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    // correct condition:
    if (element.textContent == questions[questionIndex].answer) {
      score++;
      createDiv.textContent = "Great job! The answer is:   " + questions[questionIndex].answer;
      // correct condition
    } else {
      // adding condition to deduct 10 seconds off of the player's timer if they get a question wrong
      secondsLeft = secondsLeft - penalty;
      createDiv.textContent = "WHOOPS! Wrong, the correct answer is:   " + questions.questionIndex.answer;
    }
  }


  // Next we use question index in order to determine the number question that the user is on
  questionIndex++;

  if (questionIndex >= questions.length) {
    // all done will append the last page with the user's score
    allDone();
    createDiv.textContent = "Congrats! You've reached the end!" + " " + "You got   " + score + "/" + questions.length + " Correct!";
  } else {
    render(questionIndex);
  }
  questionsDiv.appendChild(createDiv);

}

// I am using "all done" to append the last page. 
function allDone() {
  questionsDiv.innerHTML = "";
  currentTime.innerHTML = "";
  // heading goes below:
  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "ALL DONE!"

  questionsDiv.appendChild(createH1);

  // create paragraph element 
  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");

  questionsDiv.appendChild(createP);

  // next we calculate the amount of time remaining and replaces it with the score at the end
  if (ssecondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var createP2 = document.createElement("p");
    clearInterval(holdInterval);
    createP.textContent = "Your final score is: " + timeRemaining;

    questionsDiv.appendChild(createP2);
  }

  // Add label
  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your initials to save your score!";

  questionsDiv.appendChild(createLabel);

  // input of initials/value/information
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";

  questionsDiv.appendChild(createInput);

  // submission 
  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "submit");
  createSubmit.textContent = "Submit";

  questionsDiv.appendChild(createSubmit);

  // up until this point the new variables that I have added do not show up on the console until we add an event listener.
  createSubmit.addEventListener("click", function () {
      var initials = createInput.value;

      if (initials === null) {

          console.log("This space can't be empty !");

      } else {
          var finalScore = {
              initials: initials,
              score: timeRemaining
          }
          console.log(finalScore);
          var allScores = localStorage.getItem("allScores");
          if (allScores === null) {
              allScores = [];
          } else {
              allScores = JSON.stringify(allScores);
          }
          allScores.push(finalScore);
          var newScore = JSON.stringify(allScores);
          localStorage.setItem("allScores," newScore);

          window.location.replace("./HighScores.html");
      }
  });
  
}