import React from "react";
import { ColumnContainer, ColumnTitle } from "../../src/styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../AppStateContext";
import { Card } from "./Card";

interface ColumnProps {
  text: string;
  index: number;
}

// We call useAppState to get the data. Then we get the column by index. This is
// why we are passing it as a prop to the Column component. Then we iterate over
// the cards and render the Card components 
export const Column = ({ text, index }: ColumnProps) => {
  const { state } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text} </ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
