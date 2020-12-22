import React from "react";
import { ColumnContainer, ColumnTitle } from "../../src/styles";

interface ColumnProps {
  text: string;
  children: any;
}

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text} </ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
