import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import styles from '../../scss/modalStyle.scss';
import Button from 'react-bootstrap/Button';

class Feedback extends Component {
    render() {
        return (
            <Modal
                show={this.props.showModal}
                onHide={this.props.handleHide}
                className="Feedback"
            >
                <Modal.Dialog> {/* PROBLEM HERE WITH STYLES/CSS-MODULES: style={styles.modalDialog} */}
                    <Modal.Body>
                        <Modal.Body>
                             <IconContext.Provider
                                 value={{ size: '70px', className: 'global-class-name' }}
                             >
                                 <div>
                                     <AiFillCheckCircle />
                                 </div>
                             </IconContext.Provider>
                            <h4 className="mx-auto">Congratulations!</h4>
                        </Modal.Body>
                        <Modal.Body>
                            <p className="text-center">That was the correct answer.</p>
                        </Modal.Body>
                        <Modal.Body>
                            <Button
                                className="btn btn-success btn-block"
                                data-dismiss="modal"
                                onClick={this.props.handleHide}
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
