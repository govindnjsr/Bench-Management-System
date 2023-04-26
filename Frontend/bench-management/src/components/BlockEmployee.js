import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { json } from 'react-router-dom';
import axios from 'axios';
import AuthContext from './AuthContext';
function BlockEmployee(props) {
  const authData = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [res, setRes]=useState({})
  const [isChecked, setIsChecked] = useState(false);
  const [intDetails, setIntDetails] = useState({
    "id": null,
    "result": null,
    "client": "",
    "date": null,
  });
  const[empDetails,setEmpDetails]=useState(null);
  const[isblocked, setIsBlocked]=useState(false);
  const handleCloseBlocked = (e) => {
    setShow(false);
    setIsChecked(false);
    console.log("checked value " + isChecked)
  }
  useEffect(()=>{
    console.log("new emp out"+JSON.stringify(empDetails));
  })
  const handleApplyResult =async(e,id)=>{
    e.preventDefault();
    const srNo=empDetails.onGoing;
    setEmpDetails({...empDetails,blocked:false});
    try{
      await axios.put(`http://localhost:2538/api/empdetails/blockedstatus/${id}`);
      await axios.put(`http://localhost:2538/api/empdetails/interview/updateresultbysrno/${srNo}`,intDetails)
      .then(setIsBlocked(false))
    }
    //console.log()
    //var srNo = empDetails.data.onGoing;
    //console.log(empDetails.blocked);
      // await axios.put(`http://localhost:2538/api/empdetails/interview/updateresultbysrno/${srno}`,intDetails)
      // .then((response)=>{
      //   console.log("Unblock"+response.data);
      //   axios.put(`http://localhost:2538/api/empdetails/update/${id}`, empDetails)
  //   empDetails.blocked=false;
  //   setEmpDetails(empDetails);
  //   const allEmp =
  //   .then(
  //     e.preventDefault()
  // )
  // .then(setShow(false))
    //
    catch{
    }
  }
console.log(intDetails);
  const handleApplyBlocked = async (e, id) => {
    try {
        await axios.post('http://localhost:2538/api/empdetails/interview/save', intDetails)
        .then((response)=>{
          console.log("Data"+JSON.stringify(response.data.srNo));
          axios.put(`http://localhost:2538/api/empdetails/ongoing/${response.data.id}/${response.data.srNo}`)
          // axios returns API response body in .data
        })
        .then(
          e.preventDefault()
      )
      .then(setShow(false))
      .then(setIsBlocked(true))
      //.then(setIsChecked(false))
    }
    catch {}
  }
  const isOngoing = (value) => {
        if (value) {
            return "checked";
        }
    }
  const handleShowApply = async(e,id) => {
    const { value, checked } = e.target;
    setIsChecked(checked);
    intDetails.id = id;
    setIntDetails(intDetails);
    await axios.get(`http://localhost:2538/api/empdetails/get/${id}`)
    .then((response)=>{
       setEmpDetails(response.data);
      //  console.log("in get"+JSON.stringify(empDetails));
    })
    .then(
      e.preventDefault()
  )
  .then(setShow(false))
  }
  const handleChangeValue = (e) => {
    setIntDetails({ ...intDetails, [e.target.name]: e.target.value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const todayDate=()=>{
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    if(today.getMonth()+1 %10==today.getMonth()+1)
    {
      var date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
      return date;
    }
    console.log("Date"+date);
    return date;
  }
  return (
    <>
      <button className="button5" variant="primary" onClick={(e) => { handleShowApply(e,props.id); handleShow(); }}>
        <Form name="shambhavi">
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label=""
                name="group1"
                type={type}
                defaultChecked={isOngoing(props.blocked)}
                id={`inline-${type}-1`}
                checked={isblocked}
                // checked={() => {isOngoing(props.id)}}
              // onChange={handleCheckboxChange
              />
            </div>
          ))}
        </Form>
      </button>
      {(!isChecked) ? <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Interview Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="block">
          <Form.Group>
                            <Form.Label>Interview Result</Form.Label>
                            <Form.Select aria-label="Default select example" name="result" onChange={handleChangeValue.bind(this)} >
                                <option>Select from below</option>
                                <option value={false} selected={intDetails.result == false} >Rejected</option>
                                <option value={true} selected={intDetails.result == true}  >Accepted</option>
                            </Form.Select>
                        </Form.Group><br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="button3" variant="secondary" onClick={handleCloseBlocked}>
            Close
          </button>
          <button form="block" className="button3" variant="primary" onClick={(e) => {handleApplyResult(e, props.id); handleClose();}}>Apply</button>
        </Modal.Footer>
      </Modal>
        :
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Block Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="block">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Project Name</Form.Label>
                <Form.Control type="text" name="client" onChange={handleChangeValue.bind(this)} placeholder="Enter Client Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>From  Date</Form.Label>
                <Form.Control type="date" min = {todayDate()} placeholder="" name="date" onChange={handleChangeValue.bind(this)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="button3" variant="secondary" onClick={handleCloseBlocked}>
              Close
            </button>
            <button form="block" className="button3" variant="primary" onClick={(e) => handleApplyBlocked(e,props.id)}>Apply</button>
          </Modal.Footer>
        </Modal>}
    </>
  );
}
export default BlockEmployee;