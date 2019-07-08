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

export const BoardContext = createContext({
  selected: { col: defaultSelectedCol, row: defaultSelectedRow },
});

export const Board: React.FC<BoardProps> = ({ data: { board } }) => {
  const [selectedRow, setSelectedRow] = useState(0);
  const [selectedCol, setSelectedCol] = useState(0);

  const colCount = () => pathOr(0, ["columns", "length"], board);

  const rowCount = () =>
    pathOr(0, ["columns", selectedCol, "cards", "length"], board);

  useKey(["h"], () => {
    setSelectedCol(Math.max(0, selectedCol - 1));
    const row = Math.min(rowCount() - 1, selectedRow);
    console.log(`set row ${row}, ${rowCount()}`);
    setSelectedRow(row);
  });

  useKey(["j"], () => {
    setSelectedRow(Math.min(selectedRow + 1, rowCount() - 1));
  });

  useKey(["k"], () => {
    setSelectedRow(Math.max(selectedRow - 1, 0));
  });

  useKey(["l"], () => {
    setSelectedCol(Math.min(selectedCol + 1, colCount()));
    const row = Math.min(rowCount() - 1, selectedRow);
    console.log(`set row ${row}, ${rowCount()}`);
    setSelectedRow(Math.min(rowCount() - 1, selectedRow));
  });

  return !board ? null : (
    <BoardContext.Provider
      value={{ selected: { col: selectedCol, row: selectedRow } }}
    >
      <R.Flex flexDirection="column">
        <R.Heading>
          {board.title} | x: {selectedCol} / y: {selectedRow}
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
