class Game {
  constructor(currentTurn) {
    this.player1 = new Player("one", "🏖",[], 0);
    this.player2 = new Player("two", "🏝",[], 0);
    this.isCompleted = false;
    this.isDraw = false;
    this.isWon = false;
    this.wins = [];
    this.currentTurn = this.player1;
    this.turns = 0;
    this.board = [];
  }

  updateTurn() {
    if(this.turns % 2 === 0) {
      this.currentTurn = this.player1;
      return;
    } else {
      this.currentTurn = this.player2;
    }
  }

  updateBoard() {
    this.board = [];

    for (var i = 0; i < allBoxes.length; i++) {
      this.board.push(allBoxes[i].innerText);
    }
  }

  saveMove() {
    this.player1.moves = [];
    this.player2.moves = [];

    for (var i = 0; i < allBoxes.length; i++) {
      if(allBoxes[i].innerText === "🏖") {
        this.player1.moves.push(i);
      } else if (allBoxes[i].innerText === "🏝") {
        this.player2.moves.push(i);
      }
    }
  }

  determineWin() {
    this.winner = false;

    var winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (var i = 0; i < winningCombos.length; i++) {
      if(this.player1.moves.includes(winningCombos[i][0]) && this.player1.moves.includes(winningCombos[i][1]) && this.player1.moves.includes(winningCombos[i][2])) {
        console.log("WIN");
        this.isWon = true;
        return;
      }
    }
  }

  determineDraw() {
    if(allBoxes === this.isTaken) {
      howStatus.innerText += `It's a draw!`;
    }
  }

  // reset() {
  //   this.turns = 0;
  //   allBoxes.innerText = "";
  // }

  //
  // trackWins() {
  //
  // }
// }

}
