import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import "./styles/TodoApp.css"
import randomColor from "randomcolor";
import {TodoApp__Input} from "./TodoApp__Input";
import {TodoApp__List} from "./TodoApp__List";
import {ITodo} from "../Types/AppTypes";

// const a = JSON.parse(localStorage.getItem('list'))


export const TodoApp = () => {

    const [todo, setTodo] = useState<string>('');
    // @ts-ignore
    const [list, setList] = useState<ITodo[]>( JSON.parse(localStorage.getItem('list')) || []);

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

    const addFromPressEnter = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        if (e.key === 'Enter') {
            addToList()
        }
    }

    const deleteFromList = (value: string): void => {
        setList(list.filter((item) => {
            const {id} = item;
            return id !== value;
        }))
    }
    return (
        <Container fluid={true} className='todoapp__container'>
            <TodoApp__Input todo={todo} setTodo={setTodo} addFromPressEnter={addFromPressEnter} addToList={addToList}/>
            <TodoApp__List list={list} deleteFromList={deleteFromList}/>
        </Container>
    );
}

