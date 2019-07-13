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

const moveSelectionLeft = ({ selected, max }: MoveInfo): SelectedState => {
  const newCol = selected.col - 1;
  const col = newCol < 0 ? max.col : newCol;
  const row = Math.min(max.row(col), selected.row);

  return {
    row,
    col,
  };
};

const moveSelectionDown = ({ selected, max }: MoveInfo): SelectedState => {
  const newRow = selected.row + 1;
  const row = newRow > max.row(selected.col) ? 0 : newRow;

  return {
    ...selected,
    row,
  };
};

const moveSelectionUp = ({ selected, max }: MoveInfo): SelectedState => {
  const newRow = selected.row - 1;
  const row = newRow < 0 ? max.row(selected.col) : newRow;

  return {
    ...selected,
    row,
  };
};

const moveSelectionRight = ({ selected, max }: MoveInfo): SelectedState => {
  const newCol = selected.col + 1;
  const col = newCol > max.col ? 0 : newCol;
  const row = Math.min(max.row(col), selected.row);

  return {
    row,
    col,
  };
};

export const moveSelection = (
  { selected, board }: AppState,
  direction: Direction,
): SelectedState => {
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
    [equals("left"), () => moveSelectionLeft(moveState)],
    [equals("down"), () => moveSelectionDown(moveState)],
    [equals("up"), () => moveSelectionUp(moveState)],
    [equals("right"), () => moveSelectionRight(moveState)],
    [T, () => {}],
  ])(direction);
};
