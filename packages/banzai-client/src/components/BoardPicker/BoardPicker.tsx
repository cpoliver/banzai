import React from "react";

import { BoardsQuery } from "../../generated/graphql";

interface BoardPickerProps {
  data: BoardsQuery;
}

export const BoardPicker: React.FC<BoardPickerProps> = ({
  data: { boards = [] },
}) => (
  <div className="c-board-picker">
    <h1>Board Picker</h1>
    {boards.map(board => (
      <ol key={board.id}>
        <div className="c-board-picker__board">
          <h2>{board.title}</h2>
        </div>
      </ol>
    ))}
  </div>
);
