//first create a variable with array and objects for the questions that will be asked on the quiz.

// var with array + objects:
var questions = [
    {
        title: "What can provide you, as a developer, with deeper access to web applications and their browser?",
        choices: ["console.log", "inspect", "chrome dev tools", "terminal"],
        answer: "chrome dev tools"
    },
    {
        title: "What logical operator turns an expression that evaluates to true to false and vice versa?",
        choices: ["!", "banger", "===", ">"],
        answer: "!"
    },
    {
        title: "What comparison operator compares the equality and type of value (strict equality?",
        choices: [">==", "=", "!==", "==="],
        answer: "==="
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables. What must arrays be enclosed in?",
        choices: ["paranthesis, commas", "qoutes, square brackets", "qoutes, curly brackets", "backslashes",],
        answer: "qoutes, square brackets"
    },
    {
        title: "Arrays in Javascript can be used to store ____?",
        choices: ["booleans", "numbers and strings", "other arrays", "all of the above"],
        answer: "all of the above"
    },
];

//Declared variables:
var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper= document.querySelector("#wrapper");

var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");
