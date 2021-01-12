import React, { useState } from "react";
import { NewItemForm } from "./NewItemForm";

/**
 *  onAdd is a callback function that will be called when we click the Create item button.
 *  toggleButtonText is the text we’ll render when this component is a button.
 *  dark is a flag that we’ll pass to the styled component.
 */
interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return <button onClick={() => setShowForm(true)}>{toggleButtonText}</button>;
};
