let userScore = localStorage.getItem("userScore")
  ? parseInt(localStorage.getItem("userScore"))
  : 0;

let computerScore = localStorage.getItem("computerScore")
  ? parseInt(localStorage.getItem("computerScore"))
  : 0;

const userMove = document.querySelectorAll(".choice");
const move = document.querySelector(".move");
const result = document.querySelector(".result");

const playerScore = document.getElementById("player-score");
const computerscore = document.getElementById("computer-score");
let resetScore = document.getElementById("reset-score");

//Updating Score
playerScore.innerText = `Player: ${userScore}`;
computerscore.innerText = `Computer: ${computerScore}`;

//Computer Move Generation
const ComputerMove = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const ranIndex = Math.floor(Math.random() * 3);
  return options[ranIndex];
};

//Play Game Function
const playGame = (userChoice) => {
//console.log("User Choice : ", userChoice);
  const computerMove = ComputerMove();
//  console.log("Computer Choice : ", computerMove);
  if (userChoice === computerMove) {
    move.innerText = `You Chose ${userChoice} and Computer Chose ${computerMove}`;
    result.className = "draw-color";
    result.innerText = "Result : Draw";
  } else if (
    (userChoice === "Rock" && computerMove === "Scissors") ||
    (userChoice === "Paper" && computerMove === "Rock") ||
    (userChoice === "Scissors" && computerMove === "Paper")
  ) {
    move.innerText = `You Chose ${userChoice} and Computer Chose ${computerMove}`;
    result.className = "win-color";
    result.innerText = "Result : You Win";
    userScore++;
    localStorage.setItem("userScore", userScore);
    playerScore.innerText = `Player: ${userScore}`;
  } else {
    move.innerText = `You Chose ${userChoice} and Computer Chose ${computerMove}`;
    result.className = "lose-color";
    result.innerText = "Result : You Lose";
    computerScore++;
    localStorage.setItem("computerScore", computerScore);
    computerscore.innerText = `Computer: ${computerScore}`;
  }
};

//Event Listener
userMove.forEach((choice) => {
  //console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

resetScore.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  //Clearing Local Storage
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);
  playerScore.innerText = `Player: ${userScore}`;
  computerscore.innerText = `Computer: ${computerScore}`;
  move.innerText = "Choose your move!";
  result.innerText = "";
});
