import React from "react";
import { TodoListItem } from "./TodoListItem";

const todos = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
];
const App: React.FC = () => {
  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </React.Fragment>
  );
};

export default App;
