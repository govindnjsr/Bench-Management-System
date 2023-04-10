import React from 'react'
import AuthContext from './AuthContext'
import { useState } from 'react';
export default function AuthState(props) {

    const [login, setlogin] = useState(false);
    const [user, setUser] = useState() // eslint-disable-line
    function handleLogin() {
        if(login === true) {
            setUser(false)
            console.log("logged out successfully")
        }
        else {
            setlogin(true)  
            console.log("logged in Successfully")
        }
    }
    console.log("logged in : " + login)
    function handleUserData(userData) {
        setUser(userData)
    }
    console.log("userData:" + JSON.stringify(user));
  return (
    <AuthContext.Provider value={{login, user, handleLogin, handleUserData}}>
        {props.children}
    </AuthContext.Provider>
  )
}
