import React, { useState } from "react";
import Todo from "../models/todo";

// Aliases
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo(id: string): void;
};

type Prop = {
  children: React.ReactNode;
};

// Creating context
const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

// Context Provider
const TodosContextProvider: React.FC<Prop> = ({ children }) => {
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

  const contxetValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contxetValue}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContextProvider, TodosContext };
