import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';
import { IoIosCloseCircle } from "react-icons/io";
import { IconContext } from 'react-icons';
import styles from '../../scss/wrongAnswer.scss';
import Button from 'react-bootstrap/Button';

class WrongAnswer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                show={this.props.showModal}
                onHide={this.props.handleHide}
                className={styles.modal}
            >
                <IconContext.Provider
                    value={{
                        color: '#fff',
                        size: '70px',
                        className: styles.modalConfirmIconBox,
                    }}
                >
                    <IoIosCloseCircle />
                </IconContext.Provider>

                <Modal.Body>
                    <h4 className={styles.h4}>Incorrect.</h4>
                    <p className={styles.p}>
                        That was the wrong answer.
                    </p>
                    <p
                        style={{marginTop: "-6px"}}
                        className={styles.p}
                    >
                        You have lost ${this.props.amntMoney}00.
                    </p>
                    <Button
                        className={styles.button}
                        variant="danger"
                        block
                        size="lg"
                        onClick={this.props.handleHide}
                    >
                        OK
                    </Button>
                </Modal.Body>
            </Modal>
        );
    }
}

export default WrongAnswer;
