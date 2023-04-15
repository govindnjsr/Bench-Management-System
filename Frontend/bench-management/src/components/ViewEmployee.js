import React, { useContext, useEffect, useState } from "react";
import NavBar from "./Navbar";
import profileImageEmployee from "./Images/photo.avif";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./Login";
export default function ViewEmployee() {
  const authData = useContext(AuthContext);
  const empId = authData.viewEmployeeId;
  const [empDetail, setEmpDetail] = useState();
  const navigate = useNavigate();
  function handleBackButton() {
    navigate('/');
  }

  useEffect(() => {
    try {
      const empDetail = axios.get(`http://localhost:2538/api/empdetails/get/${empId}`)
        .then((response) => {
          setEmpDetail(response.data);
        })
    }
    catch { }
  }, [])

  return (
    authData.isAuthentication ?
      <div >
        <div className='profile-window'>

          <div>
            <NavBar />
          </div>

          <div className='shadow1 p-3 mb-5'>
            <div className='for-back'>
              <h6 className='profile-heading'>PROFILE</h6>
              <button className='button3' onClick={handleBackButton}><i class="fa-sharp fa-solid fa-arrow-left"></i> &nbsp;BACK</button>
            </div>

            <hr></hr>
            <img className='profile-photo' src={profileImageEmployee} alt='profileImageEmployee' />
            <div className='content'><center>Megha Mathur</center></div>
            <div className='content'><center>ID : 1234</center></div>
          </div>

          <div className="shadow2 p-3 mb-5">
            <h6 className="profile-heading">PERSONAL INFORMATION</h6>
            <hr></hr>
            <div className="details">
              <div className="details1">
                <p className="labels">Name</p>
                <p className="content">{empDetail.name}</p>
              </div>
              <div className="details1">
                <p className="labels">Contact Number</p>
                <p className="content">{empDetail.phoneNo}</p>
              </div>
              <div className="details1">
                <p className="labels">Address</p>
                <p className="content">{empDetail.address}</p>
              </div>
            </div>
          </div>

          <div className="shadow2 p-3 mb-5">
            <h6 className="profile-heading">WORK INFORMATION</h6>
            <hr></hr>
            <div className="details">
              <div className="details1">
                <p className="labels">Work Experience</p>
                <p className="content">{empDetail.workExp} Years</p>
                <p className="labels">Location</p>
                <p className="content">{empDetail.empLocation}</p>
              </div>
              <div className="details1">
                <p className="labels">Last Billable Date</p>
                <p className="content">{empDetail.billableDate}</p>
                <p className="labels">Bench Status</p>
                <p className="content">{empDetail.benchStatus == false ? "Not on Bench" : "On Bench"}</p>
              </div>
              <div className="details1">
                <p className="labels">Active</p>
                <p className="content">{empDetail.active ? "Yes" : "No"}</p>
                <p className="labels">Skills</p>
                <p className="content">
                  {
                    Object.entries(empDetail.skills).map(([skill, value]) => {
                      if (empDetail.skills[skill] === true) <span>{skill} </span>
                    })
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="shadow2 p-3 mb-5">
            <h6 className="profile-heading">CLIENT INTERVIEWS</h6>
            <hr></hr>
            <div className="details">
              <div className="details1">
                <p className="labels">Client Name</p>
                <p className="content">Amazon</p>
              </div>
              <div className="details1">
                <p className="labels">Interview Date</p>
                <p className="content">22/07/2005</p>
              </div>
              <div className="details1">
                <p className="labels">Result</p>
                <p className="content">Not Clear</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      :
      <Login />
  )
}
