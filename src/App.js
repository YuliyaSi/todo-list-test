import './App.css';
import {RiTodoLine} from "react-icons/ri";
import {TodoApp} from "./components/TodoApp";

function App() {
  return (
    <div>
      <header>
        <nav>
            <RiTodoLine className={'navbar__icon'}/>
            <span>TodoList</span>
        </nav>
      </header>
      <TodoApp/>
    </div>
  );
}

export default App;
