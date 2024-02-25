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
    public firstCellPosition: Position,
    public direction: boolean,
    public length: number,
    public type: ShipType,
  ) {
    this.state = ShipState.Intact;
    this.shipsInit(length, firstCellPosition, direction);
  }

  shipsInit(length: number, firstCellPosition: Position, direction: boolean) {
    const { x, y } = firstCellPosition;
    for (let i = 0; i < length; i++) {
      const cell: Cell = {
        position: {
          x: direction ? x : x + i,
          y: direction ? y + i : y,
        },
        state: CellState.Intact,
      };
      this.cells.push(cell);
    }
  }

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
  toString(): string {
    return (
      `Type: ${this.type}, First Cell: (${this.firstCellPosition.x}, ${this.firstCellPosition.y}), ` +
      `Direction: ${this.direction ? 'Vertical' : 'Horizontal'}, Length: ${this.length}, ` +
      `State: ${this.state}, Cells: ${this.cells.length}`
    );
  }
}
