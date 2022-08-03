import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// NOTE: We are declaring the "props" type here
// We have a class "Todo" that defines the type for the prop here
const Todos: React.FC<{ items: Todo[]; onDeleteTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((item) => {
        // return <li key={item.id}>{item.text}</li>;
        return (
          <TodoItem
            key={item.text}
            item={item}
            onDeleteTodo={props.onDeleteTodo.bind(null, item.text)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
