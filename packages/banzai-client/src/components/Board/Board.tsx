import React from "react";

import { BoardsQuery } from "../../generated/graphql";

interface CardProps {
  title: String;
}

const Card: React.FC<CardProps> = ({ title }) => (
  <div className="c-card">{title}</div>
);

interface ColumnProps {
  title: String;
  cards: any[];
}

const Column: React.FC<ColumnProps> = ({ title, cards = [] }) => (
  <div className="c-column">
    <h3>{title}</h3>
    <ol className="c-board__columns">
      {cards.map(c => (
        <li>
          <Card {...c} />
        </li>
      ))}
    </ol>
  </div>
);

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
          <li>
            <Column {...c} />
          </li>
        ))}
      </ol>
    </div>
  );
};
