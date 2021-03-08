// QUERY SELECTORS
// var box0 = document.getElementById("box0");
// var box1 = document.getElementById("box1");
// var box2 = document.getElementById("box2");
// var box3 = document.getElementById("box3");
// var box4 = document.getElementById("box4");
// var box5 = document.getElementById("box5");
// var box6 = document.getElementById("box6");
// var box7 = document.getElementById("box7");
// var box8 = document.getElementById("box8");
var allBoxes = document.querySelectorAll(".box");
var showStatus = document.getElementById("showStatus");
var gameBoard = document.getElementById("gameBoard");
var gameBoardWrapper = document.getElementById("gameBoardWrapper");
var player1Wins = document.getElementById("playerOneWins");
var player2Wins = document.getElementById("playerTwoWins");


// GLOBAL VARIABLE
var game = new Game();

// EVENT LISTENERS
// window.addEventListener("load", retrieveWinsFromStorage);

gameBoard.addEventListener("click", updateStatus);

allBoxes.forEach(function(box) {
  box.addEventListener("click", markBox)
});

gameBoardWrapper.addEventListener("click", updateWinner);

// FUNCTIONS
function markBox(e) {
  var gridBoxes = Array.from(allBoxes);
  var i = gridBoxes.indexOf(e.target);

    if(game.currentTurn === game.player1 && gridBoxes[i].innerText === "") {
      game.turns++;
      gridBoxes[i].innerText += `${game.player1.token}`;
    } else if(game.currentTurn === game.player2 && gridBoxes[i].innerText === "") {
      game.turns++;
      gridBoxes[i].innerText += `${game.player2.token}`;
    }
  game.updateTurn();
  game.updateBoard();
  game.saveMove();
  game.determineWin();
  game.determineDraw();
  updateStatus();
}

function updateStatus() {
  if(game.currentTurn === game.player1 && !game.isWon) {
    showStatus.innerText = `It's ${game.player1.token}'s turn!`;
  } else if (game.currentTurn === game.player2 && !game.isWon){
    showStatus.innerText = `It's ${game.player2.token}'s turn!`;
  }
}

function updateWinner() {
  if (game.winner === game.player1 && game.isWon) {
    showStatus.innerText = `${game.player1.token} is the winner!`;
    updateTotalWins();
    game.endGame();
  } else if (game.winner === game.player2 && game.isWon) {
    showStatus.innerText = `${game.player2.token} is the winner!`;
    updateTotalWins();
    game.endGame();
  } else if(game.isDraw) {
    showStatus.innerText = `It's a draw!`;
    game.endGame();
  }
}

function updateTotalWins() {
  if (game.winner === game.player1 && game.player1.winCount != 1) {
    player1Wins.innerText = `${game.player1.winCount} WINS`;
  } else {
    player1Wins.innerText = `1 WIN`;
  }
  if (game.winner === game.player2 && game.player2.winCount != 1) {
    player2Wins.innerText = `${game.player2.winCount} WINS`;
  } else {
    player2Wins.innerText = `1 WIN`;
  }
}
