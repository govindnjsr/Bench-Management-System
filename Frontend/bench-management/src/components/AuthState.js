import React from 'react'
import AuthContext from './AuthContext'
import { useState } from 'react';
export default function AuthState(props) {

    const [isAuthentication, setAuthentication] = useState(false);
    const[currentRole,setCurrentRole]=useState(0)
    const[googleData,setGoogleData]=useState({})
    const[dtoData,setDtoData]=useState()
    const[appliedFilters,setAppliedFilters]=useState({
        "experience":false,
        "benchtime":false,
        "java":false,
        "python":false,
        "react":false,
        "angular":false,
        "html":false,
        "css":false,
        "javascript":false,
        "springboot":false,
        "gurugram":false,
        "bangalore":false,
        "hyderabad":false
    })
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
    <AuthContext.Provider value={{appliedFilters,dtoData,googleData,isAuthentication, currentRole,setAppliedFilters,setDtoData,setGoogleData,handleLogin,setAuthentication,setCurrentRole}}>
        {props.children}
    </AuthContext.Provider>
  )
}
