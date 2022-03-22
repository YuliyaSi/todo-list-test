import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import "./styles/TodoApp.css"
import {randomColor} from "randomcolor"
import {TodoApp__Input} from "./TodoApp__Input";
import {TodoApp__List} from "./TodoApp__List";

export const TodoApp = () => {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list])

    const addToList = () => {
        if (todo.trim() !== '') {
            const newTodo = {
                id: todo.trim(),
                text: todo,
                color: randomColor({luminosity: 'light'})
            }
            setList(list => [...list, newTodo]);
            setTodo('');
        } else {
            alert('Type something')
        }
    }

    const addFromPressEnter = (e) => {
        if (e.key === 'Enter') {
            addToList()
        }
    }

    const deleteFromList = (value) => {
        setList(list.filter(item => item.id !== value))
    }

    return (
        <Container fluid={true} className='todoapp__container'>
            <TodoApp__Input todo={todo} setTodo={setTodo} addFromPressEnter={addFromPressEnter} addToList={addToList}/>
            <TodoApp__List list={list} deleteFromList={deleteFromList}/>
        </Container>
    );
}

