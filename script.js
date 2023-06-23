var randomNumber = 0;
var playerGuess = 0;
var playerScore = 0;
var computerScore = 0;
var playerTip = 0;
var countDownFrom = 10;
var currentSecond = 11;
var timerId = 0; 

function gameLoop () {
	generateRandomNumber();
	randomNumber = 5; //debug only
	equalityCheck();
	updateHtmlContent();
	//secondCountDown();
}

function generateRandomNumber () {
	randomNumber = Math.floor((Math.random() * 10) + 1);
}

function secondCountDown(){
	alert ("secondCountDown is working")
}
	
function updateHtmlContent () {
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
}


function equalityCheck (){ 
	playerGuess = document.getElementById("playerGuessInput").value;
	playerGuess = Number (playerGuess) ;
if (playerGuess === randomNumber) {
	currentSecond = 11;
	playerScore = playerScore + 1;
	playerTip = "Correct, click to paly again";
	document.getElementById("playButton").value = "Play now";
	//claarTimeout(timerId);
	
}
}
