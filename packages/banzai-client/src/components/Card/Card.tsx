import React, { useContext } from "react";
import * as R from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { CardFragment, Label } from "../../generated/graphql";

import { BoardContext } from "../Board/Board";

interface OwnProps {
  description?: String;
  colIndex: number;
  rowIndex: number;
}

type CardProps = CardFragment & OwnProps;

const lipsum = `
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit..
  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
  erat ut turpis. Suspendisse... 
`;

const renderLabels = (labels: any[]) =>
  labels.map(l => (
    <R.Box
      key={l.id}
      flex={1}
      width="100%"
      height="4px"
      backgroundColor={l.color}
    >
      <div style={{ height: "2px" }} />
    </R.Box>
  ));

export const Card: React.FC<CardProps> = ({
  title,
  description = lipsum,
  labels,
  colIndex,
  rowIndex,
}) => {
  const { selected } = useContext(BoardContext);
  const isSelected = colIndex === selected.col && rowIndex === selected.row;

  return (
    <R.Card backgroundColor={isSelected ? "#121212" : "#333"} m={2}>
      <R.Flex>{renderLabels(labels)}</R.Flex>
      <R.Flex p={3} flexDirection="column">
        <R.Flex paddingBottom={2}>
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
            {rowIndex % 2 === 0 ? description : null}
          </R.Text>
        </R.Flex>
      </R.Flex>
    </R.Card>
  );
};
