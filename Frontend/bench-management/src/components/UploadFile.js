import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import AuthContext from './AuthContext';
function UploadFile(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState([]);
  const inputFile = useRef(null);
  const handleChange = (e) => {
    setFile([...file, e.target.files[0]]);
  };
  const saveData =async (id) => {
    try {
      console.log("i am in try");
        const formData = new FormData();
        formData.append("file", file[0]);
        fetch(`http://localhost:2538/api/empdetails/upload-file/${id}`,{
          method: 'PUT',
          body: formData
      }).then( alert("File uploaded successfully.")).catch(err=>console.log(err));
  }
        // console.log(file)
        // await axios.put(`http://localhost:2538/api/empdetails/upload-file/${id}`,formData,{
        //   headers:{
        //     'Content-Type' : 'multipart/form-data',
        //   },
        // })
        // .then((Response)=>{console.log(Response);
        // })
        // .catch((error)=>{console.log(error)});
        //    console.log("Result"+allEmp);
        // authData.setPost({});
    catch {
        console.log()
    }
}
  return (
    <>
      <button className="button5" onClick={handleShow}>
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
           <button className='button3' form="update" onClick={() => { saveData(props.id); handleClose(); }} >Upload</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default UploadFile;