import { cond, equals, T } from "ramda";

interface AppState {
  board: BoardState;
  selected: SelectedState;
}

interface Column {
  title: string;
  cards: { length: number };
}

interface BoardState {
  columns: Column[];
}

interface SelectedState {
  col: number;
  row: number;
}

interface MaxState {
  col: number;
  row: (col: number) => number;
}

export interface MoveInfo {
  selected: SelectedState;
  max: MaxState;
}

type Direction = "left" | "up" | "down" | "right";

const moveLeft = ({ selected, max }: MoveInfo): SelectedState => {
  const newCol = selected.col - 1;
  const col = newCol < 0 ? max.col : newCol;
  const row = Math.min(max.row(col), selected.row);

  return {
    row,
    col,
  };
};

const moveDown = ({ selected, max }: MoveInfo): SelectedState => {
  const newRow = selected.row + 1;
  const row = newRow > max.row(selected.col) ? 0 : newRow;

  return {
    ...selected,
    row,
  };
};

const moveUp = ({ selected, max }: MoveInfo): SelectedState => {
  const newRow = selected.row - 1;
  const row = newRow < 0 ? max.row(selected.col) : newRow;

  return {
    ...selected,
    row,
  };
};

const moveRight = ({ selected, max }: MoveInfo): SelectedState => {
  const newCol = selected.col + 1;
  const col = newCol > max.col ? 0 : newCol;
  const row = Math.min(max.row(col), selected.row);

  return {
    row,
    col,
  };
};

export const move = ({ selected, board }: AppState, direction: Direction): SelectedState => {
  if (!board) {
    return { col: 0, row: 0 };
  }

  const moveState = {
    selected,
    max: {
      col: board.columns.length - 1,
      row: (col: number) => board.columns[col].cards.length - 1,
    },
  };

  return cond([
    [equals("left"), () => moveLeft(moveState)],
    [equals("down"), () => moveDown(moveState)],
    [equals("up"), () => moveUp(moveState)],
    [equals("right"), () => moveRight(moveState)],
    [T, () => {}]
  ])(direction);
};
