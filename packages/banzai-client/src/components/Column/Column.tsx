import React from "react";

import { Card } from "../Card/Card";

interface ColumnProps {
  id: String;
  title: String;
  cards: any[];
}

export const Column: React.FC<ColumnProps> = ({ title, cards }) => (
  <div className="c-column">
    <h3>{title}</h3>
    <ol className="c-column__cards">
      {cards.map(c => (
        <li key={c.id}>
          <Card {...c} />
        </li>
      ))}
    </ol>
  </div>
);
