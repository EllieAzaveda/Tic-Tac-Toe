class Player {
  constructor(id, token, moves, wins, winCount) {
    this.id = id;
    this.token = token;
    this.moves = [];
    this.wins = [];
    this.winCount = 0;
  }

  saveWinsToStorage() {
    localStorage.setItem("player1Wins", JSON.stringify(game.player1));
    localStorage.setItem("player2Wins", JSON.stringify(game.player2));
  }

  retrieveWinsFromStorage() {
    if(localStorage.length > 0) {
      var retrievedPlayer1 = localStorage.getItem("player1Wins");
      var player1ParsedWins = JSON.parse(retrievedPlayer1);
      var retrievedPlayer2 = localStorage.getItem("player2Wins");
      var player2ParsedWins = JSON.parse(retrievedPlayer2);
      instantiateStorage(player1ParsedWins);
      instantiateStorage(player2ParsedWins);
    }
  }


}
