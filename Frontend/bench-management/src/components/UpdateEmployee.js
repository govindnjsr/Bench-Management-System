import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import AuthContext from './AuthContext';

function UpdateEmployee(props) {

    const authData = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [fetchedEmpDetail, setFetchEmpDetail] = useState(
        {
        }
    );

    const [currentSkills, setCurrentSkill] = useState(
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
   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    const showDetail = async (id) => {
        const fetchedData = await axios.get(`http://localhost:2538/api/empdetails/get/${id}`);
        setFetchEmpDetail(fetchedData.data);
        //setCurrentSkill(fetchedData.data.skill);
        //deep copy
       // setNewSkills(JSON.parse(JSON.stringify(fetchedData.data.skill)));
    }
    const handleChangeValue = (e) => {
        setFetchEmpDetail({ ...fetchedEmpDetail, [e.target.name]: e.target.value });
    };

    // const handleChangeValueInterview = (e) => {
    //     setintDetails({ ...intDetails, [e.target.name]: e.target.value });
    // }

    // const handleSkillValue = (e) => {
    //     const { value, checked } = e.target;
    //     let True = true, False = false;
    //     if (currentSkills[e.target.name]) {
    //         // setCurrentSkill({...currentSkills,[e.target.name]:True});
    //         e.target.checked = true;

    //     }
    //     else {
    //         if (checked) {
    //             setNewSkills({ ...newSkills, [e.target.name]: True });
    //         }
    //         else {
    //             setNewSkills({ ...newSkills, [e.target.name]: False });
    //         }
    //     }

    // }
    // const checkCheck = (value) => {
    //     if (value) {
    //         return "checked";
    //     }
    // }

    const saveDataAtBackend = async () => {
        try {
            // fetchedEmpDetail.skill = newSkills;
            // fetchedEmpDetail.interviewDetails.push(intDetails);
            //const { skill, interviewDetails: indetails } = fetchedEmpDetail;
            //indetails.push(intDetails);
            // fetchedEmpDetail.interviewDetails = indetails;
            console.log("new POST DATA " + JSON.stringify(fetchedEmpDetail));
            //    console.log("ID"+empDetail.id);
            const allEmp = await axios.put(`http://localhost:2538/api/empdetails/update/${fetchedEmpDetail.id}`, fetchedEmpDetail);
            //    console.log("Result"+allEmp);
               authData.setPost({});
        }
        catch {
            console.log()
        }
    }

    const saveData = () => {
        saveDataAtBackend();
        handleClose();
    }


    // console.log("cur emp " + JSON.stringify(fetchedEmpDetail))
    // console.log("int details" + JSON.stringify(intDetails))

    //    console.log("aaaaaaaaaaa "+JSON.stringify(skill)+" -> "+interviewDetails)
    return (
        <>

            {/* <Button variant="primary" onClick={handleShow}>
       View / Update
      </Button> */}
            <button className='button5' onClick={() => { handleShow(); showDetail(props.id); }}>
            <i className="fa-sharp fa-solid fa-pen-to-square"></i>
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
                        {/* <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Select aria-label="Default select example" name="empLocation" onChange={handleChangeValue.bind(this)}>

                                <option>Select from below</option>
                                <option value={1} selected={fetchedEmpDetail.empLocation == 1} >Gurugram</option>
                                <option value={2} selected={fetchedEmpDetail.empLocation == 2} >Bangalore</option>
                                <option value={3} selected={fetchedEmpDetail.empLocation == 3} >Hyderabad</option>
                            </Form.Select>
                        </Form.Group><br /> */}

                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" defaultValue={fetchedEmpDetail.name} onChange={handleChangeValue.bind(this)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="address" type="text" placeholder="Enter Address" defaultValue={fetchedEmpDetail.address} onChange={handleChangeValue.bind(this)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name="phoneNo" type="number" placeholder="Enter phone number" defaultValue={fetchedEmpDetail.phoneNo} onChange={handleChangeValue.bind(this)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Work Experience</Form.Label>
                            <Form.Control name="workExp" type="number" placeholder="Enter work experience in years" defaultValue={fetchedEmpDetail.workExp} onChange={handleChangeValue.bind(this)} />
                        </Form.Group> */}
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Bench Start Date</Form.Label>
                            <Form.Control name="benchDate" type="date" placeholder="Enter bench date" defaultValue={fetchedEmpDetail.benchDate} onChange={handleChangeValue.bind(this)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Billable Date</Form.Label>
                            <Form.Control name="billableDate" type="date" placeholder="Enter last billable date" defaultValue={fetchedEmpDetail.billableDate} onChange={handleChangeValue.bind(this)} />
                        </Form.Group> */}
                        <Form.Group>
                            <Form.Label>Bench Status</Form.Label>
                            <Form.Select aria-label="Default select example" name="benchStatus" onChange={handleChangeValue.bind(this)} >

                                <option>Select from below</option>
                                <option value={false} selected={fetchedEmpDetail.benchStatus == false} >Remove From Bench</option>
                                <option value={true} selected={fetchedEmpDetail.benchStatus == true}  >On Bench</option>
                            </Form.Select>
                        </Form.Group><br />
                        {/* <Form.Group>
                            <Form.Label>Skills</Form.Label>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3" onChange={handleSkillValue.bind(this)}>
                                    <Form.Check
                                        inline
                                        label="Java"
                                        name="java"
                                        value={true}
                                        type={type}
                                        id={`inline-${type}-1`}
                                        defaultChecked={checkCheck(currentSkills.java)}


                                    />
                                    <Form.Check
                                        inline
                                        label="Python"
                                        name="python"
                                        type={type}
                                        value={true}
                                        id={`inline-${type}-2`}
                                        defaultChecked={checkCheck(currentSkills.python)}

                                    />
                                    <Form.Check
                                        inline
                                        label="React"
                                        name="react"
                                        type={type}
                                        value={true}
                                        id={`inline-${type}-3`}
                                        defaultChecked={checkCheck(currentSkills.react)}


                                    />
                                    <Form.Check
                                        inline
                                        label="Angular"
                                        name="angular"
                                        type={type}
                                        value={true}
                                        id={`inline-${type}-4`}
                                        defaultChecked={checkCheck(currentSkills.angular)}


                                    />
                                    <Form.Check
                                        inline
                                        label="HTML"
                                        name="html"
                                        type={type}
                                        value={true}
                                        id={`inline-${type}-5`}
                                        defaultChecked={checkCheck(currentSkills.html)}


                                    />
                                    <Form.Check
                                        inline
                                        label="CSS"
                                        name="css"
                                        type={type}
                                        value={true}
                                        id={`inline-${type}-6`}

                                        defaultChecked={checkCheck(currentSkills.css)}


                                    />
                                    <Form.Check
                                        inline
                                        label="JavaScript"
                                        name="javascript"
                                        type={type}
                                        value={true}
                                        id={`inline-${type}-7`}
                                        defaultChecked={checkCheck(currentSkills.javascript)}

                                    />
                                    <Form.Check
                                        inline
                                        label="SpringBoot"
                                        name="springboot"
                                        type={type}
                                        value={true}
                                        id={`inline-${type}-8`}
                                        defaultChecked={checkCheck(currentSkills.springboot)}


                                    />
                                </div>
                            ))}
                        </Form.Group> */}
                        {/* <Form.Group>
                            <Form.Label>Active</Form.Label>
                            <Form.Select aria-label="Default select example" name="active" onChange={handleChangeValue.bind(this)}>

                                <option>Select from below</option>
                                <option value={true} selected={fetchedEmpDetail.active == true} >True</option>
                                <option value={false} selected={fetchedEmpDetail.active == false}>False</option>
                            </Form.Select>
                        </Form.Group><br />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Client Interview</Form.Label><br /><br />
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control name="client" type="text" placeholder="Enter client name" onChange={handleChangeValueInterview.bind(this)} /><br />
                            <Form.Label>Interview Date</Form.Label>
                            <Form.Control name="date" type="date" placeholder="Enter interview date" onChange={handleChangeValueInterview.bind(this)} /><br />
                            <Form.Label>Interview Result</Form.Label>
                            <Form.Select aria-label="Default select example" name="result" onChange={handleChangeValueInterview.bind(this)}>

                                <option>Select from below</option>
                                <option value={true} >Accepted</option>
                                <option value={false} >Rejected</option>
                            </Form.Select>
                        </Form.Group> */}

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='button3' onClick={handleClose}>Close</button> &nbsp;
                    <button className='button3' form="add" type="button" onClick={() => { saveData(); handleClose(); }} >Update</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UpdateEmployee;
