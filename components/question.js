import React, { Component } from 'react';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UserInput from './userInput.js';
import CorrectAnswer from "./feedback/correctAnswer";
import WrongAnswer from "./feedback/wrongAnswer";

class SampleQ extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showQuestion: false, // tracks visibility of first modal (the question modal)
            showFeedback: false, // tracks visibility of second modal (the feedback modal)
            userAnswer: '', // represents what the user answered for the question
        };

        this.handleInput = (input) => {
            this.setState({userAnswer: input});
        };

        this.handleShow = () => {
            // show question and the backdrop when the user clicks a cell on the table
            this.setState({ showQuestion: true });
            this.props.showBackdrop();
        };

        this.handleHide = () => {
            this.setState({ showQuestion: false });
            this.props.hideBackdrop();
        };

        this.submitForm = (event) => {
            event.preventDefault();

            this.props.hideBackdrop(); // take down stars backdrop

            this.setState({
                showQuestion: false, // close question modal
                showFeedback: true, // should open CorrectAnswer modal
            });
        };

        this.closeFeedback = () => {
            // close feedback modal and close backdrop so that it goes back to the table
            this.setState( { showFeedback: false });
            this.props.hideBackdrop();
        };
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
                    backdrop={false}
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
                                handleInput={this.handleInput}
                                handleClick={this.submitForm}
                            />
                        </div>
                    </Modal.Body>
                </Modal>

                /* I use toUpperCase() to perform a case sensitive comparison*/
                {
                    this.state.userAnswer.toUpperCase() === this.props.answer.toUpperCase() ?
                    <CorrectAnswer
                        showModal={this.state.showFeedback}
                        handleHide={this.closeFeedback}
                        amntMoney={this.props.amount}
                    />
                    :
                    <WrongAnswer
                        showModal={this.state.showFeedback}
                        handleHide={this.closeFeedback}
                        amntMoney={this.props.amount}
                    />
                }
            </>
        );
    }
}

export default SampleQ;