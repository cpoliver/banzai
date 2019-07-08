import React from "react";
import * as R from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { BoardQuery } from "../../generated/graphql";

interface BoardBarProps {
  data: BoardQuery;
}

export const BoardBar: React.FC<BoardBarProps> = ({ data: { board } }) =>
  board ? (
    <R.Flex backgroundColor="#333" p={2} marginBottom={2}>
      <R.Box flex={1}>
        <FontAwesomeIcon size="lg" color="#8A8A8A" icon={faStar} />
        <R.Text fontSize={2}>{board.title}</R.Text>
      </R.Box>
    </R.Flex>
  ) : null;
