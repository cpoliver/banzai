import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { cond, propEq, T } from "ramda";
import * as R from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  id: String;
  title: String;
  description?: String;
  index: number;
}

const lipsum = `
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit..
  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
  erat ut turpis. Suspendisse... 
`;

const bgr = cond([
  [propEq("isDraggingOver", true), () => "#f00"],
  [propEq("draggingFromThisWith", true), () => "#0f0"],
  [T, () => "#333"],
]);

export const Card: React.FC<CardProps> = ({
  id,
  title,
  description = lipsum,
  index,
}) => (
  <Draggable draggableId={`draggable-${index}`} index={index}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <R.Card backgroundColor={bgr(snapshot)} borderRadius={4} p={3} m={2}>
          <R.Flex paddingTop={1} paddingBottom={2}>
            <R.Text fontSize={1} flex={1}>
              {title}
            </R.Text>
            <R.Box>
              <FontAwesomeIcon size="xs" color="#8A8A8A" icon={faEllipsisH} />
            </R.Box>
          </R.Flex>
          <R.Flex>
            <R.Text fontSize={0} color="#8A8A8A">
              {description}
            </R.Text>
          </R.Flex>
        </R.Card>
      </div>
    )}
  </Draggable>
);
