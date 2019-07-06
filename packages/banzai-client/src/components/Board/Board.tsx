import React from "react";

import { BoardsQuery } from "../../generated/graphql";
import { Column } from "../Column/Column";

interface BoardProps {
  data: BoardsQuery;
}

export const Board: React.FC<BoardProps> = ({ data }) => {
  const board = data.boards[0];

  return (
    <div className="c-board">
      <h2>{board.title}</h2>
      <ol className="c-board__columns">
        {board.columns.map(c => (
          <li key={c.id}>
            <Column {...c} />
          </li>
        ))}
      </ol>
    </div>
  );
};
