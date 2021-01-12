import React from "react";
import { useAppState } from "./AppStateContext";
import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { AppContainer } from "./styles";

// interface State {
//   count: number;
// }
// type Action =
//   | {
//       type: "increment";
//     }
//   | {
//       type: "decrement";
//     };
// const counterReducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 2 };
//     case "decrement":
//       return { count: state.count - 2 };
//     default:
//       throw new Error();
//   }
// };
function App() {
  // const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => ({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
}

export default App;
