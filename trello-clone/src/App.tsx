import React from "react";
import { AppContainer } from "./styles";
import { Card } from "./components/Card";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";

function App() {
  return (
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
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log}/>
    </AppContainer>
  );
}

export default App;
