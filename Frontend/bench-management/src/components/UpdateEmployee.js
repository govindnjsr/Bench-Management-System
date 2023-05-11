import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import AuthContext from './AuthContext';

function UpdateEmployee(props) {

    const authData = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


   
    const saveDataAtBackend = async (id) => {
        try {
           // setFetchEmpDetail({...fetchedEmpDetail,benchStatus:false});
            //    console.log("ID"+empDetail.id);
            const allEmp = await axios.put(`http://localhost:2538/api/empdetails/update/${id}`);
               authData.setPost({});
        }
        catch {
            console.log()
        }
    }

    const saveData = () => {
        saveDataAtBackend(props.id);
    }

    return (
        <>
            <button className='button5' onClick={() => { handleShow(); }}>
            <i class="fa-solid fa-circle-minus"></i>
            </button>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>REMOVE EMPLOYEE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id='add'>
                        <p>Are you sure you want to remove <b>{props.name}</b> from bench?</p>
                      
                        {/* <Form.Group>
                            <Form.Label>Bench Status</Form.Label>
                            <Form.Select aria-label="Default select example" name="benchStatus" onChange={handleChangeValue.bind(this)} >

                                <option>Select from below</option>
                                <option value={false} selected={fetchedEmpDetail.benchStatus == false} >Remove from Bench</option>
                                <option value={true} selected={fetchedEmpDetail.benchStatus == true}  >Add on Bench</option>
                            </Form.Select>
                        </Form.Group><br /> */}
                       
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='button3' onClick={handleClose}>Close</button> &nbsp;
                    <button className='button3' form="add" type="button" onClick={() => { saveData(); handleClose(); }} >Remove</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UpdateEmployee;
