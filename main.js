const body = document.body;

const imageContainer = document.querySelectorAll(".image-container div")
const gameMoves = ["rock", "paper", "scissors"];
// Round text 
let roundText = document.querySelector("h3");
let roundNum = 1;

const computerMove = () => gameMoves[Math.floor(Math.random() * gameMoves.length)];

const gameEval = (userChoice, computerChoice) => {
  const wonMessage = () => alert(`You won! Computer move was ${computerChoice}`);
  const lostMessage = () => alert(`You lost.. Computer move was ${computerChoice}`);
  const drawMessage = () => alert(`Draw. Computer move was ${computerChoice}`);

  if (userChoice === computerChoice) drawMessage();
  else if (userChoice === "rock" && computerChoice === "paper") lostMessage();
  else if (userChoice === "rock" && computerChoice === "scissors") wonMessage();
  else if (userChoice === "paper" && computerChoice === "scissors") lostMessage();
  else if (userChoice === "paper" && computerChoice === "rock") wonMessage();
  else if (userChoice === "scissors" && computerChoice === "rock") lostMessage();
  else if (userChoice === "scissors" && computerChoice === "paper") wonMessage();

  roundText.innerText = `Round ${++roundNum}`;
}

imageContainer[0].addEventListener("click", () => gameEval(gameMoves[0], computerMove()));
imageContainer[1].addEventListener("click", () => gameEval(gameMoves[1], computerMove()));
imageContainer[2].addEventListener("click", () => gameEval(gameMoves[2], computerMove()));

