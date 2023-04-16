import React from 'react'
import AuthContext from './AuthContext'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function AuthState(props) {

    
    const [isAuthentication, setAuthentication] = useState(false);
    const[currentRole,setCurrentRole]=useState(0)
    const[googleData,setGoogleData]=useState({})
    const[dtoData,setDtoData]=useState()
    const [benchTimeValue, setBenchTimeValue] = useState(12);
    const [experienceValue, setExperienceValue] = useState(10);
    const[checkFilter,setCheckFilter]=useState({
        "skill":0,
        "location":0,
        "status":0
    })
    const[locationAcess,setLocationAccess]=useState({
        "gurugram":true,
        "hyderabad":true,
        "bangalore":true
        
    })
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
        "hyderabad":false,
        "active":false,
        "benched":false
    })

    const [managerId, setManagerId] = useState(-1);
    const [loopEntry, setLoopEntry] = useState(false);
    const [viewEmployeeId, setViewEmployeeId] = useState(0);
    const handleEmpId = (id) => {
        setViewEmployeeId(id);
      }
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
        <AuthContext.Provider value={{locationAcess,setLocationAccess,checkFilter,setCheckFilter,appliedFilters,dtoData, googleData, setAppliedFilters,setDtoData,isAuthentication, currentRole,
         setGoogleData, handleLogin, setAuthentication,
          setCurrentRole, handleLogout, loopEntry,setLoopEntry, managerId, setManagerId
          ,handleEmpId, viewEmployeeId, benchTimeValue, setBenchTimeValue, experienceValue, setExperienceValue }}>
            {props.children}
        </AuthContext.Provider>
    )
}
