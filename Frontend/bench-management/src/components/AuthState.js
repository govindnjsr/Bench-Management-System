import React from 'react'
import AuthContext from './AuthContext'
import { useState } from 'react';
export default function AuthState(props) {

    const [isAuthentication, setAuthentication] = useState(false);
    const [currentRole, setCurrentRole] = useState(0)
    const [googleData, setGoogleData] = useState({})
    const [managerId, setManagerId] = useState(-1);
    const [loopEntry, setLoopEntry] = useState(false);
    function handleLogin() {
        setAuthentication(true)
        console.log("logged in Successfully")
    }
    function handleLogout() {
        setAuthentication(false)
        setCurrentRole(0)
        setLoopEntry(false)
        console.log("logged out successfully")
    }
    return (
        <AuthContext.Provider value={{ googleData, isAuthentication, currentRole,
         setGoogleData, handleLogin, setAuthentication,
          setCurrentRole, handleLogout, loopEntry,setLoopEntry, managerId, setManagerId }}>
            {props.children}
        </AuthContext.Provider>
    )
}
