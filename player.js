class Player {
  constructor(id, token, moves, wins, winCount) {
    this.id = id;
    this.token = token;
    this.moves = [];
    this.wins = [];
    this.winCount = 0;
  }

  saveWinsToStorage(player) {
    if(player.id === "one") {
      localStorage.setItem("player1Wins", JSON.stringify(player.winCount));
    } else {
      localStorage.setItem("player2Wins", JSON.stringify(player.winCount));
    }
  }

  retrieveP1WinsFromStorage() {
    var retrievedWinsP1 = JSON.parse(localStorage.getItem("player1Wins"));
    this.winCount = retrievedWinsP1;
  }

  retrieveP2WinsFromStorage() {
    var retrievedWinsP2 = JSON.parse(localStorage.getItem("player2Wins"));
    this.winCount = retrievedWinsP2;
  }


}
