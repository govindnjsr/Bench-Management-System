import React, { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import axios from 'axios';

function UpdateEmployee(props) {
    const [show, setShow] = useState(false);
    const [record, setRecord] = useState();
    const [put, setPut] = useState()
    const [empDetail, setEmpDetail] = useState(
        {
        "name": "",
        "address": "",
        "phoneNo": null,
        "workExp": null,
        "benchDate": null,
        "billableDate": null,
        "benchStatus": false,
        "active": false,
        "empLocation": null,
        "skill": {
            "id": false,
            "java": false,
            "python": false,
            "react": false,
            "angular": false,
            "html": false,
            "css": false,
            "javascript": false,
            "springboot": false
        }
    }
    );

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log("Before"+JSON.stringify(empDetail));
    
    
    const showDetail = (id) =>
    {
      
      fetch(`http://localhost:2538/api/empdetails/get/${id}`)
      .then(resposne=> resposne.json())
      .then(res=>setEmpDetail(res))
    }
    const handleChangeValue = (e) => {       
        setEmpDetail({ ...empDetail, [e.target.name]: e.target.value });
      };

      const handleSkillValue=(e)=>{
        const {value,checked}=e.target;
        let True=true,False=false;
        if(checked)
        {setEmpDetail.skill({...empDetail.skill.e,[e.target.name]:True});
        }
        else{
            setEmpDetail.skill({...empDetail.skill,[e.target.name]:False});
        }
          
     }
     
     const saveDataAtBackend=async ()=>{
        try{
           setEmpDetail({...empDetail});
           console.log("in update"+JSON.stringify(empDetail));
           console.log("ID"+empDetail.id);
           const allEmp=await axios.put(`http://localhost:2538/api/empdetails/update/${empDetail.id}`,empDetail);
           console.log("Result"+allEmp);
          }
        catch {
            console.log()
        }
      }

     const saveData=()=>{       
        saveDataAtBackend();
        handleClose();
   }
    return (
        <>

            {/* <Button variant="primary" onClick={handleShow}>
       View / Update
      </Button> */}
            <button className='button5' onClick={() => { handleShow(); showDetail(props.id);}}>
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
                            <Form.Select aria-label="Default select example" name="empLocation" onChange={handleChangeValue.bind(this)}>

                                <option>Select from below</option>
                                <option value={1} selected={empDetail.empLocation==1} >Gurugram</option>
                                <option value={2} selected={empDetail.empLocation==2} >Bangalore</option>
                                <option value={3} selected={empDetail.empLocation==3} >Hyderabad</option>
                            </Form.Select>
                        </Form.Group><br />

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" defaultValue={empDetail.name} onChange={handleChangeValue.bind(this)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="address" type="text" placeholder="Enter Address"defaultValue={empDetail.address} onChange={handleChangeValue.bind(this)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name="phoneNo" type="number" placeholder="Enter phone number" defaultValue={empDetail.phoneNo} onChange={handleChangeValue.bind(this)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Work Experience</Form.Label>
                            <Form.Control name="workExp" type="number" placeholder="Enter work experience in years" defaultValue={empDetail.workExp} onChange={handleChangeValue.bind(this)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Bench Start Date</Form.Label>
                            <Form.Control name="benchDate" type="date" placeholder="Enter bench date" defaultValue={empDetail.benchDate} onChange={handleChangeValue.bind(this)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Billable Date</Form.Label>
                            <Form.Control name="billableDate" type="date" placeholder="Enter last billable date" defaultValue={empDetail.billableDate} onChange={handleChangeValue.bind(this)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Bench Status</Form.Label>
                            <Form.Select aria-label="Default select example" name="benchStatus"onChange={handleChangeValue.bind(this)} >

                                <option>Select from below</option>
                                <option value={false} selected={empDetail.benchStatus==false} >Not On Bench</option>
                                <option value={true} selected={empDetail.benchStatus==true}  >On Bench</option>
                            </Form.Select>
                        </Form.Group><br />
                        <Form.Group>
                            <Form.Label>Skills</Form.Label>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3" onChange={handleSkillValue.bind(this)}>
                                    <Form.Check
                                        inline
                                        label="Java"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                        checked={empDetail.skill.java}
                                        
                                    />
                                    <Form.Check
                                        inline
                                        label="Python"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                        checked={empDetail.skill.python}
                                    />
                                    <Form.Check
                                        inline
                                        label="React"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                        checked={empDetail.skill.react}
                                        
                                    />
                                    <Form.Check
                                        inline
                                        label="Angular"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-4`}
                                        checked={empDetail.skill.angular}
                                        
                                    />
                                    <Form.Check
                                        inline
                                        label="HTML"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-5`}
                                        checked={empDetail.skill.html}
                                        
                                    />
                                    <Form.Check
                                        inline
                                        label="CSS"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-6`}
                                        checked={empDetail.skill.css}
                                        
                                    />
                                    <Form.Check
                                        inline
                                        label="JavaScript"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-7`}
                                        checked={empDetail.skill.javascript}
                                        
                                    />
                                    <Form.Check
                                        inline
                                        label="SpringBoot"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-8`}
                                        checked={empDetail.skill.springboot}
                                        
                                    />
                                </div>
                            ))}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Active</Form.Label>
                            <Form.Select aria-label="Default select example" name="active" onChange={handleChangeValue.bind(this)}>

                                <option>Select from below</option>
                                <option value={true} selected={empDetail.active==true} >True</option>
                                <option value={false}selected={empDetail.active==false}>False</option>
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
                    <button className='button3' form="add" type="button" onClick= {saveData} >Update</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UpdateEmployee;
