class Player {
  constructor(id, token, moves, wins, winCount) {
    this.id = id;
    this.token = token;
    this.moves = [];
    this.wins = [];
    this.winCount = 0;
  }

  saveWinsToStorage() {
    this.wins.push(this.winCount);
    localStorage.setItem(this.id, JSON.stringify(this.winCount));
  }

  retrieveWinsFromStorage() {
    var playerParsedWins = [];

    if(localStorage.length > 0) {
      var parsedWins = localStorage.getItem(this.id);
      playerParsedWins = JSON.parse(parsedWins);
      game.instantiateStorage(playerParsedWins);
    }
  }


}
