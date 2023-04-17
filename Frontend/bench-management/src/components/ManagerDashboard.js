import React, { useCallback, useContext, useEffect, useState } from 'react'
import Navbar from './Navbar';
import SideBar from './SideBar';
import search from './Images/search.png'
import UpdateEmployee from './UpdateEmployee';
import AuthContext from './AuthContext';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AddEmployee from './AddEmployee';

export default function ManagerDashboard() {
  
  const authData = useContext(AuthContext)
  const [managerData, setManagerData] = useState({}); // for assigned locations of that manager
  const [allEmpDetails, setAllEmpDetails] = useState();
  const [filteredEmpData, setFilteredEmpData] = useState([]);
  const [countAllEmployees, setCountAllEmployees] = useState(0);
  const [countActiveEmp, setCountActiveEmp] = useState(0);
  const [countBenchedEmp, setCountBenchedEmp] = useState(0);
  const [currentLocationAcess,setCurrentLocationAcess]=useState();
  const[assignedLocation,setAssignedLocation]=useState({})
  const[empOnBench,setEmpOnBench]=useState()
  const navigate = useNavigate();
  const handleViewEmployee = (id) => {
    navigate("/viewEmployee");
  }
  const fetchManagerTable = async () => {
    try{
    //  / const Data = await axios.get(`http://localhost:2538/api/manager/get/1`); // ${authData.managerId} instead of 1
     
      const allEmp=await axios.get(`http://localhost:2538/api/manager/get/${authData.managerId+1}`)
           .then((response) => {
            setManagerData(response.data)  ;                  
          });
          const dtoDetails = await axios.get('http://localhost:2538/api/dto/get');
      authData.setDtoData(dtoDetails.data);

      const allBenchedEmp = await axios.get('http://localhost:2538/api/empdetails/get/benchedemployee');
      setEmpOnBench(allBenchedEmp.data);

    }
    catch{
      console.log()
    }
  }

  useEffect(()=>{
    fetchManagerTable();
     
  },[])
  useEffect(()=>{
    setLocations();
     
  },[managerData])
 
  const setLocations=()=>{
      managerData.assignedLocation && managerData.assignedLocation.map((key)=>{
      console.log("id "+key.id+" "+key.locName); 
      if(key.id==1) assignedLocation.gurugram=true;
      else if(key.id==2) assignedLocation.bangalore=true;
      else if(key.id==3) assignedLocation.hyderabad=true;
        
  })
 
  }
 
  // -------------Filtering Section---------------------------
  const allowLocation=(emp)=>{
    
    if(emp.location==1 && assignedLocation["gurugram"])return true;
    if(emp.location==2 && assignedLocation["bangalore"])return true;
    if(emp.location==3 && assignedLocation["hyderabad"])return true;
    
  }
  const allowData=(emp)=>{
  
    //By default 
    if(!authData.checkFilter["skill"] && !authData.checkFilter["location"] && !authData.checkFilter["status"])
      {
        return allowLocation(emp);
      }
    let Keys=Object.keys(authData.appliedFilters);
    let ok=true,okSkill=true,okLocation=false;
    let selectDataKey=Object.keys(authData.checkFilter);
    //iterate over the filter section

    
    //for skills
   
        if(authData.checkFilter["skill"]){
          //iterate over the filters..
          Keys.forEach(filterKey => {
            if(filterKey!="gurugram" && filterKey!="hyderabad" && filterKey!="bangalore" &&
               filterKey!="active" && filterKey!="benched")
             {
              
              if(authData.appliedFilters[filterKey]===true && emp[filterKey]!=true)            
                 okSkill=false;
              if(!allowLocation(emp))
                 okSkill=false;
          }      
          });
        }
   
    //for location
    
      if(authData.checkFilter["location"]){
        //iterate over the filters..
        Keys.forEach(filterKey => {
            if(assignedLocation["gurugram"] && filterKey==="gurugram" && authData.appliedFilters[filterKey] && (emp.location==1) )            
               {
             
                okLocation=true;
               }
            
           if(assignedLocation["bangalore"] && filterKey==="bangalore" && authData.appliedFilters[filterKey]===true && (emp.location==2) )            
              {  
              
                okLocation=true;
              }
           if( assignedLocation["hyderabad"] && filterKey==="hyderabad" && authData.appliedFilters[filterKey]===true && (emp.location==3) )            
           {
          
           okLocation=true;
           }
              
        });
      }
     let okStatus=false;
      //for Active status
      if(authData.checkFilter["status"]){
     
      Keys.forEach(filterKey => {
        if(allowLocation(emp))
        {if(filterKey==="active" && authData.appliedFilters[filterKey]===true && (emp.benchStatus==false) )            
           {          
            okStatus=true;
           }
        
       if(filterKey==="benched" && authData.appliedFilters[filterKey]===true && (emp.benchStatus==true) )            
          {           
           okStatus=true;
          }
        }
          
    });
 }
      
    if(authData.checkFilter["skill"] && authData.checkFilter["location"] && authData.checkFilter["status"])
     {return okSkill && okLocation && okStatus;}
    else if(authData.checkFilter["skill"] && authData.checkFilter["location"])
     {return okSkill && okLocation;}
     else if(authData.checkFilter["skill"] && authData.checkFilter["status"])
      {return okSkill && okStatus;}
     else if(authData.checkFilter["location"]  && authData.checkFilter["status"])
       {return okLocation && okStatus;}
    else if(authData.checkFilter["location"])
    {return okLocation;}
    else if(authData.checkFilter["skill"] )
    {return okSkill;}
    else return okStatus;
    

  }

  console.log(authData.dtoData)
  console.log("manager id "+authData.managerId)
  console.log("asslocation  "+JSON.stringify(assignedLocation))
  return (
    <div className="window">
      <div className='top'>
        <Navbar />
      </div>
      <div className='bottom'>
        <div className='bottom-left'>
          <SideBar />
        </div>
        <div className='bottom-right'>
          <div className='statistics'>
            <p>STATISTICS</p>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Employees On Bench</h5>
                  <p className="card-text">{empOnBench}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Employees Not On Bench</h5>
                  <p className="card-text">{countBenchedEmp}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='actions'>
            <p className='employees'>EMPLOYEES</p>
            <div className='buttons-manager-dashboard'>
              <AddEmployee />
              <form className="d-flex" role="search">
                <input className="search-box1" type="search" placeholder=" search by name " aria-label="Search" />
                <img className="search" src={search} alt="search-img" />
              </form>
            </div>
          </div>
          <div className='number'>
            <p> 50 rows returned</p>
          </div>
          <div className='table'>
            <div className='table-format'>
              <table className="table table table-striped">
                <thead className='thread1'>
                  <tr className='tableHeader'>
                    <th scope="col">Emp_Id</th>
                    <th scope="col">Emp_Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className='thread1'>
                {authData.dtoData &&
                  authData.dtoData.map((emp)=>(
                    allowData(emp)==true?
                  (<tr>
                      <th scope="row" onClick={() => {handleViewEmployee(emp.employeeId); authData.handleEmpId(emp.employeeId); }} >{emp.employeeId}</th>
                      <td>{emp.employeeName}</td>
                      <td>{emp.location==1?"Gurugram":emp.location==2?"Bangalore":emp.location==3?"Hyderabad":"none"}</td>
                      <td>{emp.benchStatus==0?"Not on Bench":"On Bench"}</td>
                      <td><UpdateEmployee/></td> 
                 </tr>)
                 :
                 (<tr></tr>)
                         
                  ))
        
                 }
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
