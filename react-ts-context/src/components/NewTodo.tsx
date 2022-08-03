import React, { useContext, useState } from "react";
import { TodosContext } from "../store/todos-context";
import { useRef } from "react";

const NewTodo: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

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

    todosCtx.addTodo(todoText!);
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
