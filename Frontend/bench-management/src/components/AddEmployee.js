// import React from 'react'
import React, { useState,useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import AuthContext from './AuthContext';
function AddEmployee() {
    const authData = useContext(AuthContext);
    
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [empdetails, setEmpDetails] = useState({
        "name": "",
        "address": "",
        "phoneNo": null,
        "workExp": 0,
        "benchDate": null,
        "billableDate": null,
        "benchStatus": null,   
        "active": null,  
        "empLocation": null, 
        
       
    });
    const[skills,setSkills]=useState(
        {
            
                "java": false,
                "python": false,
                "react": false,
                "angular": false,
                "html": false,
                "css": false,
                "javascript": false,
                "springboot": false
            
        }
    )
    const saveDataAtBackend=async ()=>{
        try{
          empdetails.skill=skills;
           setEmpDetails({...empdetails});
           const allEmp=await axios.post('http://localhost:2538/api/empdetails/save',empdetails)
           .then((response) => {
            authData.setPost(response.data);
            
          });
             
        }
        catch {
            console.log()
        }
      }
   
    const saveData=()=>{       
         saveDataAtBackend();
         authData.handleClose();
    }
    const handleChangeValue = (e) => {       
        setEmpDetails({ ...empdetails, [e.target.name]: e.target.value });
      };
    const handleSkillValue=(e)=>{
       const {value,checked}=e.target;
       let True=true,False=false;
       if(checked)
       {setSkills({...skills,[e.target.name]:True});
       }
       else{
        setSkills({...skills,[e.target.name]:False});
       }
         
    }

    return (
      <>
        
          <button className='button2' onClick={authData.handleShow}>
            <i class="fa-solid fa-user-plus"></i> &nbsp; EMPLOYEE 
         </button>
        <Modal
          show={authData.show}
          onHide={authData.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>EMPLOYEE DETAILS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form id='add'>
               <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Select aria-label="Default select example" name="empLocation" onChange={handleChangeValue.bind(this)}>                        
                        <option>Select from below</option>
                        <option value={1} >Gurugram</option>
                        <option value={2}>Bangalore</option>
                        <option value={3}>Hyderabad</option>
                    </Form.Select>
                </Form.Group><br/>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control  type="text" placeholder="Enter Name" name="name" onChange={handleChangeValue.bind(this)}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" onChange={handleChangeValue.bind(this)} type="text" placeholder="Enter Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name="phoneNo" onChange={handleChangeValue.bind(this)} type="number" placeholder="type phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Work Experience</Form.Label>
                    <Form.Control name="workExp" onChange={handleChangeValue.bind(this)}  type="number" placeholder="Enter work experience in years" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Bench Start Date</Form.Label>
                    <Form.Control name="benchDate" onChange={handleChangeValue.bind(this)} type="date" placeholder="Enter bench date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Expected Billable Date</Form.Label>
                    <Form.Control name="billableDate" onChange={handleChangeValue.bind(this)} type="date" placeholder="Enter last billable date" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bench Status</Form.Label>
                    <Form.Select aria-label="Default select example" name="benchStatus" onChange={handleChangeValue.bind(this)}>
                        
                        <option>Select from below</option>
                        <option value={false} >Not on Bench</option>
                        <option value={true} >On Bench</option>
                    </Form.Select>
                </Form.Group><br/>
                <Form.Group>
                    <Form.Label>Primary Skills</Form.Label>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3" onChange={handleSkillValue.bind(this)}>
                        <Form.Check
                            inline
                            label="Java"
                            name="java"
                            type={type}
                            value={"1"}
                            id={`inline-${type}-1`}
                            
                        />
                        <Form.Check
                            inline
                            label="python"
                            name="python"
                            type={type}
                            value={"1"}
                            id={`inline-${type}-2`}
                        />
                         <Form.Check
                            inline
                            label="React"
                            name="react"
                            type={type}
                            value={"1"}
                            id={`inline-${type}-3`}
                        />
                         <Form.Check
                            inline
                            label="Angular"
                            name="angular"
                            type={type}
                            value={"1"}
                            id={`inline-${type}-4`}
                        />
                         <Form.Check
                            inline
                            label="HTML"
                            name="html"
                            type={type}
                            value={"1"}
                            id={`inline-${type}-5`}
                        />
                         <Form.Check
                            inline
                            label="CSS"
                            name="css"
                            type={type}
                            value={"1"}
                            id={`inline-${type}-6`}
                        />
                         <Form.Check
                            inline
                            label="JavaScript"
                            name="javascript"
                            type={type}
                            value={"1"}
                            id={`inline-${type}-7`}
                        />
                         <Form.Check
                            inline
                            label="SpringBoot"
                            name="springboot"
                            type={type}
                            value={"1"}
                            id={`inline-${type}-8`}
                        />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Active</Form.Label>
                    <Form.Select aria-label="Default select example" name="active" onChange={handleChangeValue.bind(this)}>
                        
                        <option>Select from below</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </Form.Select>
                </Form.Group>
                
                
                </Form>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
            <button className='button3' onClick={authData.handleClose}>Close</button> &nbsp; 
            <button className='button3' type='button' onClick={saveData}>Add</button>
            {/* <Button variant="primary">ADD</Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default AddEmployee;
