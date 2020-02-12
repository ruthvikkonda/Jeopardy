import React, { Component } from 'react';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UserInput from './userInput.js';
import Feedback from "./feedback/feedback";

class SampleQ extends Component {
    static getInitialProps({query: {amount, question, answer}}) {
        return {specAmt: amount, specQ: question, specA: answer}
    }
    
    constructor(props) {
        super(props);

        this.state = {
            showQuestion: false, // tracks visibility of first modal (the question modal)
            showFeedback: false // tracks visibility of second modal (the feedback modal)
        };

        this.handleShow = () => {
            this.setState({ showQuestion: true });
        };

        this.handleHide = () => {
            this.setState({ showQuestion: false });
        };

        this.submitForm = (event) => {
            event.preventDefault();

            console.log(this.state.showFeedback);

            this.setState({
                showQuestion: false, // close question modal
                showFeedback: true, // should open Feedback modal
            });
        };

        this.closeFeedback = () => {
            this.setState( { showFeedback: false }); // close Feedback modal
        }
    }

    render() {
        return (
            <>
                <Button variant="outline-danger" size = "lg" onClick={this.handleShow}>
                    $ {this.props.amount}00
                </Button>

                <Modal
                    show={this.state.showQuestion}
                    onHide={this.handleHide}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Question
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            {this.props.question}
                        </p>
                        <div>
                            <UserInput
                                answer={this.props.specA}
                                handleClick={this.submitForm}
                            />
                        </div>
                    </Modal.Body>
                </Modal>
                <Feedback
                    showModal={this.state.showFeedback}
                    onSubmit={this.closeFeedback}
                />
            </>
        );
    }
}

export default SampleQ;