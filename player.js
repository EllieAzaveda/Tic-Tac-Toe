class Player {
  constructor(id, token, moves, wins, winCount) {
    this.id = id;
    this.token = token;
    this.moves = [];
    this.wins = [];
    this.winCount = 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(this.id, JSON.stringify(this.winCount));
  }

  retrieveWinsFromStorage() {
    var storage = window.localStorage;
    localStorage.getItem(this.id, JSON.parse(this.winCount));
  }

}
