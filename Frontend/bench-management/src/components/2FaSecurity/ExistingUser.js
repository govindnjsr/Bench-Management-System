import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../Global/AuthContext';
import { useNavigate } from "react-router-dom";
import logoImage from '../../Assets/Images/accoliteLogo.png'
import { authenticator } from 'otplib';
import Login from '../Pages/Home/Login';
export default function ExistingUser() {
  const navigate = useNavigate();
  const authData = useContext(AuthContext);
  const [otp, setOTP] = useState("");
  const { REACT_APP_URL } = process.env;
  const [secret, setSecret] = useState("");
  function verifyOTP() {
    const isValid = authenticator.check(otp, secret);
    if (!isValid) alert("Invalid Otp");
    else {
      authData.setOtpVerify(true);
      if (authData.currentRole === "admin") {
        navigate("/admin", { replace: true })
      }
      else navigate("/manager", { replace: true })
      console.log(isValid);
    }
  }
  const getSecretKey = () => {
    axios.get(`${REACT_APP_URL}/login/getSecretKey/${authData.googleData.email}`)
      .then((res) => {
        setSecret(res.data);
        // console.log(res.data);
      })
  }
  useEffect(getSecretKey, [authData.googleData]);
  return (
    authData.isAuthentication && authData.otpVerify === false ?
      <div className='loginContainer'>
        <div>
          <img className='logoContainer' src={logoImage} alt="accoliteLogo" />
        </div>
        <div className = 'loginPageContent'>
          <p className='welcomeHeading'>
            Verify OTP to proceed
          </p>
          <div id='loginButton'>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button onClick={verifyOTP}>Verify Otp</button>
          </div>
        </div>
      </div>
      :
      (
        <Login />
      )
  )
}
