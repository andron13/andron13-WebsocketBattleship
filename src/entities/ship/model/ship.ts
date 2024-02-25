export type Position = {
  x: number;
  y: number;
};
export type ShipType = 'small' | 'medium' | 'large' | 'huge';

export enum CellState {
  Intact = 'intact',
  Hit = 'hit',
}
export type Cell = {
  position: Position;
  state: CellState;
};

export enum ShipState {
  Intact = 'intact',
  Hit = 'hit',
  Sunk = 'sunk',
}
export class Ship {
  public cells: Cell[] = [];
  public attacksLog: Position[] = [];
  public state: ShipState;
  constructor(
    public position: Position,
    public direction: boolean,
    public length: number,
    public type: ShipType,
  ) {}

  isHit(attack: Position) {
    this.attacksLog.push(attack);
    const hit = this.cells.some((cell) => {
      if (
        Ship.positionsAreEqual(cell.position, attack) &&
        cell.state === CellState.Intact
      ) {
        cell.state = CellState.Hit;
        this.state = ShipState.Hit;
        return true;
      }
      return false;
    });

    if (this.isDead()) {
      this.state = ShipState.Sunk;
    }
    return hit;
  }

  isDead() {
    const dead = this.cells.every((e) => e.state === CellState.Hit);
    if (dead) {
      this.state = ShipState.Sunk;
    }
    return dead;
  }
  static positionsAreEqual(pos1: Position, pos2: Position): boolean {
    return pos1.x === pos2.x && pos1.y === pos2.y;
  }
}
