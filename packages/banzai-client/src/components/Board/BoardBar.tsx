import React from "react";
import * as R from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowsAlt } from "@fortawesome/free-solid-svg-icons";

import { BoardQuery } from "../../generated/graphql";

interface BoardBarProps {
  data: BoardQuery;
}

export const BoardBar: React.FC<BoardBarProps> = ({ data: { board } }) =>
  board ? (
    <R.Flex
      backgroundColor="#151515"
      p={2}
      marginBottom={2}
      alignItems="center"
    >
      <R.Box paddingLeft={2} paddingRight={3}>
        <FontAwesomeIcon size="sm" color="#D6E33F" icon={faStar} />
      </R.Box>
      <R.Box flex={1}>
        <R.Heading fontSize={2}>{board.title}</R.Heading>
      </R.Box>
      <R.Box>
        <R.Button backgroundColor="#191919">
          <FontAwesomeIcon color="#E0E0E0" icon={faArrowsAlt} />
        </R.Button>
      </R.Box>
    </R.Flex>
  ) : null;
