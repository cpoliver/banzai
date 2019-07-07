import React, { useCallback } from "react";
import { Droppable } from "react-beautiful-dnd";
import * as R from "rebass";

import { Card } from "../Card/Card";

interface ColumnProps {
  id: String;
  title: String;
  cards: any[];
  index: number;
}

const ItemTypes = {
  CARD: "card",
};

export const Column: React.FC<ColumnProps> = ({ title, cards, index }) => (
  <R.Flex flexDirection="column" flex={1} backgroundColor="#1A1A1A" m={2} p={2}>
    <R.Heading fontSize={2} padding={2} textAlign="center">
      {title} ({cards.length})
    </R.Heading>
    <R.Flex flexDirection="column">
      <Droppable droppableId={`droppable-${index}`} type="CARD">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              backgroundColor: snapshot.isDraggingOver ? "tomato" : "grey",
            }}
            {...provided.droppableProps}
          >
            {cards.map((c, i) => (
              <Card {...c} key={c.id} index={i} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </R.Flex>
  </R.Flex>
);
