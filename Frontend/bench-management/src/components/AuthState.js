import React from 'react'
import AuthContext from './AuthContext'
import { useState } from 'react';
export default function AuthState(props) {

    const [isAuthentication, setAuthentication] = useState(false);
    const[currentRole,setCurrentRole]=useState(0)
    const[googleData,setGoogleData]=useState({})
    function handleLogin() {
        if(isAuthentication === true) {
            setAuthentication(false)
            console.log("logged out successfully")
        }
        else {
            setAuthentication(true)  
            console.log("logged in Successfully")
        }
    }
    
  return (
    <AuthContext.Provider value={{googleData,isAuthentication, currentRole,setGoogleData,handleLogin,setAuthentication,setCurrentRole}}>
        {props.children}
    </AuthContext.Provider>
  )
}
