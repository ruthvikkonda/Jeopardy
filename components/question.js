import React, { Component } from 'react';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UserInput from './userInput.js';
import Feedback from "./feedback/feedback";
import Backdrop from "./backdrop";
import styles from '../scss/backdrop.scss';
import Layout from '../components/layout';

class SampleQ extends Component {
    static getInitialProps({query: {amount, question, answer}}) {
        return {specAmt: amount, specQ: question, specA: answer}
    }
    
    constructor(props) {
        super(props);

        this.state = {
            showQuestion: false, // tracks visibility of first modal (the question modal)
            showFeedback: false, // tracks visibility of second modal (the feedback modal)
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

        this.submitForm = event => {
            event.preventDefault();

            this.props.hideBackdrop(); // take down stars backdrop

            this.setState({
                showQuestion: false, // close question modal
                showFeedback: true, // should open Feedback modal
            });
        };

        this.closeFeedback = () => {
            // close Feedback modal and close backdrop so that it goes back to the table
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
                                answer={this.props.specA}
                                handleClick={this.submitForm}
                            />
                        </div>
                    </Modal.Body>
                </Modal>
                <Feedback
                    showModal={this.state.showFeedback}
                    handleHide={this.closeFeedback}
                />
            </>
        );
    }
}

export default SampleQ;