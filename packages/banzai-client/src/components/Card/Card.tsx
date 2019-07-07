import React, { useContext } from "react";
import * as R from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import { BoardContext } from "../Board/Board";

interface CardProps {
  id: String;
  title: String;
  description?: String;
  isSelected?: boolean;
  colIndex: number;
  rowIndex: number;
}

const lipsum = `
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit..
  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
  erat ut turpis. Suspendisse... 
`;

export const Card: React.FC<CardProps> = ({
  title,
  description = lipsum,
  colIndex,
  rowIndex,
}) => {
  const { selected } = useContext(BoardContext);
  const isSelected = colIndex === selected.col && rowIndex === selected.row;

  return (
    <R.Card backgroundColor={isSelected ? "#121212" : "#333"} p={3} m={2}>
      <R.Flex paddingTop={1} paddingBottom={2}>
        <R.Text
          fontSize={1}
          flex={1}
          fontFamily="Oxygen"
          style={{ textTransform: "capitalize" }}
        >
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
  );
};
