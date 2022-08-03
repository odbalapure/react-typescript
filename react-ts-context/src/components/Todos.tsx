import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";

// NOTE: We are using context hence we don't need a "prop" type definition
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul>
      {todosCtx.items.map((item) => {
        // return <li key={item.id}>{item.text}</li>;
        return (
          <TodoItem
            key={item.text}
            item={item}
            onDeleteTodo={todosCtx.removeTodo.bind(null, item.text)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
