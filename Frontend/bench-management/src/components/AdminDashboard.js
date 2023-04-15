import React, { useState, useEffect, useCallback, useContext } from 'react'
import './Project.css';
import Navbar from './Navbar';
import SideBar from './SideBar';
import AddEmployee from './AddEmployee';
import ViewManager from './ViewManager';
import axios from 'axios';
import search from './Images/search.png';
import UpdateEmployee from './UpdateEmployee';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

export default function AdminDashboard() {
  const authData = useContext(AuthContext);
  const navigate = useNavigate();
  const handleViewEmployee = (id) => {
    navigate("/viewEmployee");
  }
  const [countAllEmployees, setCountAllEmployees] = useState()
  const [countActiveEmp, setCountActiveEmp] = useState()
  const [countBenchedEmp, setCountBenchedEmp] = useState()
  const [empdetails, setEmpDetails] = useState()

  
  
  const fetchApi = async () => {
    try {
      const allEmp = await axios.get('http://localhost:2538/api/empdetails/get/allemployee');
      setCountAllEmployees(allEmp.data);
      const allActiveEmp = await axios.get('http://localhost:2538/api/empdetails/get/activeemployee');
      setCountActiveEmp(allActiveEmp.data);
      const allBenchedEmp = await axios.get('http://localhost:2538/api/empdetails/get/benchedemployee');
      setCountBenchedEmp(allBenchedEmp.data);
      const employeeDetails = await axios.get('http://localhost:2538/api/empdetails/get');
      setEmpDetails(employeeDetails.data);
     
      const dtoDetails = await axios.get('http://localhost:2538/api/dto/get');
      authData.setDtoData(dtoDetails.data);

    }
    catch {
      console.log()
    }
  }
  useEffect(() => {
    fetchApi()
  },[authData.appliedFilters,authData.dtoDetails])

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
            if(filterKey==="gurugram" && authData.appliedFilters[filterKey]===true && (emp.location==1) )            
               {
             
                okLocation=true;
               }
            
           if(filterKey==="bangalore" && authData.appliedFilters[filterKey]===true && (emp.location==2) )            
              {  
              
                okLocation=true;
              }
           if( filterKey==="hyderabad" && authData.appliedFilters[filterKey]===true && (emp.location==3) )            
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
  console.log("Render..  "+JSON.stringify(authData.checkFilter))
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
                  <p className="card-text">{countBenchedEmp}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='actions'>
            <p className='employees'>EMPLOYEES</p>
            <div className='buttons'>
              <ViewManager />
              <AddEmployee />
              <form className="d-flex" role="search">
                <input className="search-box1" type="search" placeholder=" search by name " aria-label="Search" />
                <img className="search" src={search} alt="search-img" />
              </form>
            </div>
          </div>
          <div className='number'>
            <p>{empdetails?.length} rows returned</p>
          </div>
          <div className='table'>
            <div className='table-format'>
              <table className="table table table-striped">
                <thead className='thread1'>
                  <tr >
                    <th className='pointer-to-profile' title="Click on ID to view profile" scope="col">Id</th>
                    <th className='nopointer-to-profile' scope="col">Name</th>
                    <th className='mopointer-to-profile' scope="col">Location</th>
                    <th className='nopointer-to-profile' scope="col">Bench_Status</th>
                    <th className='nopointer-to-profile' scope="col">Action</th>
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
                      <td>{emp.benchStatus==0?"NotBenched":"Benched"}</td>
                      <td><UpdateEmployee/></td> 
                 </tr>):
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



