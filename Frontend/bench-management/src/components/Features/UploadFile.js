import React, { useState, useRef, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import AuthContext from '../Global/AuthContext.js';

function UploadFile(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const inputFile = useRef(null);
  const authData = useContext(AuthContext);


  const handleChange = (e) => {
   // console.log("Resume"+props.resume)

   authData.setFile([...authData.file, e.target.files[0]]);
  };


  const saveData =async (id) => {
    try {
      console.log("i am in try");
        const formData = new FormData();
        formData.append("file", authData.file[0]);
        fetch(`http://localhost:2538/api/empdetails/upload-file/${id}`,{
          method: 'PUT',
          body: formData
      }).then( 
         alert("File uploaded successfully."),
         authData.setFile([])
         ).catch(err=>console.log(err));
  }
    catch {
        console.log()
    }
}

  return (
    <>
      <button className="button7" style={{backgroundColor: props.resume?'#facfb9' : '#e6e8eb'}} onClick={handleShow}>
        <i className="fa-solid fa-upload"></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="upload">
            <input type="file" name ="file" onChange={handleChange} />
           </Form>
        </Modal.Body>
        <Modal.Footer>
        <button className='button3' onClick={handleClose}>Cancel</button> &nbsp;
           <button className='button3' form="update" onClick={() => { saveData(props.id); handleClose(); }} 
           disabled = {authData.file.length === 0 ? true : false}>Upload</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default UploadFile;