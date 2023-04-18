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
  const [empDetail, setEmpDetail] = useState({});
  const [benchPeriodEmp, setBenchPeriodEmp] = useState(0);
  const navigate = useNavigate();

  function handleBackButton() {
    navigate('/');
  }
  // console.log(empId);
  // console.log(empDetail);
  const getEmpData = async () => {
    try {
      const emp = await axios.get(`http://localhost:2538/api/empdetails/get/${empId}`)
        .then((response) => {
          setEmpDetail(response.data);
        });

      authData.dtoData &&  authData.dtoData.map(key => {
        if(key.employeeId === empId) setBenchPeriodEmp(key.benchPeriod);
      })
    }
    catch {
      console.log();
    }
  }

  useEffect(() => {
    getEmpData();
  }, [])

  // console.log(empSkills);
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
              <button className='button3' onClick={handleBackButton} style={{position : 'fixed', right: '7%'}}><i class="fa-sharp fa-solid fa-arrow-left"></i> &nbsp;BACK</button>
            </div>

            <hr></hr>
            <img className='profile-photo' src={profileImageEmployee} alt='profileImageEmployee' />
            <div className='content'><center>{empDetail.name}</center></div>
            <div className='content'><center>ID : {empId}</center></div>
          </div>

          <div className="shadow2 p-3 mb-5">
            <h6 className="profile-heading">PERSONAL INFORMATION</h6>
            <hr></hr>
            <div className='details-personal'>
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
            <div className='details-work'>
              <div className="details1">
                <p className="labels">Work Experience</p>
                <p className="content">{empDetail.workExp} Years</p>
                <p className="labels">Location</p>
                <p className="content">{empDetail.empLocation === 1 ? "Gurugram" :
                  empDetail.empLocation === 2 ? "Banglore" : "Hyderabad"}</p>
              </div>
              <div className="details1">
                <p className="labels">Last Billable Date</p>
                <p className="content">{empDetail.billableDate}</p>
                <p className="labels">Bench Status</p>
                <p className="content">{empDetail.benchStatus === true ? `On Bench (${Math.round(benchPeriodEmp / 30)} Months, ${benchPeriodEmp%30} Days)` : "Not on Bench"}</p>
              </div>
              <div className="details1">
                <p className='labels'>Bench Start Date</p>
                <p className='content'>{empDetail.benchDate}</p>
                <p className="labels">Skills</p>
                <p className="content">
                  {
                    (() => {
                      if (empDetail.skill?.html === true)
                        return <span>Html, </span>
                    })()
                  }{
                    (() => {
                      if (empDetail.skill?.css === true)
                        return <span>CSS, </span>
                    })()
                  }
                  {
                    (() => {
                      if (empDetail.skill?.javascript === true)
                        return <span>Javascript, </span>
                    })()
                  }
                  {
                    (() => {
                      if (empDetail.skill?.java === true)
                        return <span>Java, </span>
                    })()
                  }
                  {
                    (() => {
                      if (empDetail.skill?.react === true)
                        return <span>React, </span>
                    })()
                  }
                  {
                    (() => {
                      if (empDetail.skill?.angular === true)
                        return <span>Angular, </span>
                    })()
                  }
                  {
                    (() => {
                      if (empDetail.skill?.python === true)
                        return <span>Python, </span>
                    })()
                  }
                  {
                    (() => {
                      if (empDetail.skill?.springboot === true)
                        return <span>Spring Boot </span>
                    })()
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="shadow2 p-3 mb-5">
            <h6 className='profile-heading'>LAST CLIENT INTERVIEW</h6>
            <hr></hr>
            <div className='details-interview'>
              <div className="details1">
                <p className="labels">Client Name</p>
                <p className="content">Accolite</p>
              </div>
              <div className="details1">
                <p className="labels">Interview Date</p>
                <p className="content">22/07/2005</p>
              </div>
              <div className="details1">
                <p className="labels">Result</p>
                <p className='content'>Accepted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <Login />
  )
}
