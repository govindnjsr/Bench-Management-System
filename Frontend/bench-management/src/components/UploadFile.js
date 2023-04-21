import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function UploadFile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState([]);
  const inputFile = useRef(null);

  const handleChange = (e) => {
    setFile([...file, e.target.files[0]]);
  };

  return (
    <>
      <button className="button5" onClick={handleShow}>
        <i class="fa-solid fa-upload"></i>
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
            <button
              className="button5"
              onClick={() => inputFile.current.click()}
            >
              {/* <i class="fa-solid fa-upload"></i> */}
            </button>
            <input type="file" onChange={handleChange} ref={inputFile} />
            &nbsp;
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button> */}
           <button className='button3' onClick={handleClose}>Cancel</button> &nbsp;
           <button className='button3' form="update" >Upload</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default UploadFile;
