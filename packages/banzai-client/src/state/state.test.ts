import { assocPath } from "ramda";

import { move } from "./state";

const board = {
  columns: [
    { title: "TODO", cards: { length: 8 } },
    { title: "DOING", cards: { length: 4 } },
    { title: "BLOCKED", cards: { length: 1 } },
    { title: "DONE", cards: { length: 10 } },
  ],
};

const baseState = {
  board,
  selected: {
    col: 0,
    row: 7,
  },
};

describe("move", () => {
  test("should move left", () => {
    const state = assocPath(["selected"], { col: 1, row: 2 }, baseState);
    const result = move(state, "left");

    expect(result).toEqual({
      col: 0,
      row: 2,
    });
  });

  test("should wrap around left", () => {
    const result = move(baseState, "left");

    expect(result).toEqual({
      col: 3,
      row: 7,
    });
  });

  test("should move right", () => {
    const result = move(baseState, "right");

    expect(result).toEqual({
      col: 1,
      row: 3,
    });
  });

  test("should wrap around right", () => {
    const state = assocPath(["selected", "col"], 3, baseState);
    const result = move(state, "right");

    expect(result).toEqual({
      col: 0,
      row: 7,
    });
  });

  test("should move up", () => {
    const result = move(baseState, "up");

    expect(result).toEqual({
      col: 0,
      row: 6,
    });
  });

  test("should wrap around up", () => {
    const state = assocPath(["selected", "row"], 0, baseState);
    const result = move(state, "up");

    expect(result).toEqual({
      col: 0,
      row: 7,
    });
  });

  test("should move down", () => {
    const state = assocPath(["selected", "row"], 4, baseState);
    const result = move(state, "down");

    expect(result).toEqual({
      col: 0,
      row: 5,
    });
  });

  test("should wrap around down", () => {
    const state = assocPath(["selected", "row"], 7, baseState);
    const result = move(state, "down");

    expect(result).toEqual({
      col: 0,
      row: 0,
    });
  });
});
