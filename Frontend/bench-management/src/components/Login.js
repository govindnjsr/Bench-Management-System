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
  const manager = 1;
  const [loginApiData, setLoginApiData] = useState();

  function handleCallbackResponse(response) {
    //console.log("Encoded JWT ID token: " + response.credential);

    var userObject = jwt_decode(response.credential);
    authData.setGoogleData(userObject);

  }

  // console.log("google " + JSON.stringify(authData.googleData))

  useEffect(() => {
    loginApiData && loginApiData.forEach(element => {
      if (!authData.loopEntry) authData.setLoopEntry(true);
      if (authData.googleData && element.email == authData.googleData.email) {
        authData.handleLogin();
        authData.setCurrentRole(element.role);
        if(element.role === manager) {
          authData.setManagerId(element.empId);

        }
      }
    });
  }, [authData.googleData])
  {
    if (authData.loopEntry && authData.currentRole === 0) {
      alert("Sorry you are not authorized to access!!");
      authData.setLoopEntry(false);
    }
  }
  //calling api
  const fetchApi = async () => {
    try {
      const loginData = await axios.get('http://localhost:2538/api/login/get')
      setLoginApiData(loginData.data);
      // authData.setLoginDetails(loginData.data);
    }
    catch {
      console.log()
    }
  }
  //useEFFECT

  useEffect(() => {
    /* global google */
     /* global accounts */
    const google = window.google;
    google?.accounts.id.initialize({ // eslint-disable-line 
      client_id: "305985372566-gu0rl4u8sm3ceu06m92tc52t0v8um5ne.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google?.accounts.id.renderButton( // eslint-disable-line
      document.getElementById("loginButton"),
      { theme: "outline", size: "large", shape: "pill", width: "400", height: "300" }
    );
    fetchApi();
  }, [authData.handleLogout]);

  // console.log(loginApiData)
  return (
    authData.isAuthentication === false ?
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
              <div id='loginButton' ></div>
            </div>
          </div>

        </>)
      : (
        (authData.currentRole === manager) ? 
          (
            <ManagerDashboard />
          )
          : <AdminDashboard />
      )
  )
}