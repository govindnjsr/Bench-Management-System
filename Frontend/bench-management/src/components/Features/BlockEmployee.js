import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import AuthContext from '../Global/AuthContext';
import Accordion from "react-bootstrap/Accordion";

function BlockEmployee(props) {
  const authData = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [res, setRes] = useState({})
  const [isChecked, setIsChecked] = useState(false);
  const [eventx, setEvent] = useState();
  const [intDetails, setIntDetails] = useState({
    "id": null,
    "result": null,
    "client": "",
    "date": null,
  });
  const [newIntData, setNewIntData] = useState();
  const [empDetails, setEmpDetails] = useState(null);
  const handleCloseBlocked = (e) => {
    setShow(false);
    setIsChecked(false);
  }

  const handleUnblockApplyResult = async (e, id) => {
    e.preventDefault();
    const srNo = empDetails.onGoing;
    setEmpDetails({ ...empDetails, blocked: false });
    // console.log(empDetails);
    try {
      await axios.put(`http://localhost:2538/api/empdetails/blockedstatus/${id}`);
      await axios.put(`http://localhost:2538/api/empdetails/interview/updateresultbysrno/${srNo}`, intDetails)
      await axios.put(`http://localhost:2538/api/empdetails/updateoncondition/${id}`, intDetails);
      // authData.setBlockStatus(true)
      authData.setBlockStatus(1)
      setIsChecked(false)
      eventx.target.checked = false;
      setIntDetails(...intDetails, { result: null, client: "", date: null })
    }
    catch {
    }
  }
  // console.log(intDetails);
  const handleApplyBlocked = async (e, id) => {
    try {
      await axios.post('http://localhost:2538/api/empdetails/interview/save', intDetails)
        .then((response) => {
          // authData.setIsBlocked(true);
          // console.log("Data"+JSON.stringify(response.data.srNo));
          axios.put(`http://localhost:2538/api/empdetails/ongoing/${response.data.id}/${response.data.srNo}`).
            then((res) => {
              authData.setBlockStatus(-1)
            })
          // axios returns API response body in .data


        })
        .then(
          e.preventDefault(),

        )
        .then(setShow(false))
        .then(setIsChecked(true))
      eventx.target.checked = true;
    }
    catch { }
  }

  const handleShowApply = async (e, id) => {
    const { value, checked } = e.target;
    if (checked) {
      e.target.checked = false;
      setEvent(e);
    }
    else {
      e.target.checked = true;
      setEvent(e);
      setIsChecked(true);
    }
    // setIsChecked(checked);
    intDetails.id = id;
    setIntDetails(intDetails);
    await axios.get(`http://localhost:2538/api/empdetails/get/${id}`)
      .then((response) => {
        setEmpDetails(response.data);
        //  console.log("in get"+JSON.stringify(empDetails));
      })
      .then(setShow(false))

    await axios.get(`http://localhost:2538/api/empdetails/interview/get/${id}`)
      .then((response) => {
        setNewIntData(response.data);
        //  console.log("in get"+JSON.stringify(empDetails));
      })
  }
  const handleChangeValue = (e) => {
    setIntDetails({ ...intDetails, [e.target.name]: e.target.value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const todayDate = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    if (today.getDate() % 10 == today.getDate() && today.getMonth() + 1 % 10 == today.getMonth() + 1) {
      date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-0' + today.getDate();
      console.log("Date" + date);
    }
    else if (today.getDate() % 10 == today.getDate()) {
      date = today.getFullYear() + (today.getMonth() + 1) + '-0' + today.getDate();
      console.log("Date" + date);
    }
    else if (today.getMonth() + 1 % 10 == today.getMonth() + 1) {
      date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
      console.log("Date" + date);
    }
    return date;
  }
  // useEffect(()=>{
  //   //force rendering ...
  // },[authData.appliedFilters])
  return (
    <>
      {<button className="button5" variant="primary" onClick={(e) => { handleShowApply(e, props.id); handleShow(); }}>
        <Form name="shambhavi">
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label=""
                name="group1"
                type={type}
                checked={(props.blocked)}
                id={`inline-${type}-1`}
              />
            </div>
          ))}
        </Form>
      </button>}
      {(isChecked) ? <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Interview Status - {props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="block">
            <Form.Group>
              <p><b>Client Name</b>: {intDetails.client}</p>
              <p><b>Date</b> : {intDetails.date}</p>
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
          <button form="block" className="button3" variant="primary" onClick={(e) => { handleUnblockApplyResult(e, props.id); handleClose(); }}>Apply</button>
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
            <Modal.Title>Block - {props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="block">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Project Name</Form.Label>
                <Form.Control type="text" name="client" onChange={handleChangeValue.bind(this)} placeholder="Enter Client Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>From  Date</Form.Label>
                <Form.Control type="date" min={todayDate()} placeholder="" name="date" onChange={handleChangeValue.bind(this)} />
              </Form.Group>
            </Form>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><div className="pfilter">Previous Interview Details</div></Accordion.Header>
                <Accordion.Body>
                  <table className="table">
                    <thead className="thread1">
                      <tr className="tableHeader">
                        <th className="table-align-left" scope="col">
                          Client Name
                        </th>
                        <th className="table-align-left" scope="col">
                          Date
                        </th>
                        <th className="table-align-left" scope="col">
                          Result
                        </th>
                      </tr>
                    </thead>
                    <tbody className="thread1">
                      {newIntData
                        &&
                        newIntData.map((emp) =>
                          <tr>
                            <td
                              className="table-align-left" scope="row" >
                              {emp.client}
                            </td>
                            <td className="table-align-left">
                              {emp.date}
                            </td>
                            <td className="table-align-left">
                              {emp.result == true ? "Accepted" : "Rejected"}
                            </td>
                          </tr>
                        )}
                    </tbody>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Modal.Body>
          <Modal.Footer>
            <button className="button3" variant="secondary" onClick={handleCloseBlocked}>
              Close
            </button>
            <button form="block" className="button3" variant="primary" onClick={(e) => handleApplyBlocked(e, props.id)}>Apply</button>
          </Modal.Footer>
        </Modal>}
    </>
  );
}
export default BlockEmployee;