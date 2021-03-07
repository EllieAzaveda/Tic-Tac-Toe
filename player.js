class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
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
