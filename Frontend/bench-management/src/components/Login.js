import React, { useState } from 'react'
import './Project.css';
import { useEffect } from 'react';
import img from './Images/loginBackgroundImage.jpg';
import jwt_decode from "jwt-decode";
export default function Login() {

  const [user, setUser] = useState({}) // eslint-disable-line
  function handleCallbackResponse(response) {
    //console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    // console.log(userObject);
    // setUser(userObject);
    if (userObject.email === "bansaldhruv0809@gmail.com") { // if user is verified then render to next page
      document.getElementById("googleLoginButton").hidden = true;
    }
  }
  useEffect(() => {
    const google = window.google;
    google.accounts.id.initialize({
      client_id: "305985372566-gu0rl4u8sm3ceu06m92tc52t0v8um5ne.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("googleLoginButton"),
      { theme: "outline", size: "large", shape: "pill", width: "400", height: "300" }
    );
  }, []);

  return (
    <>
      <div className='parent' style={{ backgroundImage: `url(${img})`, height: "100vh", width: '100vw', backgroundSize: 'cover' }}>
        <div style={{ color: 'white', textAlign: 'center', display:"flex", justifyContent:'center', flexDirection:'column' }}>
          <h5 className='LoginPageHeading' style={{ paddingTop: '9%', paddingBottom: '0px', opacity: '0.7' }}>Welcome Back To,</h5>
          <h1 className='LoginPageHeading' style={{ paddingBottom: '5%' }}>Bench Management</h1>

          <b>
          <hr className="hr-text" data-content="One Tap to Sign-in" />
          </b>
          <div id='googleLoginButton' style={{paddingTop: "3%", margin: "auto"}}></div>
        </div>
      </div>

    </>
  )
}