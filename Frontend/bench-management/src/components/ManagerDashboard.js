import React, { useCallback, useContext, useEffect, useState } from 'react'
import Navbar from './Navbar';
import SideBar from './SideBar';
import search from './Images/search.png'
import UpdateEmployee from './UpdateEmployee';
import AuthContext from './AuthContext';
import axios from 'axios';
import AddEmployee from './AddEmployee';

export default function ManagerDashboard() {

  const authData = useContext(AuthContext)
  const [managerData, setManagerData] = useState({}); // for assigned locations of that manager
  const [allEmpDetails, setAllEmpDetails] = useState();
  const [filteredEmpData, setFilteredEmpData] = useState([]);
  const [countAllEmployees, setCountAllEmployees] = useState(0);
  const [countActiveEmp, setCountActiveEmp] = useState(0);
  const [countBenchedEmp, setCountBenchedEmp] = useState(0);
  const fetchManagerTable = async () => {
    try{
      const Data = await axios.get(`http://localhost:2538/api/manager/get/1`); // ${authData.managerId} instead of 1
      setManagerData(Data.data)
    }
    catch{
      console.log()
    }
  }

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
                  <h5 className="card-title">Employees On Bench</h5>
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
