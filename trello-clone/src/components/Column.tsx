import { ColumnContainer, ColumnTitle } from "../../src/styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../AppStateContext";
import { Card } from "./Card";
import { useItemDrag } from "../useItemDrag";
import { useRef } from "react";
import { useDrop } from "react-dnd";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

// We call useAppState to get the data. Then we get the column by index. This is
// why we are passing it as a prop to the Column component. Then we iterate over
// the cards and render the Card components
export const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null)

  const { drag } = useItemDrag({ type: "COLUMN", id, index, text })
  drag(ref)

  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text} </ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={text =>
          dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};
