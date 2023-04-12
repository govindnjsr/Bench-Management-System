// import React from 'react'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

function AddEmployee() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        
        {/* <Button className='action-btn' variant="light" size="lg" onClick={handleShow}>
          ADD EMPLOYEE
        </Button> */}
          <button className='button2' onClick={handleShow}>
            <i class="fa-solid fa-user-plus"></i> &nbsp; EMPLOYEE 
         </button>
  

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>EMPLOYEE DETAILS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form id='add'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="93190684368" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Work Experience</Form.Label>
                    <Form.Control type="number" placeholder="Enter work experience in years" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Bench Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter bench date" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Billable Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter last billable date" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bench Status</Form.Label>
                    <Form.Select aria-label="Default select example">
                        
                        <option>Select from below</option>
                        <option value="Active">Active</option>
                        <option value="Benched">Benched</option>
                    </Form.Select>
                </Form.Group><br/>
                <Form.Group>
                    <Form.Label>Skills</Form.Label>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Java"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Python"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                         <Form.Check
                            inline
                            label="React"
                            name="group1"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                         <Form.Check
                            inline
                            label="Angular"
                            name="group1"
                            type={type}
                            id={`inline-${type}-4`}
                        />
                         <Form.Check
                            inline
                            label="HTML"
                            name="group1"
                            type={type}
                            id={`inline-${type}-5`}
                        />
                         <Form.Check
                            inline
                            label="CSS"
                            name="group1"
                            type={type}
                            id={`inline-${type}-6`}
                        />
                         <Form.Check
                            inline
                            label="JavaScript"
                            name="group1"
                            type={type}
                            id={`inline-${type}-7`}
                        />
                         <Form.Check
                            inline
                            label="SpringBoot"
                            name="group1"
                            type={type}
                            id={`inline-${type}-8`}
                        />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Active</Form.Label>
                    <Form.Select aria-label="Default select example">
                        
                        <option>Select from below</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </Form.Select>
                </Form.Group>
                
                
                </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className='button3' onClick={handleClose}>Close</button> &nbsp; 
            <button className='button3' form="add">Add</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default AddEmployee;
