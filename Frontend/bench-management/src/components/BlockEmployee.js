import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function BlockEmployee() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="button5" variant="primary" onClick={handleShow}>
      <Form>
                              {["checkbox"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </div>
                              ))}
                            </Form>
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
          <Form id="block">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Project Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>From  Date</Form.Label>
              <Form.Control type="date" placeholder="" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="button3" variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button form="block" className="button3" variant="primary">Apply</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BlockEmployee;