import { cond, equals, evolve } from "ramda";

interface State {
  selected: {
    col: number;
    row: number;
  };
  last: {
    row: number;
    column: number;
  };
}

export const initState = {
  selected: {
    col: 0,
    row: 0,
  },
  last: {
    col: 0,
    row: 0,
  },
};

const DIRECTION = {
  LEFT: "h",
  DOWN: "j",
  UP: "k",
  RIGHT: "l",
};

export const move = (state: State) =>
  evolve({
    selected: {
      col: cond([
        [equals(DIRECTION.LEFT), () => Math.max(0, state.selected.col - 1)],
        [
          equals(DIRECTION.DOWN),
          () => Math.max(state.last.row, state.selected.row + 1),
        ],
        [equals(DIRECTION.UP), () => Math.max(0, state.selected.col - 1)],
        [equals(DIRECTION.RIGHT), () => Math.max(0, state.selected.col - 1)],
      ]),
    },
  })(state);
