import React from "react";
import Todo from "../models/todo";

// NOTE: You can also write as {item: string} also
// Since only a single value is being used
const TodoItem: React.FC<{
  item: Todo;
  onDeleteTodo: () => void;
}> = (props) => {
  return (
    <li style={{ cursor: "pointer" }} onClick={props.onDeleteTodo}>
      {props.item.text}
    </li>
  );
};

export default TodoItem;
