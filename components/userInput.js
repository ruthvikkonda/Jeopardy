import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class UserInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form onSubmit={this.props.handleClick}>
                <Form.Group as={Row} controlId="formAnswer">
                    <Form.Label column sm={2}>
                        Answer
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Enter Here" />
                    </Col>
                </Form.Group>
                <div>
                    <Button variant="primary" onClick={this.props.handleClick}>
                        Submit
                    </Button>
                </div>
            </Form>
        );
    }
}

export default UserInput;
