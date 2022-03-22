import React from 'react';
import {Button, Col, Container, FormControl, InputGroup, ListGroup, Row} from "react-bootstrap";
import {RiAddLine} from "react-icons/ri";
import "./style.css"
import {AiFillDelete} from "react-icons/ai";

export const TodoApp = () => {

    return (
        <Container fluid={true} className='todoapp__container'>
            <Row className='justify-content-center align-content-center'>
                <Col sm={8} md={4} lg={3}>
                    <InputGroup className="mb-3 xs-12 md-6 lg-2">
                    <FormControl
                        placeholder="Type something..."
                    />
                    <Button variant="outline-secondary">
                        <RiAddLine/>
                    </Button>
                </InputGroup>
                </Col>
            </Row>
            <Row className='justify-content-center align-content-center'>
                <Col sm={8} md={4} lg={3}>
                    <ListGroup>
                        <ListGroup.Item className='todoapp__item'>
                            <span>text</span>
                            <Button variant="outline-secondary">
                                <AiFillDelete/>
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

