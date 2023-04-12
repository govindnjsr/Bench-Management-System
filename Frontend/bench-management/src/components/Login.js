import React, { useContext, useState } from 'react'
import './Project.css';
import { useEffect } from 'react';
import axios from 'axios';
import logoImage from './Images/accoliteLogo.png';
import jwt_decode from "jwt-decode";
import AuthContext from './AuthContext';
import ManagerDashboard from './ManagerDashboard';
import AdminDashboard from './AdminDashboard';
export default function Login() {
  const authData = useContext(AuthContext);
  // const [displayError, setDisplayError] = useState(false);
  const manager = 1;
  const admin = 2; // eslint-disable-line 
  const [role, setRole] = useState(0);
  const [currentPage, setCurrentPage] = useState(true)
  const [data, setdata] = useState([{
    role : 1,
    email : "bansaldhruv0809@gmail.com"
  }])
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
     { // if user is verified then render to next page
      console.log(data);
      data.forEach((item) => {
        if(item.email === userObject.email){
          setRole(item.role);
          setCurrentPage(false);
        }
      })
      authData.handleLogin();
      authData.handleUserData(userObject);
    }
  }
  useEffect(() => {
    axios.get("http://localhost:2538/api/login/get").then((response) => {
      console.log(response);
    })
  }, [])
  useEffect(() => {
    const google = window.google;
    google.accounts.id.initialize({ // eslint-disable-line 
      client_id: "305985372566-gu0rl4u8sm3ceu06m92tc52t0v8um5ne.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton( // eslint-disable-line
      document.getElementById("loginButton"),
      { theme: "outline", size: "large", shape: "pill", width: "400", height: "300" }
    );
  }, []);

  return (
    currentPage === true ?
      (
        <>

          <div className='loginContainer'>
            <div>
              <img className='logoContainer' src={logoImage} alt="accoliteLogo" />
            </div>
            <div className='loginPageContent'>
              <h5 className='welcomeHeading'>Welcome Back To</h5>
              <h1 className='projectHeading'>Bench Management</h1>
              <b>
                <hr className="hr-text" data-content="One Tap Below to Sign-in" />
              </b>
              <div id='loginButton'></div>
            </div>
          </div>

        </>)
      : (
        (role === manager) ? <ManagerDashboard />
          : <AdminDashboard />
      )
  )
}