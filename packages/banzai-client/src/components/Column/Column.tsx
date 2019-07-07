import React from "react";
import * as R from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import { Card } from "../Card/Card";
import F from "ramda/es/F";

interface ColumnProps {
  id: String;
  title: String;
  cards: any[];
  index: number;
}

export const Column: React.FC<ColumnProps> = ({ title, cards, index }) => (
  <R.Flex flexDirection="column" flex={1} backgroundColor="#1A1A1A" m={2} p={2}>
    <R.Flex paddingLeft={3} paddingRight={3} alignItems="center">
      <R.Heading flex={1} fontSize={2} p={0}>
        {title}
      </R.Heading>
      <R.Heading
        flex={1}
        color="#8A8A8A"
        fontSize={2}
        padding={2}
        textAlign="center"
      >
        {cards.length}
      </R.Heading>
      <R.Box paddingRight={2}>
        <FontAwesomeIcon size="xs" color="#8A8A8A" icon={faEllipsisH} />
      </R.Box>
    </R.Flex>
    <R.Flex flexDirection="column">
      {cards.map((c, i) => (
        <Card {...c} key={c.id} rowIndex={i} colIndex={index} />
      ))}
    </R.Flex>
  </R.Flex>
);
