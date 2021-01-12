import React from "react";
import { CardContainer } from "../../src/styles";

interface CardProps {
  text: string;
  index: number;
}

export const Card = ({ text, index }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
