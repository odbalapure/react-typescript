import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // const todos = [new Todo("Eat"), new Todo("Sleep"), new Todo("Code")];
  const [todos, setTodos] = useState<Todo[]>([]);

  /**
   * Add a todo
   * @param todoText
   */
  const addTodoHandler = (todoText: string): void => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodods) => prevTodods.concat(newTodo));
  };

  /**
   * Delete a todo
   * @param todoId
   */
  const deleteTodoHandler = (todoId: string): void => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.text !== todoId);
    });
  };

  return (
    <div style={{ margin: "2rem" }}>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
