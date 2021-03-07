class Game {
  constructor(currentTurn) {
    this.player1 = new Player("one", "🏖",[]);
    this.player2 = new Player("two", "🏝",[]);
    this.isCompleted = false;
    this.isDraw = false;
    this.wins = [];
    this.currentTurn = this.player1;
    this.turns = 0;
    this.board = [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ];
  }

  updateTurn() {
    if(this.turns % 2 === 0) {
      this.currentTurn = this.player1;
      return;
    } else {
      this.currentTurn = this.player2;
    }
  }

  // determineWin() {
  //   for(var i = 0; i < allBoxes.length; i++) {
  //     var winningOptions = [
  //       [0, 1, 2],
  //       [3, 4, 5],
  //       [6, 7, 8],
  //       [0, 3, 6],
  //       [1, 4, 7],
  //       [2, 5, 8],
  //       [0, 4, 8],
  //       [2, 4, 6]
  //     ];
  //
  // }
  //
  // determineDraw() {
  //   if(allBoxes === this.isTaken) {
  //
  //   }
  // }
  //
  reset() {
    this.turns = 0;
  }
  //
  // trackWins() {
  //
  // }
}

// I want these methods to only deal with the data model
// (main for the DOM)
