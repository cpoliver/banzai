import React from "react";
import * as R from "rebass";

import { Card } from "../Card/Card";

interface ColumnProps {
  id: String;
  title: String;
  cards: any[];
}

export const Column: React.FC<ColumnProps> = ({ title, cards }) => (
  <R.Flex flexDirection="column" flex={1} backgroundColor="#1A1A1A" m={2} p={2}>
    <R.Heading fontSize={2} padding={2} textAlign="center">
      {title} ({cards.length})
    </R.Heading>
    <R.Flex flexDirection="column">
      {cards.map(c => (
        <Card {...c} key={c.id} />
      ))}
    </R.Flex>
  </R.Flex>
);
