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

// GLOBAL VARIABLE
var game = new Game();

// EVENT LISTENERS

gameBoard.addEventListener("click", updateStatus);

allBoxes.forEach(function(box) {
  box.addEventListener("click", markBox)
});

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
  gridBoxes[i].isTaken = true;

  game.updateTurn();
  updateStatus();
}

function updateStatus() {
  showStatus.innerText = "";

  if(game.currentTurn === game.player1) {
    showStatus.innerText += `It's ${game.player1.token}'s turn!`;
  } else {
    showStatus.innerText += `It's ${game.player2.token}'s turn!`;
  }
}

// function checkWinner() {
//
//   }
// }
