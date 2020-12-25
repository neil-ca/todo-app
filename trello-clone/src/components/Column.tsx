import React from "react";
import { ColumnContainer, ColumnTitle } from "../../src/styles";
import { AddNewItem } from "./AddNewItem";

interface ColumnProps {
  text: string;
  index: number;
}

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text} </ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
