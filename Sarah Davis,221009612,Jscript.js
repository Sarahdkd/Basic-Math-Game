// Variables//
var questions = [
	{question: "33 + 24", answer: 57},
	{question: "7 * 8", answer: 56},
	{question: "18 - 5", answer: 13},
	{question: "7 * 3", answer: 21},
	{question: "15 / 5", answer: 3},
];

var score = 0;
var currentQuestion = 0;

// Functions//
function displayQuestion() {
	document.getElementById("question").innerHTML = questions[currentQuestion].question;
}

function checkAnswer() {
	var answer = document.getElementById("answer").value;

	if (answer == questions[currentQuestion].answer) {
		document.getElementById("result").innerHTML = "Correct!";
		score++;
	} 
	else {
		document.getElementById("result").innerHTML = "Wrong!";
	}

	document.getElementById("score").innerHTML = "Score: " + score;
}

function nextQuestion() {
	currentQuestion++;
	document.getElementById("answer").value = "";
	document.getElementById("result").innerHTML = "";

	if (currentQuestion == questions.length) {
		document.getElementById("question").innerHTML = "Game Over!";
		if(displaySetting==block){
		}
		document.getElementById("score").innerHTML = "Final Score: " + score;
	} else {
		displayQuestion();
	}
}

//Call//
displayQuestion();

