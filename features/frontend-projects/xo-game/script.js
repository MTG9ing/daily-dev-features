// Select elements
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");
const timerText = document.getElementById("timer");

// Game variables
let currentPlayer = "X";
let gameActive = true;

let board = ["", "", "", "", "", "", "", "", ""];

// Winning conditions
const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// Handle click
function handleCellClick(e){

  const index = e.target.dataset.index;

  if(board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add(currentPlayer.toLowerCase());

  checkWinner();
}

// Check winner
function checkWinner(){

  let roundWon = false;

  for(let i = 0; i < winningConditions.length; i++){

    const [a,b,c] = winningConditions[i];

    if(board[a] && board[a] === board[b] && board[a] === board[c]){

      roundWon = true;

      cells[a].classList.add("winner");
      cells[b].classList.add("winner");
      cells[c].classList.add("winner");

      break;
    }
  }

  if(roundWon){

    statusText.textContent = `Player ${currentPlayer} Wins! 🎉`;
    gameActive = false;
    startRestartCountdown();
    return;
  }

  if(!board.includes("")){

    statusText.textContent = "Draw Game 🤝";
    gameActive = false;
    startRestartCountdown();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer} Turn`;
}

// Countdown restart
function startRestartCountdown(){

  let count = 3;
  timerText.textContent = `Restarting in ${count}...`;

  const interval = setInterval(() => {

    count--;

    if(count > 0){
      timerText.textContent = `Restarting in ${count}...`;
    } else {
      clearInterval(interval);
      restartGame();
    }

  }, 1000);
}

// Restart game
function restartGame(){

  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;

  statusText.textContent = "Player X Turn";
  timerText.textContent = "";

  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("x", "o", "winner");
  });
}

// Events
cells.forEach(cell => cell.addEventListener("click", handleCellClick));
restartBtn.addEventListener("click", restartGame);