import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import styles from '../../scss/correctAnswer.scss';
import Button from 'react-bootstrap/Button';

class CorrectAnswer extends Component {
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
                    <AiFillCheckCircle />
                </IconContext.Provider>

                <Modal.Body>
                    <h4 className={styles.h4}>Congratulations!</h4>
                    <p className={styles.p}>
                        That was the correct answer.
                    </p>
                    <p
                        style={{marginTop: "-6px"}}
                        className={styles.p}
                    >
                        You have been rewarded ${this.props.amntMoney}00.
                    </p>
                    <Button
                        className={styles.button}
                        variant="success"
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

export default CorrectAnswer;
