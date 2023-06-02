import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Global/AuthContext';
import { useNavigate } from "react-router-dom";
import logoImage from '../../Assets/Images/accoliteLogo.png'
import qrcode from 'qrcode';
import { authenticator } from 'otplib';
import axios from 'axios';
import Login from '../Pages/Home/Login';
const newUser = {
    otpSecret: authenticator.generateSecret(20)
};
console.log(newUser.otpSecret);
export default function NewUser() {
    const authData = useContext(AuthContext);
    const navigate = useNavigate();
    const [imageURL, setImageURL] = useState(null);
    const [otp, setOTP] = useState("");
    const { REACT_APP_URL } = process.env;
    // useEffect(generateQR, [imageURL]);

    // const verifyLogin = () => {
    //     return (
    //         <ExistingUser/>
    //     )
    // }
    function generateQR() {
        // const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';
        // authenticator.options = {
        //     encoding: 'ascii'
        // }
        // setSecret(authenticator.generateSecret(20)); // base32 encoded hex secret key
        const token = authenticator.generate(newUser.otpSecret);
        // setSecret(authData.secret);
        console.log("token : " + token);
        const user = authData.googleData.email;
        const service = 'Bench Management';
        const otpauth = authenticator.keyuri(user, service, newUser.otpSecret);
        qrcode.toDataURL(otpauth, (err, url) => {
            if (err) {
                alert(err)
            }
            else {
                console.log(url);
                setImageURL(url);
            }
        });
    }
    useEffect(generateQR, []);
    const verifyOTP = async () => {
        const isValid = authenticator.check(otp, newUser.otpSecret);
        if (!isValid) {
            alert("invalid otp");
        } else {
            try {
                await axios.post(`${REACT_APP_URL}/login/saveSecret/${authData.googleData.email}`, newUser.otpSecret, {
                    headers: { 'Content-Type': 'text/plain' }
                }
                ).then((res) => {
                    console.log(res.data);
                    authData.setMfaEnabled(true);
                    navigate("/verify2fa", { replace: true });
                })
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        authData.isAuthentication ?
            <div className='loginContainer'>
                <div>
                    <img className='logoContainer' src={logoImage} alt="accoliteLogo" />
                </div>
                <div className='loginPageContent'>
                <div className='welcomeHeading'>
                    <p>1. Open Authenticator app and scan QR bellow</p>
                    {imageURL !== null && (
                        <div>
                            <img alt="qr" src={imageURL}></img>
                        </div>
                    )}
                </div>
                <div id='loginButton'>
                    <p>
                        2. Input OTP then click <b>Enable MFA</b>
                    </p>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOTP(e.target.value)}
                    />
                    <button onClick={verifyOTP}>Enable MFA</button>
                </div>
                </div>
            </div>
            :
            <Login />
    )
}
