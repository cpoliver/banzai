import { assocPath } from "ramda";

import { boards } from "../../../banzai-server/src/__mocks__/boards.mock";
import { moveSelection } from "./state";

const baseState = {
  board: boards.banzai,
  selected: {
    col: 0,
    row: 4,
  },
};

describe("moveSelection", () => {
  test("should move the selected card one left", () => {
    const state = assocPath(["selected"], { col: 2, row: 1 }, baseState);
    const result = moveSelection(state, "left");

    expect(result).toEqual({
      col: 1,
      row: 0,
    });
  });

  test("should move the selected card one left, wrap around left", () => {
    const state = assocPath(["selected"], { col: 0, row: 2 }, baseState);
    const result = moveSelection(state, "left");

    expect(result).toEqual({
      col: 3,
      row: 2,
    });
  });

  test("should move right", () => {
    const result = moveSelection(baseState, "right");

    expect(result).toEqual({
      col: 1,
      row: 0,
    });
  });

  test("should wrap around right", () => {
    const state = assocPath(["selected"], { col: 3, row: 2 }, baseState);
    const result = moveSelection(state, "right");

    expect(result).toEqual({
      col: 0,
      row: 2,
    });
  });

  test("should move up", () => {
    const result = moveSelection(baseState, "up");

    expect(result).toEqual({
      col: 0,
      row: 3,
    });
  });

  test("should wrap around up", () => {
    const state = assocPath(["selected", "row"], 0, baseState);
    const result = moveSelection(state, "up");

    expect(result).toEqual({
      col: 0,
      row: 4,
    });
  });

  test("should move down", () => {
    const state = assocPath(["selected", "row"], 3, baseState);
    const result = moveSelection(state, "down");

    expect(result).toEqual({
      col: 0,
      row: 4,
    });
  });

  test("should wrap around down", () => {
    const state = assocPath(["selected", "row"], 5, baseState);
    const result = moveSelection(state, "down");

    expect(result).toEqual({
      col: 0,
      row: 0,
    });
  });
});
