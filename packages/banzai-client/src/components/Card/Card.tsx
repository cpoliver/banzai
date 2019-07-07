import React from "react";

import * as R from "rebass";

interface CardProps {
  id: String;
  title: String;
}

export const Card: React.FC<CardProps> = ({ title }) => (
  <R.Card backgroundColor="#121212" borderRadius={4} p={2} m={2}>
    <R.Text>{title}</R.Text>
  </R.Card>
);
