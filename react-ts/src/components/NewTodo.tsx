import React, { useState } from "react";
import { useRef } from "react";

// NOTE: This is a prop declaration for type "function"
const NewTodo: React.FC<{ onAddTodo: (todoText: string) => void }> = (
  props
) => {
  // We must specify the type of "ref" to connect the type of HTML element
  // Specify what kind of data we wish to store in this "ref"
  // NOTE: There must be an initial value for the "ref" hence "null"
  const todoRef = useRef<HTMLInputElement>(null);
  const [warning, setWarning] = useState<string>("");

  /**
   * Add todo item
   * @param event
   * @returns
   */
  const submitHandler = (event: React.FormEvent) => {
    // For a click event it will be React.MouseEvent
    event.preventDefault();

    // Use "?" in case the value may be "null"
    // Use "!" in case the value will never be "null"
    const todoText = todoRef.current?.value;

    if (todoText?.trim().length === 0) {
      setWarning("Input is empty!");
      setTimeout(() => setWarning(""), 3000);
      return;
    }

    props.onAddTodo(todoText!);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text: </label>
      <input type="text" id="text" ref={todoRef} />
      <button>Add Todo</button>
      {warning ? <div style={{ color: "red" }}>{warning}</div> : ""}
    </form>
  );
};

export default NewTodo;
