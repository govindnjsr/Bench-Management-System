import React, { useContext, useEffect, useState } from "react";
import NavBar from './Dashboard/Navbar.js';
import profileImageEmployee from '../../Assets/Images/photo.avif';
import AuthContext from '../Global/AuthContext.js';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from './Home/Login.js';


export default function ViewEmployee() {

  const authData = useContext(AuthContext);
  const empId = authData.viewEmployeeId;
  const [empDetail, setEmpDetail] = useState({});
  const [benchPeriodEmp, setBenchPeriodEmp] = useState(0);
  const navigate = useNavigate();

const navigateToLogin = () => {
  navigate("/");
  return (
    <Login/>
  )
}

  function handleBackButton() {
    authData.setShowSearchBar(true);
    if(authData.currentRole == "admin")
    navigate("/admin");
    else{
      navigate("/manager");
    }
  }
  // console.log(empId);
  // console.log(empDetail);
  const getEmpData = async () => {
    try {
      const emp = await axios.get(`http://localhost:2538/api/empdetails/get/${empId}`,{
        headers : {Authorization : authData.accessToken}
      })
        .then((response) => {
          setEmpDetail(response.data);
        });

      // authData.dtoData &&  authData.dtoData.map(key => {
      //   if(key.employeeId === empId) setBenchPeriodEmp(key.benchPeriod);
      // })
    }
    catch {
      console.log();
    }
  }
console.log(empDetail)
  useEffect(() => {
    getEmpData();
  }, [])

  // console.log(empSkills);
  return (
    authData.isAuthentication === true && authData.otpVerify === true?
      <div >
        <div className='profile-window'>

          <div>
            <NavBar />
          </div>
          <div className="viewprofile-heading">
            <button className="button3" onClick={handleBackButton}>
              <i className="fa-sharp fa-solid fa-arrow-left"></i> &nbsp;BACK
            </button>
            <h5>{empDetail.name}</h5>
          </div>

          <div className='shadow1 p-3 mb-5'>
            <img className='profile-photo' src={profileImageEmployee} alt='profileImageEmployee' />
            <div className='content'><center>{empDetail.name}</center></div>
            <div className='content'><center>ID : AU2023{empId}</center></div>
          </div>

          <div className="shadow2 p-3 mb-5">
            <h6 className="profile-heading">PERSONAL INFORMATION</h6>
            <hr></hr>
            <div className='details-personal'>
              <div className="details1">
                <p className="labels">Name</p>
                <p className="content">{empDetail.name}</p>
                <p className="labels">Email ID</p>
                <p className="content">{empDetail.email}</p>
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
                <p className="labels">Business Unit</p>
                <p className="content">{empDetail.businessUnit}</p>
              </div>
              <div className="details1">
                <p className="labels">Last Billable Date</p>
                <p className="content">{empDetail.billableDate}</p>
                <p className="labels">Bench Status</p>
                <p className="content">{empDetail.benchStatus === true ? 'On Bench' : "Not on Bench"}</p>
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
        </div>
      </div>
      :
      (
      navigateToLogin()
      )
  )
}
