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
  }, [])

  console.log(empdetails)
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
                  {empdetails &&
                    empdetails.map((emp) => (

                      <tr>
                        
                        <th scope="row" onClick={() => {handleViewEmployee(emp.id); authData.handleEmpId(emp.id); }}>{emp.id}</th>

                        <td>{emp.name}</td>
                        <td>{emp.empLocation}</td>
                        <td>{emp.benchStatus == true ? "Active" : "Inactive"}</td>
                        <td><UpdateEmployee/></td>
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



