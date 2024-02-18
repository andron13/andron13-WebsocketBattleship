export class User {
  id: number;
  name: string;
  password: string;
  wins: number;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
    this.wins = 0;
    this.id = User.generateID();
  }

  static generateID() {
    return Date.now();
  }

  setWin() {
    this.wins++;
  }
}
