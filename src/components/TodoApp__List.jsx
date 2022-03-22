import React from 'react';
import {Button, Col, ListGroup, Row} from "react-bootstrap";
import "./styles/TodoApp.css"
import {AiFillDelete} from "react-icons/ai";

export const TodoApp__List = ({ list, deleteFromList }) => {

    return (
            <Row className='justify-content-center align-content-center'>
                <Col sm={8} md={4} lg={3}>
                    <ListGroup>
                        {list.map((item) => <ListGroup.Item style={{ background: item.color }} key={item.id}>
                            <span>{item.text}</span>
                            <Button
                                variant="outline-secondary"
                                onClick={() => deleteFromList(item.id)}
                            >
                                <AiFillDelete/>
                            </Button>
                        </ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
    );
}

