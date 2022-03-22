import React from 'react';
import {Button, Col, FormControl, InputGroup, Row} from "react-bootstrap";
import {RiAddLine} from "react-icons/ri";
import "./styles/TodoApp.css"

export const TodoApp__Input = ({ todo, setTodo, addFromPressEnter, addToList }) => {

    return (
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
    );
}

