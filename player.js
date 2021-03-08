class Player {
  constructor(id, token, moves, wins) {
    this.id = id;
    this.token = token;
    this.moves = [];
    this.wins = 0;
  }

  saveWinsToStorage(winner) {
    this.wins.push(winner);
    localStorage.setItem("wins", JSON.stringify(wins));
  }

  retrieveWinsFromStorage() {
    var storage = window.localStorage;
    localStorage.getItem("wins", JSON.parse(wins));
  }

}
