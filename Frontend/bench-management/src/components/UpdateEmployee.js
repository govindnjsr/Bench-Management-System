import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

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
                Update
            </button>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>UPDATE EMPLOYEE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id='add'>
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Select aria-label="Default select example" name="empLocation">

                                <option>Select from below</option>
                                <option value="Gurugram" >Gurugram</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Hyderabad">Hyderabad</option>
                            </Form.Select>
                        </Form.Group><br />

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="address" type="text" placeholder="Enter Address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name="phoneNo" type="number" placeholder="Enter phone number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Work Experience</Form.Label>
                            <Form.Control name="workExp" type="number" placeholder="Enter work experience in years" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Bench Start Date</Form.Label>
                            <Form.Control name="benchDate" type="date" placeholder="Enter bench date" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Billable Date</Form.Label>
                            <Form.Control name="billableDate" type="date" placeholder="Enter last billable date" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Bench Status</Form.Label>
                            <Form.Select aria-label="Default select example" name="benchStatus" >

                                <option>Select from below</option>
                                <option value={false} >Not On Bench</option>
                                <option value={true} >On Bench</option>
                            </Form.Select>
                        </Form.Group><br />
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
                            <Form.Select aria-label="Default select example" name="active">

                                <option>Select from below</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </Form.Select>
                        </Form.Group><br />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Client Interview</Form.Label><br /><br />
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control name="client-name" type="text" placeholder="Enter client name" /><br />
                            <Form.Label>Interview Date</Form.Label>
                            <Form.Control name="interview-date" type="date" placeholder="Enter interview date" /><br />
                            <Form.Label>Interview Result</Form.Label>
                            <Form.Select aria-label="Default select example" name="benchStatus" >

                                <option>Select from below</option>
                                <option value={true} >Clear</option>
                                <option value={false} >Not Clear</option>
                            </Form.Select>
                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='button3' onClick={handleClose}>Close</button> &nbsp;
                    <button className='button3' form="add">Update</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UpdateEmployee;
