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
      // http://192.168.1.64:2538/api/employees
      const allEmp = await axios.get('http://localhost:2538/api/empdetails/get/allemployee');
      setCountAllEmployees(allEmp.data);
      const allActiveEmp = await axios.get('http://localhost:2538/api/empdetails/get/activeemployee');
      setCountActiveEmp(allActiveEmp.data);
      const allBenchedEmp = await axios.get('http://localhost:2538/api/empdetails/get/benchedemployee');
      setCountBenchedEmp(allBenchedEmp.data);
      const employeeDetails = await axios.get('http://localhost:2538/api/empdetails/get');
      setEmpDetails(employeeDetails.data);
      //    setData(res.data);

    }
    catch {
      console.log()
    }
  }
  useEffect(() => {
    fetchApi()
  },[authData.appliedFilters])

  const doCheckSkills=(emp)=>{
    let Keys=Object.keys(authData.appliedFilters);
    let ok=false;
    console.log("Docheck  "+" "+emp.location)
     Keys.forEach(element => {
       {
          if(authData.appliedFilters[element]==true && emp[element]==true)
           ok=true;       
       }

    });
       return ok;

  }

  const doCheckLocations=(emp)=>{
    let Keys=Object.keys(authData.appliedFilters);
    let ok=false;
     Keys.forEach(element => {
      if(element==="gurugram" && authData.appliedFilters[element]===true && emp.location===1 ){
      
        ok=true;
    }else 
     if(element==="bangalore" && authData.appliedFilters[element]===true && emp.location===2){
      
         ok=true;
     } else
     if(element==="hyderabad" && authData.appliedFilters[element]===true && emp.location===3){
    
       ok=true;
     }

    });
   
       return ok;
  }

  const checkFilter=(emp)=>{
    let Keys=Object.keys(authData.appliedFilters);
    let ok=true;
    Keys.forEach(filterKey => {
      if(authData.appliedFilters[filterKey]===true && emp[filterKey]!=true ){
      
        ok=false;
    }

    });
    return ok;

  }
  // console.log(empdetails)
  console.log("rendering...."+authData.dtoData)
  console.log("filters.. "+authData.appliedFilters)
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
            <div className="col-sm-3 ">
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
            <div className='buttons'>
              <ViewManager />
              <AddEmployee />
              <form className="d-flex" role="search">
                <input className="search-box1" type="search" placeholder="Search " aria-label="Search" />
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
                  <tr>
                    <th scope="col">Emp_Id</th>
                    <th scope="col">Emp_Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">BStatus</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className='thread1'>
                {authData.dtoData &&
                  authData.dtoData.map((emp)=>(
                    checkFilter(emp)==true?
                  (<tr>
                      <th scope="row" onClick={() => {handleViewEmployee(emp.id); authData.handleEmpId(emp.id); }} >{emp.employeeId}</th>
                      <td>{emp.employeeName}</td>
                      <td>{emp.location==1?"Gurugram":emp.location==2?"Bangalore":emp.location==3?"Hyderabad":"none"}</td>
                      <td>{emp.benchStatus==0?"NotBenched":"Benched"}</td>
                      <td><UpdateEmployee/></td> 
                 </tr>):
                 (<tr>DUmmy</tr>)          
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



