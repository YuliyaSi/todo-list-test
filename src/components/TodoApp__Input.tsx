import React, {ChangeEvent} from 'react';
import {Button, Col, FormControl, InputGroup, Row} from "react-bootstrap";
import {RiAddLine} from "react-icons/ri";
import "./styles/TodoApp.css"
import {IInputProps} from "../Types/AppTypes";


export const TodoApp__Input = ({ todo, setTodo, addFromPressEnter, addToList }: Required<IInputProps>) => {

    return (
            <Row className='justify-content-center align-content-center'>
                <Col sm={8} md={4} lg={3}>
                    <InputGroup className="mb-3 xs-12 md-6 lg-2">
                    <FormControl
                        placeholder="Type something..."
                        value={todo}
                        onChange={(event: ChangeEvent<HTMLInputElement>): void => setTodo(event.target.value)}
                        onKeyDown={(e) => addFromPressEnter(e)}
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

