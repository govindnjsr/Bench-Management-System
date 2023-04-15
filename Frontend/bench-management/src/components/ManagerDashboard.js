import React, { useCallback, useContext, useEffect, useState } from 'react'
import Navbar from './Navbar';
import SideBar from './SideBar';
import search from './Images/search.png'
import UpdateEmployee from './UpdateEmployee';
import AuthContext from './AuthContext';
import axios from 'axios';

export default function ManagerDashboard() {
  
  const authData = useContext(AuthContext)
  const [managerData, setManagerData] = useState({}); // for assigned locations of that manager
  const [allEmpDetails, setAllEmpDetails] = useState();
  const [filteredEmpData, setFilteredEmpData] = useState([]);
  const [countAllEmployees, setCountAllEmployees] = useState(0);
  const [countActiveEmp, setCountActiveEmp] = useState(0);
  const [countBenchedEmp, setCountBenchedEmp] = useState(0);
  const [currentLocationAcess,setCurrentLocationAcess]=useState();
  const fetchManagerTable = async () => {
    try{
      const Data = await axios.get(`http://localhost:2538/api/manager/get/1`); // ${authData.managerId} instead of 1
     
      const allEmp=await axios.get('http://localhost:2538/api/manager/get/1')
           .then((response) => {
            setManagerData(response.data)
            
            
          });
    }
    catch{
      console.log()
    }
  }
  //-------SetLocationAcess----------------//

 console.log("manager data "+JSON.stringify(managerData.assignedLocation))

   {
    managerData.assignedLocation && managerData.assignedLocation.map((data)=>{
      console.log("data "+JSON.stringify(data.id))
      
    })
   }

  // ------------------------------------------
  // -------------Filtering Section---------------------------
  const allowData=(emp)=>{
    let Keys=Object.keys(authData.appliedFilters);
    let ok=true,okSkill=true,okLocation=false;
    let selectDataKey=Object.keys(authData.checkFilter);
    //iterate over the filter section

    //By default 
    if(!authData.checkFilter["skill"] && !authData.checkFilter["location"] && !authData.checkFilter["status"])
       return true;
    //for skills
   
        if(authData.checkFilter["skill"]){
          //iterate over the filters..
          Keys.forEach(filterKey => {
            if(filterKey!="gurugram" && filterKey!="hyderabad" && filterKey!="bangalore" &&
               filterKey!="active" && filterKey!="benched")
             {
              
              if(authData.appliedFilters[filterKey]===true && emp[filterKey]!=true )            
                 okSkill=false;
          }      
          });
        }
   
    //for location
    
      if(authData.checkFilter["location"]){
        //iterate over the filters..
        Keys.forEach(filterKey => {
            if(authData.locationAcess["gurugram"] && filterKey==="gurugram" && authData.appliedFilters[filterKey] && (emp.location==1) )            
               {
             
                okLocation=true;
               }
            
           if(authData.locationAcess["bangalore"] && filterKey==="bangalore" && authData.appliedFilters[filterKey]===true && (emp.location==2) )            
              {  
              
                okLocation=true;
              }
           if( authData.locationAcess["hyderabad"] && filterKey==="hyderabad" && authData.appliedFilters[filterKey]===true && (emp.location==3) )            
           {
          
           okLocation=true;
           }
              
        });
      }
     let okStatus=false;
      //for Active status
      if(authData.checkFilter["status"]){
     
      Keys.forEach(filterKey => {
        if(filterKey==="active" && authData.appliedFilters[filterKey]===true && (emp.benchStatus==false) )            
           {
          
            okStatus=true;
           }
        
       if(filterKey==="benched" && authData.appliedFilters[filterKey]===true && (emp.benchStatus==true) )            
          {  
           
           okStatus=true;
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




  // ------------------------------------------------


  const fetchAllEmp = async () => {
    try{
      const Data = await axios.get('http://localhost:2538/api/empdetails/get');
      setAllEmpDetails(Data.data);
    }
    catch{
      console.log("error fetching employee details")
    }
  }

// console.log(managerData)
console.log(allEmpDetails)
console.log(filteredEmpData)
  useEffect(() => {
    fetchManagerTable();
    fetchAllEmp();
  }, [])

  //for fetching assigned location when the manager data is updated

  useEffect(() => {
    managerData.assignedLocation && managerData.assignedLocation.forEach(element => {
      const locationName = element.locName;
      var check = true;
      allEmpDetails && allEmpDetails.forEach(emp => {
        if(emp.empLocation && emp.empLocation == locationName) {
          console.log(emp);
          if(check){
            setFilteredEmpData([emp]);
            check = false;
          }
          else setFilteredEmpData(filteredEmpData => [...filteredEmpData, emp]);
          if(emp.benchStatus && emp.benchStatus === false){
            setCountActiveEmp(countActiveEmp => countActiveEmp + 1);
          }
          else setCountBenchedEmp(countBenchedEmp => countBenchedEmp + 1);
        }
      })
      
    });
    setCountAllEmployees(countAllEmployees => filteredEmpData.length);
  },[managerData, allEmpDetails])


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
                  <h5 className="card-title">Total Employees</h5>
                  <p className="card-text">{countAllEmployees}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Active Employees</h5>
                  <p className="card-text">{countActiveEmp}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Benched Employees</h5>
                  <p className="card-text">{countBenchedEmp}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='actions'>
            <p className='employees'>EMPLOYEES</p>
            <form className="d-flex" role="search">
              <input className="search-box2" type="search" placeholder="Search by name" aria-label="Search" />
              <img className="search" src={search} alt="search-img" />
            </form>
          </div>
          <div className='number'>
            <p> 50 rows returned</p>
          </div>
          <div className='table'>
            <div className='table-format'>
              <table className="table table table-striped">
                <thead className='thread1'>
                  <tr>
                    <th scope="col">Emp_Id</th>
                    <th scope="col">Emp_Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className='thread1'>
                  {filteredEmpData &&
                    filteredEmpData.map((key) => (
                      <tr>
                        <th scope='row'>{key.id}</th>
                        <td>{key.name}</td>
                        <td>{key.empLocation}</td>
                        <td>{key.benchStatus === true ? "Active" : "Inactive"}</td>
                        <td><UpdateEmployee /></td>
                      </tr>
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
