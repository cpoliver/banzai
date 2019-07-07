import React, { useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import * as R from "rebass";

import { BoardQuery } from "../../generated/graphql";
import { Column } from "../Column/Column";

interface BoardProps {
  data: BoardQuery;
}

export const Board: React.FC<BoardProps> = ({ data: { board } }) => {
  const onDragEnd = useCallback((...args) => {
    console.log(args);
  }, []);

  return board ? (
    <R.Flex flexDirection="column">
      <R.Heading>{board.title}</R.Heading>
      <R.Flex>
        <DragDropContext onDragEnd={onDragEnd}>
          {board.columns.map((c, i) => (
            <Column {...c} key={c.id} index={i} />
          ))}
        </DragDropContext>
      </R.Flex>
    </R.Flex>
  ) : null;
};
