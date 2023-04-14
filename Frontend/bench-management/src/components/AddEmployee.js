// import React from 'react'
import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import axios from 'axios';
function AddEmployee() {
    const [show, setShow] = useState(false);
    const [post, setPost] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[dtoData,setDtoData]=useState()

    const [postLocation, setPostLocation] = useState();
    const [locationId, setLocationId] = useState();
    const [locName, setLocName] = useState();
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
   const[print,setPrint]=useState({})
   const[responseSkill,setResponseSkill]=useState()
    const saveDataAtBackend=async ()=>{
        try{
          empdetails.skill=skills;
           setEmpDetails({...empdetails});
           const allEmp=await axios.post('http://localhost:2538/api/empdetails/save',empdetails)
           .then((response) => {
            setPost(response.data);
          });
             
        }
        catch {
            console.log()
        }
      }
   
    const saveData=()=>{       
         saveDataAtBackend();
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


// console.log(empdetails)
// ------------------------------------------------------------------------------------------------/
// const getLocationId = async (e) => {
//     try{
//         setLocName(e.target.value);
//         const locationId = await axios.get(`http://localhost:2538/api/location/getId/${e.target.value}`);
//         setLocationId(locationId.data);
//     }
//     catch{
//         console.log();
//     }
// }
// const handleLocationValue = (e) => {
//     setEmpDetails({ ...empdetails, [e.target.name]: e.target.value });
//     getLocationId(e);
// }
// console.log(skills)
// console.log("printinggg" + JSON.stringify(responseSkill))
// console.log("post "+post)
// console.log("Dto "+JSON.stringify(dtoData))
    return (
      <>
        
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
                    <Form.Label>Bench Date</Form.Label>
                    <Form.Control name="benchDate" onChange={handleChangeValue.bind(this)} type="date" placeholder="Enter bench date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Billable Date</Form.Label>
                    <Form.Control name="billableDate" onChange={handleChangeValue.bind(this)} type="date" placeholder="Enter last billable date" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bench Status</Form.Label>
                    <Form.Select aria-label="Default select example" name="benchStatus" onChange={handleChangeValue.bind(this)}>
                        
                        <option>Select from below</option>
                        <option value={false} >Active</option>
                        <option value={true} >Benched</option>
                    </Form.Select>
                </Form.Group><br/>
                <Form.Group>
                    <Form.Label>Skills</Form.Label>
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
            <button className='button3' onClick={handleClose}>Close</button> &nbsp; 
            <button className='button3'  onClick={saveData}>Add</button>
            {/* <Button variant="primary">ADD</Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default AddEmployee;
