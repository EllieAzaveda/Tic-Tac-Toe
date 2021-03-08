class Game {
  constructor(isDraw, currentTurn, winner) {
    this.player1 = new Player("one", "🏖",[], [], 0);
    this.player2 = new Player("two", "🏝",[], [], 0);
    this.gameOver = false;
    this.isDraw = isDraw;
    this.isWon = false;
    this.winner = winner;
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
        console.log("PLAYER 1 WINS");
        this.winner = this.player1;
        this.player1.winCount++;
        this.isWon = true;
        this.player1.saveWinsToStorage();
        return;
      } else if(this.player2.moves.includes(winningCombos[i][0]) && this.player2.moves.includes(winningCombos[i][1]) && this.player2.moves.includes(winningCombos[i][2])) {
        console.log("PLAYER 2 WINS");
        this.winner = this.player2;
        this.player2.winCount++;
        this.isWon = true;
        this.player2.saveWinsToStorage();
        return;
      }
    }
  }

  // updateWinCount() {
  //   if(this.winner === this.player1) {
  //     this.player1.winCount++;
  //   } else if (this.winner === this.player1) {
  //     this.player2.winCount++;
  //   }
  // }

  determineDraw() {
      if(this.turns === 9 && !this.isWon) {
        console.log("It's a draw!")
        this.isDraw = true;
      }
  }

  endGame() {
    if(this.turns === 9 || this.isDraw || this.isWon) {
      this.gameOver = true;
    }
  }

  // reset() {
  //   this.turns = 0;
  //   allBoxes.innerText = "";
  //   this.isWon = false;
  // }

  //
  // trackWins() {
  //
  // }
// }

}
