import React, { useState,useEffect,useContext } from 'react'
import './Project.css';
import Navbar from './Navbar';
import SideBar from './SideBar';
import AddEmployee from './AddEmployee';
import ViewManager from './ViewManager';
import axios from 'axios';
import { Button } from 'bootstrap';
import search from './Images/search.png';
import UpdateEmployee from './UpdateEmployee';
import AuthContext from './AuthContext';
export default function AdminDashboard(prop) {
  const authData = useContext(AuthContext);
  const[allEmployees,setAllEmployee]=useState()
  const[activeEmp,setActiveEmp]=useState()
  const[benchedEmp,setBenchedEmp]=useState()
  const[empdetails,setEmpDetails]=useState()
 const[filterApllied,setFilterApplied]=useState(false)

  const fetchApi=async ()=>{
    try{
      // http://192.168.1.64:2538/api/employees
       const allEmp=await axios.get('http://localhost:2538/api/empdetails/get/allemployee');
       setAllEmployee(allEmp.data);
       const allActiveEmp=await axios.get('http://localhost:2538/api/empdetails/get/activeemployee');
       setActiveEmp(allActiveEmp.data);
       const allBenchedEmp=await axios.get('http://localhost:2538/api/empdetails/get/benchedemployee');
       setBenchedEmp(allBenchedEmp.data);
       const employeeDetails=await axios.get('http://localhost:2538/api/empdetails/get');
       setEmpDetails(employeeDetails.data);

       const dtoDetails=await axios.get('http://localhost:2538/api/dto/get');
       authData.setDtoData(dtoDetails.data);
    //    setData(res.data);
    }
    catch{
       console.log()
    }
  }
  useEffect(()=>{
    fetchApi()
  },[authData.appliedFilters])

//   {
//     "employeeId": 6,
//     "employeeName": "govindaahavespringboot",
//     "experience": 1,
//     "java": false,
//     "python": false,
//     "react": false,
//     "angular": false,
//     "html": false,
//     "css": false,
//     "javascript": false,
//     "springboot": true,
//     "location": 1,
//     "benchStatus": false
// }
// "gurugram":false,
//         "bangalore":false,
//         "hyderabad":false
  const doCheck=(emp)=>{
    console.log(typeof(authData.appliedFilters.java))
    console.log(typeof(emp.java))
    let Ok=true;   
     
    let Keys = Object.keys(authData.appliedFilters);
    Keys.forEach(element => {
      if(element!=="gurugram" && element!=="bangalore" && element!=="hyderabad")
      {if(authData.appliedFilters[element]==true && authData.appliedFilters[element]!=emp[element])
        {Ok=false;
          setFilterApplied(true);
        }
      }

    });

    if(Ok){
      console.log("im ander")
      console.log("checkkkkkkk 1 "+authData.appliedFilters["gurugram"]);
      console.log("emp "+JSON.stringify(emp))
      console.log("emp location "+typeof(emp["location"]))
      console.log("filter loc "+typeof(authData.appliedFilters["gurugram"]))
      console.log(typeof(1))
      if(authData.appliedFilters["gurugram"]==true && emp["location"]===1 ||
      authData.appliedFilters["bangalore"]==true && emp["location"]===2 ||
      authData.appliedFilters["hyderabad"]==true && emp["location"]===3 
         ){
          setFilterApplied(true);
         }
         else
         Ok=false;
    }
    console.log("checkkkkkkk 2 "+authData.appliedFilters["gurugram"]+" "+emp["location"]);
    return Ok;
    

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
            <div className="col-sm-3 mx-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Employees</h5>
                  <p className="card-text">{allEmployees}</p>
                  <button className='button4'>View</button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Active Employees</h5>
                  <p className="card-text">{activeEmp}</p>
                   <button className='button4'>View</button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Benched Employees</h5>
                  <p className="card-text">{benchedEmp}</p>
                  <button className='button4'>View</button>
                </div>
              </div>
            </div>
          </div>
          <div className='actions'>
            <p className='employees'>EMPLOYEES</p>
            <div className='buttons'>
              <ViewManager/>
              <AddEmployee/>
              <form className="d-flex" role="search">
                <input className="search-box1" type="search" placeholder="Search " aria-label="Search" />
                 <img className="search" src={search} alt="search-img"/>
              </form>
            </div>
          </div>
          <div className='number'>
            <p>50 rows returned</p>
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
                 doCheck(emp)===true && filterApllied? 
                  ( 
                  <tr>
                      <th scope="row">{emp.employeeId}</th>
                      <td>{emp.employeeName}</td>
                      <td>{emp.location==1?"Gurugram":emp.location==2?"Bangalore":emp.location==3?"Hyderabad":"none"}</td>
                      <td>{emp.benchStatus==0?"NotBenched":"Benched"}</td>
                      <td><UpdateEmployee/></td> 
                 </tr>):
                 (
                  <tr>
                  <th scope="row">{emp.employeeId}</th>
                  <td>{emp.employeeName}</td>
                  <td>{emp.location==1?"Gurugram":emp.location==2?"Bangalore":emp.location==3?"Hyderabad":"none"}</td>
                  <td>{emp.benchStatus==0?"NotBenched":"Benched"}</td>
                  <td><UpdateEmployee/></td> 
                  </tr>
                 )
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



