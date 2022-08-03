import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { TodosContextProvider } from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <div style={{ margin: "2rem" }}>
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
