import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

function ViewManager() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="light" onClick={handleShow}>
          VIEW MANAGER
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Managers</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Locations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Megha Mathur</td>
          <td>
                    <Form>
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Gurugram"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="Banglore"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    <Form.Check
                        inline
                        label="Hyderabad"
                        type={type}
                        id={`inline-${type}-3`}
                    />
                    </div>
                ))}
                </Form>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dhruv Bansal</td>
          <td>
                            <Form>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Gurugram"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Banglore"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Hyderabad "
                            type={type}
                            id={`inline-${type}-3`}
                        />
                        </div>
                    ))}
                    </Form>
           </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Gobind</td>
          <td>
                        <Form>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Gurugram"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Banglore"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Hyderabad"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                        </div>
                    ))}
                    </Form>
          </td>
        </tr>
       
      </tbody>
    </Table>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose}>Close</button>
            {/* <button>Understood</button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ViewManager;
