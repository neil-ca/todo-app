import React, { useReducer } from "react";
import { AppContainer } from "./styles";
import { Card } from "./components/Card";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";

interface State {
  count: number;
}
type Action =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    };
const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0})
  return (
    <>
    <p>Count: {state.count}</p>
    <button onClick={() => dispatch({ type: "decrement"})}>-</button>
    <button onClick={() => dispatch({ type: "increment"})}>+</button>
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate backend" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn typescript" />
      </Column>
      <Column text="Done">
        <Card text="Component defined" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
    </>
  );
}

export default App;
