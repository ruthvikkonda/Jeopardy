import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import styles from '../../scss/modalStyle.scss';
import Button from 'react-bootstrap/Button';

class Feedback extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                show={this.props.showModal}
                onHide={this.props.handleHide}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                className={styles.modal}
            >
                <Modal.Body className={styles.modalBody}>
                     <IconContext.Provider
                         value={{
                             color: '#fff',
                             size: '70px',
                             className: styles.modalConfirmIconBox,
                         }}
                     >
                         <div>
                             <AiFillCheckCircle />
                         </div>
                     </IconContext.Provider>
                    <h4 className="mx-auto">Congratulations!</h4>
                    <p>That was the correct answer.</p>
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

export default Feedback;
