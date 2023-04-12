import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UpdateEmployee() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
       View / Update
      </Button> */}
      <button className='button5' onClick={handleShow}>
          View/ Update
      </button>
  

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button className='button3' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='button3' variant="primary">Apply</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default UpdateEmployee;
