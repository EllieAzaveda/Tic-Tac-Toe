class Player {
  constructor(id, token, moves, wins, winCount) {
    this.id = id;
    this.token = token;
    this.moves = [];
    this.wins = [];
    this.winCount = winCount;
  }

  saveWinsToStorage(player) {
    if(player.id === "one") {
      localStorage.setItem("player1Wins", JSON.stringify(player.winCount));
    } else {
      localStorage.setItem("player2Wins", JSON.stringify(player.winCount));
    }
  }

  retrieveWinsFromStorage() {
    var retrievedWinsP1 = JSON.parse(localStorage.getItem("player1Wins"));
    this.winCount = retrievedWinsP1;

    var retrievedWinsP2 = localStorage.getItem("player2Wins");
    this.winCount = retrievedWinsP2;
  }


}
