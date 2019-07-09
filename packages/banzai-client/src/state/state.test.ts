import { move, State } from './state';

const initState = {
  selected: {
    col: 0,
    row: 0,
    colCounts: [
      3, 4, 2
    ]
  }
};

const calc = (state: State) => ({
  canMoveLeft: () => 
})

describe("", () => {
  test("should move left", () => {
    const result = move(initState);

    expect(result).toEqual(
        { selected: {
          col: 2,
          row: 0,
        }
      });
    });
  });

  test("should wrap around left", () => {
    //
  });
  test("should move right", () => {
    //
  });

  test("should wrap around right", () => {
    //
  });
  test("should move up", () => {
    //
  });

  test("should wrap around up", () => {
    //
  });
  test("should move down", () => {
    //
  });

  test("should wrap around down", () => {
    //
  });
});
