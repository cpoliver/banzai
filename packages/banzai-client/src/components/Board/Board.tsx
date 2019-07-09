import React, { createContext, useState } from "react";
import useKey from "@rooks/use-key";
import { pathOr } from "ramda";
import * as R from "rebass";

import { BoardQuery } from "../../generated/graphql";
import { Column } from "../Column/Column";

interface BoardProps {
  data: BoardQuery;
}

const defaultSelectedCol = 0;
const defaultSelectedRow = 0;

interface Position {
  setSelected: (selected: number) => void;
  selected: () => number;
  count: () => number;
}

const move = (col: Position, row: Position) => ({
  left: () => {
    col.setSelected(Math.max(0, col.selected() - 1));

    const r = row.count();
    console.log(row.selected());
    row.setSelected(Math.min(r - 1, row.selected()));
  },
  down: () => {
    row.setSelected(Math.min(row.selected() + 1, row.count() - 1));
  },
  up: () => {
    row.setSelected(Math.max(row.selected() - 1, 0));
  },
  right: () => {
    col.setSelected(Math.min(col.selected() + 1, col.count()));
    row.setSelected(Math.min(row.count() - 1, row.selected()));
  },
});

export const BoardContext = createContext({
  selected: { col: defaultSelectedCol, row: defaultSelectedRow },
});

export const Board: React.FC<BoardProps> = ({ data: { board } }) => {
  const [selectedRow, setSelectedRow] = useState(0);
  const [selectedCol, setSelectedCol] = useState(0);

  const colCount = pathOr(0, ["columns", "length"]);
  const rowCount = pathOr(0, ["columns", selectedCol, "cards", "length"]);

  const col = {
    setSelected: setSelectedCol,
    selected: () => selectedCol,
    count: () => colCount(board),
  };
  const row = {
    setSelected: setSelectedRow,
    selected: () => selectedRow,
    count: () => (board ? board.columns[selectedRow].cards.length : 0),
  };

  const { left, down, up, right } = move(col, row);

  useKey(["h"], left);
  useKey(["j"], down);
  useKey(["k"], up);
  useKey(["l"], right);

  if (board === null) {
    return null;
  }

  return (
    <BoardContext.Provider
      value={{ selected: { col: selectedCol, row: selectedRow } }}
    >
      <R.Flex flexDirection="column">
        <R.Heading textAlign="center">
          x: {selectedCol} / y: {selectedRow}
        </R.Heading>
        <R.Flex>
          {board.columns.map((c, i) => (
            <Column {...c} key={c.id} index={i} />
          ))}
        </R.Flex>
      </R.Flex>
    </BoardContext.Provider>
  );
};
