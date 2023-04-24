import React from 'react'
import AuthContext from './AuthContext'
import { useState } from 'react';

export default function AuthState(props) {


    const [isAuthentication, setAuthentication] = useState(false);
    const [currentRole, setCurrentRole] = useState(0)
    const [googleData, setGoogleData] = useState({})
    const [dtoData, setDtoData] = useState()
    const [benchTimeValue, setBenchTimeValue] = useState(0);
    const [experienceValue, setExperienceValue] = useState(0);
    const [show, setShow] = useState(false);
    const [post, setPost] = useState()
    const [searchValue, setSearchValue] = useState("");
    const [assignedLocation, setAssignedLocation] = useState({})
    const [benchPeriodEmp, setBenchPeriodEmp] = useState(0);
    const [newData,setNewData]=useState();
    const [requestDto,setReqDto]=useState({
        "experience": 0,
        "benchPeriod": 0,
        "java": false,
        "python": false,
        "react": false,
        "angular": false,
        "html": false,
        "css": false,
        "javascript": false,
        "springboot": false  
      })
      
    const [checkFilter, setCheckFilter] = useState({
        "location": 0,
        "status": 0
    })
    const [locationAcess, setLocationAccess] = useState({
        "gurugram": true,
        "hyderabad": true,
        "bangalore": true

    })
    const [appliedFilters, setAppliedFilters] = useState({
        "gurugram": false,
        "bangalore": false,
        "hyderabad": false,
        "active": false,
        "benched": false,
        "notblocked":false,
        "blocked":false
    })
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);
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
        <AuthContext.Provider value={{setNewData,newData,requestDto,setReqDto,locationAcess,setLocationAccess,checkFilter,setCheckFilter,appliedFilters,dtoData, googleData, setAppliedFilters,setDtoData,isAuthentication, currentRole,
         setGoogleData, handleLogin, setAuthentication,
          setCurrentRole, handleLogout, loopEntry,setLoopEntry, managerId, setManagerId
          ,handleEmpId, viewEmployeeId, benchTimeValue, setBenchTimeValue,
           experienceValue, setExperienceValue, handleClose,
            setShow, show, handleShow, post, setPost,
            assignedLocation, setAssignedLocation, searchValue,
            setSearchValue, benchPeriodEmp, setBenchPeriodEmp
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
