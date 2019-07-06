import React from "react";

interface CardProps {
  id: String;
  title: String;
}

export const Card: React.FC<CardProps> = ({ title }) => (
  <div className="c-card">{title}</div>
);
