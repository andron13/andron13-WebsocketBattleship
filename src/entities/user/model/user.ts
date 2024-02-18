export class User {
  id: number;
  name: string;
  password: string;
  winCount: number;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
    this.winCount = 0;
    this.id = User.generateID();
  }

  static generateID() {
    return Date.now();
  }

  setWin() {
    this.winCount++;
  }
}
