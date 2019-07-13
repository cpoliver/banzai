import React, { createContext, useState } from "react";
import useKey from "@rooks/use-key";
import * as R from "rebass";

import { BoardQuery } from "../../generated/graphql";
import { Column } from "../Column/Column";
import { moveSelection } from "../../state/state";

interface BoardProps {
  data: BoardQuery;
}

const defaultBoard = {
  title: "",
  columns: [],
};

const defaultSelectedCol = 0;
const defaultSelectedRow = 0;

interface Position {
  setSelected: (selected: number) => void;
  selected: () => number;
  count: () => number;
}

export const BoardContext = createContext({
  selected: { col: defaultSelectedCol, row: defaultSelectedRow },
});

export const Board: React.FC<BoardProps> = ({ data: { board } }) => {
  const [selectedRow, setSelectedRow] = useState(0);
  const [selectedCol, setSelectedCol] = useState(0);

  const state = {
    board: board || defaultBoard,
    selected: {
      col: selectedCol,
      row: selectedRow,
    },
  };

  useKey(["h"], () => {
    const { col, row } = moveSelection(state, "left");
    setSelectedCol(col);
    setSelectedRow(row);
  });

  useKey(["j"], () => {
    const { col, row } = moveSelection(state, "down");
    setSelectedCol(col);
    setSelectedRow(row);
  });

  useKey(["k"], () => {
    const { col, row } = moveSelection(state, "up");
    setSelectedCol(col);
    setSelectedRow(row);
  });

  useKey(["l"], () => {
    const { col, row } = moveSelection(state, "right");
    setSelectedCol(col);
    setSelectedRow(row);
  });

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
