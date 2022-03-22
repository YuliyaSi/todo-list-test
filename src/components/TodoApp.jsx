import React, {useEffect, useState} from 'react';
import {Button, Col, Container, FormControl, InputGroup, ListGroup, Row} from "react-bootstrap";
import {RiAddLine} from "react-icons/ri";
import "./TodoApp.css"
import {AiFillDelete} from "react-icons/ai";
import {randomColor} from "randomcolor"

export const TodoApp = () => {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list])

    const addToList = () => {
        if (todo.trim() !== '') {
            setList(list => [...list, todo]);
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
        setList(list.filter(item => item !== value))
    }

    return (
        <Container fluid={true} className='todoapp__container'>
            <Row className='justify-content-center align-content-center'>
                <Col sm={8} md={4} lg={3}>
                    <InputGroup className="mb-3 xs-12 md-6 lg-2">
                    <FormControl
                        placeholder="Type something..."
                        value={todo}
                        onChange={event => setTodo(event.target.value)}
                        onKeyPress={event => addFromPressEnter(event)}
                    />
                    <Button
                        variant="outline-secondary"
                        onClick={addToList}
                    >
                        <RiAddLine/>
                    </Button>
                </InputGroup>
                </Col>
            </Row>
            <Row className='justify-content-center align-content-center'>
                <Col sm={8} md={4} lg={3}>
                    <ListGroup>
                        {list.map((item) => <ListGroup.Item style={{ background: randomColor({luminosity: 'light'}) }} key={item.trim()}>
                            <span>{item}</span>
                            <Button
                                variant="outline-secondary"
                                onClick={() => deleteFromList(item)}
                            >
                                <AiFillDelete/>
                            </Button>
                        </ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

