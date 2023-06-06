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
        authData.isAuthentication && authData.mfaEnabled == false ?
            <div className='loginContainer'>
                <div>
                    <img className='logoContainer' src={logoImage} alt="accoliteLogo" />
                </div>
                <div className='VerifyContainerMain'>
                    <div className='parentNewUserContainer'>
                        <div className='parentLogoContainer'>
                            <div className='logoContainer'>
                                <img className='logoImage' src="https://cdn01.onelogin.com/images/brands/logos/login/eaca719f175ab8206ef09707f29ecd2377c9cf29.png?1652130055" alt="accolite-logo" />
                            </div>
                        </div>
                        <div className="">
                            <span>Open Authenticator app and scan QR bellow</span>
                            {imageURL !== null && (
                                <div className='qrcodeImageContainer'>
                                    <img alt="qr" src={imageURL}></img>
                                </div>
                            )}
                            <p>Or Paste the Secret Key manually</p>
                            <span>{newUser.otpSecret}</span>
                        </div>
                        <div id='loginButton'>
                            <p>
                                Input OTP then click <b>Verify</b>
                            </p>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOTP(e.target.value)}
                            />
                            <button onClick={verifyOTP}>Verify</button>
                        </div>
                    </div>
                </div>
            </div>
            :
            <Login />
    )
}
