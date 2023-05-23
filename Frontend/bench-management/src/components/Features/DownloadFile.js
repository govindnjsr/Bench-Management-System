import React, { useCallback, useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import AuthContext from "../Global/AuthContext";

export default function DownloadFile(props) {
  const authData = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [file, setFile] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleDownload = (e, id, name) => {
    console.log(id);
    e.preventDefault();
    axios.get(`http://localhost:2538/api/empdetails/download/${id}`, {
      responseType: 'blob',
      headers : {Authorization : authData.accessToken}
    })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        console.log("File" + JSON.stringify(response.data));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${name}_Resume.pdf`);
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => alert("Sorry, No resume Available !"));

  };
  return (
    <>
      <button className="button7" onClick={handleShow}>
        <i className="fa-solid fa-download"></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to Download?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="download">
            <button className='button3' form="download" onClick={(e) => { handleDownload(e, props.id, props.name); handleClose(); }}>Download</button>
            <button className='button3' type="button" onClick={handleClose}>Cancel</button> &nbsp;
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
