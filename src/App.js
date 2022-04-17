import './App.css';
import {RiTodoLine} from "react-icons/ri";
import {TodoApp} from "./components/TodoApp";
import React, {useEffect, useState} from "react";

const words = ['awesome..', 'incredible..', 'powerful..'];

function App() {

    const [value, setValue] = useState('')

    const printArr = (arr, pos = 0) => {
        if (pos === arr.length) return printArr(arr, 0);

        let word = arr[pos];

        return printText(word, pos)
    }

    const printText = (word, pos, step = 0) => {
        let printed = word.slice(0, step);
        setValue(printed);
        if (step <= word.length) {
            setTimeout(() => printText(word,pos, step + 1), 200)
        } else {
            setTimeout(() => {
                setValue('')
                printArr(words, pos + 1)
            }, 1000)
        }
    }

    useEffect(() => {
        printArr(words)
    }, [])

    return (
        <div>
            <header>
              <nav>
                  <RiTodoLine className={'navbar__icon'}/>
                  <span>TodoList</span>
              </nav>
            </header>
            <div className="typingText__container">
                <h2>Custom, innovative app to do something</h2><br/>
                <h1>{value}<span>&#124;</span></h1>
            </div>
            <TodoApp/>
        </div>
    );
}

export default App;
