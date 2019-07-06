import React from "react";

import { BoardsQuery } from "../../generated/graphql";

// interface CardProps {
//   title: String;
// }

// const Card: React.FC<CardProps> = props => <div className="c-card">card</div>;

// interface ColumnProps {
//   title: String;
//   cards: Card[];
// }

// const Column: React.FC = props => (
//   <div className="c-column">
//     <h3>{props.title}</h3>
//     <ol className="c-board__columns">
//       {props.cards.map(c => (
//         <li>
//           <Card {...c} />
//         </li>
//       ))}
//     </ol>
//   </div>
// );

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
            <pre>{JSON.stringify(c, null, 2)}</pre>
            {/* <Column {...c} /> */}
          </li>
        ))}
      </ol>
    </div>
  );
};
