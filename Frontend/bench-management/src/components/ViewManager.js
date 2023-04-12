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
        <button className='button2' onClick={handleShow}>
        <i class="fa-solid fa-user"></i> &nbsp; MANAGERS 
        </button>
  
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
        <Form id='view'>
          <Table striped bordered hover >
                  <thead className='thread2'>
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
                          <Form id='1'>
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
                                  <Form id='2'>
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
                        <Form id='3'>
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
    </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className='button3' onClick={handleClose}>Close</button> 
            <button className='button3' form="view">Apply</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ViewManager;
