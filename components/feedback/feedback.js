import React, { Component } from 'react';
import styles from "../../scss/modalStyle.scss";
import Modal from "react-bootstrap/Modal";
import { AiFillCheckCircle } from 'react-icons/ai';
import { IconContext } from "react-icons";
import Button from "react-bootstrap/Button";

class Feedback extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                show={this.props.showModal}
                onHide={this.props.onSubmit}
                className="Feedback"
            >
            <Modal.Dialog style={[styles.modalDialog, styles.modalConfirm]}>
                <Modal.Body style={styles.modalContent}>
                    <Modal.Body style={styles.modalHeader}>
                        <Modal.Body style={styles.iconBox}>
                            <IconContext.Provider value={{ size: "70px", className: "global-class-name" }}>
                                <div>
                                    <AiFillCheckCircle />
                                </div>
                            </IconContext.Provider>
                        </Modal.Body>
                        <h4 className='mx-auto'>Congratulations!</h4>
                    </Modal.Body>
                    <Modal.Body style={styles.modalBody}>
                        <p className="text-center">That was the correct answer.</p>
                    </Modal.Body>
                    <Modal.Body style={styles.modalFooter}>
                        <Button
                            className="btn btn-success btn-block"
                            data-dismiss="modal"
                            onClick={this.props.onSubmit}
                        >
                            OK
                        </Button>
                    </Modal.Body>
                </Modal.Body>
            </Modal.Dialog>
            </Modal>
        );
    }
}

export default Feedback;
