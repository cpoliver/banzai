import React from "react";
import * as R from "rebass";

import { BoardQuery } from "../../generated/graphql";
import { Column } from "../Column/Column";

interface BoardProps {
  data: BoardQuery;
}

export const Board: React.FC<BoardProps> = ({ data: { board } }) =>
  board ? (
    <R.Flex flexDirection="column">
      <R.Heading>{board.title}</R.Heading>
      <R.Flex>
        {board.columns.map(c => (
          <Column {...c} key={c.id} />
        ))}
      </R.Flex>
    </R.Flex>
  ) : null;
