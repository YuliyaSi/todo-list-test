import './App.css';
import {RiTodoLine} from "react-icons/ri";

function App() {
  return (
    <div>
      <header>
        <nav>
            <RiTodoLine className={'navbar__icon'}/>
            <span>TodoList</span>
        </nav>
      </header>
    </div>
  );
}

export default App;
