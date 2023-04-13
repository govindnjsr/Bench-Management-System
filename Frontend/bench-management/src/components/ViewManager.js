import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ViewManager() {
  const [show, setShow] = useState(false);
  const [managerDetails, setManagerDetails] = useState();
  const [postResponse, setPostResponse] = useState();
  const [deleteResponse, setDeleteResponse] = useState();
  const [addlocation, setAddLocation] = useState({
    managerId: null,
    locationId: null
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddLocation = (e) => {

    setAddLocation({ ...addlocation, [e.target.name]: e.target.value });
  }

  const postLocationToManager = async () => {
    try {
      await axios.put(`http://localhost:2538/api/manager/${addlocation.managerId}/location/${addlocation.locationId}`)
        .then((response) => {
          console.log("response " + response);
          setPostResponse(response);
          setAddLocation({
            managerId: null,
            locationId: null
          })
        });

    }
    catch {
      console.log()
    }

  }

  const deleteLocationToManager = async () => {
    try {
      await axios.delete(`http://localhost:2538/api/manager/delete/${addlocation.managerId}/locationdelete/${addlocation.locationId}`)
        .then((response) => {
          console.log("response " + response);
          setDeleteResponse(response);
        });
    }
    catch {
      console.log()
    }
  }

  const fetchManagerData = async () => {
    try {
      const managerApiDetails = await axios.get('http://localhost:2538/api/manager/get');
      setManagerDetails(managerApiDetails.data);

    }
    catch {
      console.log()
    }
  }
  useEffect(() => {
    fetchManagerData();
  }, [postResponse, deleteResponse])



  console.log(managerDetails)
  console.log(addlocation)
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Manager Id</Form.Label>
              <Form.Control name="managerId" onChange={handleAddLocation.bind(this)} placeholder="Enter manager Id" />
            </Form.Group>
            <Form.Group>

              <Form.Label>Select Location</Form.Label>
              <Form.Select aria-label="Default select example" name="locationId" onChange={handleAddLocation.bind(this)} >
                <option>Select from below</option>
                <option value={1} >Gurugram</option>
                <option value={2} >Bangalore</option>
                <option value={3} >Hyderabad</option>
              </Form.Select>
            </Form.Group>
            <Button onClick={postLocationToManager}>Add Location</Button>
            <Button onClick={deleteLocationToManager}>Delete Location</Button>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Locations</th>
              </tr>
            </thead>
            <tbody>
              {managerDetails && managerDetails.map((user, index) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.mname}</td>
                  <td>

                    {user.assignedLocation && user.assignedLocation.map((loc, index) => (
                      <p>{loc.locName}</p>
                    ))
                    }
                    {/* <Form>
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Gurugram"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        checked={true}
                        
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
                </Form> */}
                  </td>
                </tr>
              ))
              }

            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <button className='button3' onClick={handleClose}>Close</button>
          {/* <button className='button3' form="view">Apply</button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewManager;
