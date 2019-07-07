import React from "react";

import { BoardQuery } from "../../generated/graphql";
import { Column } from "../Column/Column";

interface BoardProps {
  data: BoardQuery;
}

export const Board: React.FC<BoardProps> = ({ data: { board } }) =>
  board ? (
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
  ) : null;
