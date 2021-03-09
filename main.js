// QUERY SELECTORS

var allBoxes = document.querySelectorAll(".box");
var showStatus = document.getElementById("showStatus");
var gameBoard = document.getElementById("gameBoard");
var gameBoardWrapper = document.getElementById("gameBoardWrapper");
var player1Wins = document.getElementById("playerOneWins");
var player2Wins = document.getElementById("playerTwoWins");


// GLOBAL VARIABLE
var game = new Game();
//On load: display everything & display turns when game starts
//Users take turns adding token to board & status should updateTurn
//When winner: stop adding tokens to board, display winner status
//... Update winCount, display new winCount in ASIDES
//reset bord after time
//Save winCount to localStorage so it saves after refresh


// EVENT LISTENERS
window.addEventListener("load", instantiateStorage);

gameBoard.addEventListener("click", updateStatus);

allBoxes.forEach(function(box) {
  box.addEventListener("click", markBox)
});

gameBoardWrapper.addEventListener("click", updateWinner);

// FUNCTIONS

//Add helper function from shit in markBox function for page load
//Whatever we want to happen right as the page loads

// function refreshPageDisplay() {
//   game.updateTurn();
//   game.updateBoard();
//   game.saveMove();
//   game.determineWin();
//   game.determineDraw();
//   updateStatus();
//   updateTotalWins();
// }

function instantiateStorage(player1ParsedWins, player2ParsedWins) {
      // var storage = window.localStorage;
  // var player1 = new Player(player1ParsedWins.id, player1ParsedWins.token, player1ParsedWins.moves, player1ParsedWins.wins, player1ParsedWins.winCount);
  // game.players.push(player1);
  // var player2 = new Player(player2ParsedWins.id, player2ParsedWins.token, player2ParsedWins.moves, player2ParsedWins.wins, player2ParsedWins.winCount);
  // game.players.push(player2);
}

function markBox(e) {
  var gridBoxes = Array.from(allBoxes);
  var i = gridBoxes.indexOf(e.target);

    if(game.currentTurn === game.player1 && gridBoxes[i].innerText === "" && !game.isWon) {
      game.turns++;
      gridBoxes[i].innerText += `${game.player1.token}`;
    } else if(game.currentTurn === game.player2 && gridBoxes[i].innerText === "" && !game.isWon) {
      game.turns++;
      gridBoxes[i].innerText += `${game.player2.token}`;
    }
  checkStatus();
}

function updateStatus() {
  if(game.currentTurn === game.player1 && !game.isWon) {
    showStatus.innerText = `It's ${game.player1.token}'s turn!`;
  } else if (game.currentTurn === game.player2 && !game.isWon){
    console.log("update status!");
    showStatus.innerText = `It's ${game.player2.token}'s turn!`;
  }
}

function updateWinner() {
  if (game.winner === game.player1 && game.isWon) {
    showStatus.innerText = `${game.player1.token} is the winner!`;
    game.endGame();
    game.resetBoard();
  } else if (game.winner === game.player2 && game.isWon) {
    showStatus.innerText = `${game.player2.token} is the winner!`;
    game.endGame();
    game.resetBoard();
  } else if(game.isDraw) {
    showStatus.innerText = `It's a draw!`;
    game.endGame();
    game.resetBoard();
  }
}

function updateTotalWins() {
  if (game.player1.winCount != 1) {
    player1Wins.innerText = `${game.player1.winCount} WINS`;
  } else {
    player1Wins.innerText = `1 WIN`;
  }
  if (game.player2.winCount != 1) {
    player2Wins.innerText = `${game.player2.winCount} WINS`;
  } else {
    player2Wins.innerText = `1 WIN`;
  }
  //Call to retrieveWinsFromStorage
}

// HELPER FUNCTIONS

function refreshPageDisplay() {
  updateTotalWins();
}

function checkStatus() {
  game.updateTurn();
  game.updateBoard();
  game.saveMove();
  game.determineWin();
  game.determineDraw();
  updateStatus();
}
