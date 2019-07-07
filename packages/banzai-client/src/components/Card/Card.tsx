import React from "react";
import * as R from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  id: String;
  title: String;
  description?: String;
}

const lipsum = `
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit..
  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
  erat ut turpis. Suspendisse... 
`;

export const Card: React.FC<CardProps> = ({ title, description = lipsum }) => (
  <R.Card backgroundColor="#333" borderRadius={4} p={3} m={2}>
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
);
