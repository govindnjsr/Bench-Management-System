import React, { useContext, useState, useEffect } from 'react';
import '../../../Assets/Styles/Project.css';
import axios from 'axios';
import logoImage from '../../../Assets/Images/accoliteLogo.png';
import jwt_decode from "jwt-decode";
import AuthContext from '../../Global/AuthContext.js';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const authData = useContext(AuthContext);
  const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_URL} = process.env;
  const manager = 2;
  const [loginApiData, setLoginApiData] = useState();
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    // console.log(response.credential);
    var userObject = jwt_decode(response.credential);
    authData.setGoogleData(userObject);
  }

  const showDashboard = () => {
    if (authData.currentRole === manager) {
      navigate("/manager");
    }
    else navigate("/admin");
  }

  useEffect(() => {
    loginApiData && loginApiData.forEach(element => {
      if (!authData.loopEntry) authData.setLoopEntry(true);
      if (authData.googleData && element.email == authData.googleData.email) {
        authData.handleLogin();
        authData.setCurrentRole(element.role);
        if (element.role === manager) {
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
      const loginData = await axios.get(`${REACT_APP_URL}/login/get`) // add local url in .env file
      setLoginApiData(loginData.data);
    }
    catch {
      console.log()
    }
  }
  //useEFFECT

  useEffect(() => {
    /* global google */
    const google = window.google;
    google?.accounts.id.initialize({ // eslint-disable-line 
      client_id: `${REACT_APP_GOOGLE_CLIENT_ID}`, // add client id in .env file
      callback: handleCallbackResponse
    });

    google?.accounts.id.renderButton( // eslint-disable-line
      document.getElementById("loginButton"),
      { theme: "outline", size: "large", shape: "pill", width: "400", height: "300" }
    );
    fetchApi();
  }, [authData.handleLogout]);

  return (
    authData.isAuthentication === false ?
      (
        <>
          <div className='loginContainer'>
            <div>
              <img className='logoContainer' src={logoImage} alt="accoliteLogo" />
            </div>
            <div className='loginPageContent'>
              <h5 className='welcomeHeading'>Welcome To</h5>
              <h1 className='projectHeading'>Bench Management System</h1>
              <b>
                <hr className="hr-text" data-content="One Tap Below to Sign-in" />
              </b>
              <div id='loginButton' ></div>
            </div>
          </div>

        </>)
      : (
        showDashboard()
      )
  )
}