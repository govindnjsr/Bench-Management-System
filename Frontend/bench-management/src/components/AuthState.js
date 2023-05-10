import React from 'react'
import AuthContext from './AuthContext'
import { useState } from 'react';

export default function AuthState(props) {
    // ------------------------------------------------   
     const [Locations,setLocations]=useState(new Set([]))
     const [skillsSet,setSkillsSet]=useState(new Set([]))
     const [buSet,setBuSet]=useState(new Set([]))
     const [statusSet,setStatusSet]=useState(new Set([]))
    //------------------------------------------------
    const[isblocked, setIsBlocked]=useState(false);
    const [countOfEachLocation,setCountOfEachLocation]=useState([])
    const [gurugramBU,setGurugramBU]=useState([])
    const [bangaloreBU,setBangaloreBU]=useState([])
    const [hyderabadBU,setHyderabadBU]=useState([])
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
    const [allData,setAlldata]=useState()
    const [showSearchBar, setShowSearchBar] = useState(true);
    const [pieChartLabels,setPieChartLables]=useState([]);
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
        "springboot": false,
        "byDefault":false  
      })
      //Pie chart stuff
    const locationWiseEmployeeCount=[];
    const [checkFilter, setCheckFilter] = useState({
        "skill":0,
        "location": 0,
        "status": 0,
        "BU":0
    })
    const [locationAcess, setLocationAccess] = useState({
        "Gurugram": true,
        "Bangalore": true,
        "Hyderabad": true,     

    })
    const [appliedFilters, setAppliedFilters] = useState({
        "gurugram": false,
        "bangalore": false,
        "hyderabad": false,
        "active": false,
        "benched": false,
        "notblocked":false,
        "blocked":false,
        "BFSIFinancialServices":false,
        "MediaTelecom":false,
        "Logistics":false,
        "Technology":false,
        "Healthcare":false,
        "ConsultingServices":false,
        "BFSIInsurance":false,
        "statusBlocked":false
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
        setManagerId(-1);
        console.log("logged out successfully")
    }
    return (
        <AuthContext.Provider value={{setAppliedFilters,appliedFilters,setStatusSet,statusSet,setBuSet,buSet,setSkillsSet,skillsSet,Locations,setLocations,pieChartLabels,setPieChartLables,isblocked,setIsBlocked,hyderabadBU,setHyderabadBU,bangaloreBU,setBangaloreBU,gurugramBU,setGurugramBU,countOfEachLocation,setCountOfEachLocation,locationWiseEmployeeCount,allData,setAlldata,setNewData,newData,requestDto,setReqDto,locationAcess,setLocationAccess,checkFilter,setCheckFilter,dtoData, googleData,setDtoData,isAuthentication, currentRole,
         setGoogleData, handleLogin, setAuthentication,
          setCurrentRole, handleLogout, loopEntry,setLoopEntry, managerId, setManagerId
          ,handleEmpId, viewEmployeeId, benchTimeValue, setBenchTimeValue,
           experienceValue, setExperienceValue, handleClose,
            setShow, show, handleShow, post, setPost,
            assignedLocation, setAssignedLocation, searchValue,
            setSearchValue, benchPeriodEmp, setBenchPeriodEmp, showSearchBar, setShowSearchBar
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
