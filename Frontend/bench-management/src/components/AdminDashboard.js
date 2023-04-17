import React, { useState, useEffect, useCallback, useContext } from 'react'
import './Project.css';
import Navbar from './Navbar';
import SideBar from './SideBar';
import AddEmployee from './AddEmployee';
import ViewManager from './ViewManager';
import axios from 'axios';
import search from './Images/search.png';
import UpdateEmployee from './UpdateEmployee';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

export default function AdminDashboard() {
  const authData = useContext(AuthContext);
  const navigate = useNavigate();
  const handleViewEmployee = () => {
    navigate("/viewEmployee");
  }
  const [countAllEmployees, setCountAllEmployees] = useState()
  const [countActiveEmp, setCountActiveEmp] = useState()
  const [countBenchedEmp, setCountBenchedEmp] = useState()
  const [empdetails, setEmpDetails] = useState()
  const [filterDataOfDto, setFilterDataOfDto] = useState();
  const [rowsReturned, setRowsReturned] = useState(0);
  const [searchValue, setSearchValue] = useState("");

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
    fetchApi();
  }, [authData.appliedFilters, authData.dtoDetails, authData.post])



  const allowData = (emp) => {
    let Keys = Object.keys(authData.appliedFilters);
    let ok = true, okSkill = true, okLocation = false;
    let selectDataKey = Object.keys(authData.checkFilter);
    //iterate over the filter section
   
    //By default 
    // if (!authData.checkFilter["skill"] && !authData.checkFilter["location"] && !authData.checkFilter["status"])
    //   return true;

    
    // let okExp = true;

    // if (authData.experienceValue > emp.experience) {
    //   okExp = false;
    // }

    // let okBench = true;
    // if (authData.benchTimeValue > emp.benchPeriod) {
    //   okBench = false;
    // }

    // if(okExp)return true;
    //for skills
//By default
    if (!authData.checkFilter["skill"] && !authData.checkFilter["location"] && !authData.checkFilter["status"] && authData.experienceValue==1 && authData.benchTimeValue==1)
    return true;
    //for bench
    let okBench = false;
    if (authData.benchTimeValue <= emp.benchPeriod/30) {
    okBench = true;
    }
    // return okBench;
    //for exp
    let okExp = false;
    if (authData.experienceValue <= emp.experience) {
    okExp = true;
    }

    if (authData.checkFilter["skill"]) {
      //iterate over the filters..
      Keys.forEach(filterKey => {
        if (filterKey != "gurugram" && filterKey != "hyderabad" && filterKey != "bangalore" &&
          filterKey != "active" && filterKey != "benched") {

          if (authData.appliedFilters[filterKey] === true && emp[filterKey] != true)
            okSkill = false;
        }
      });
    }

    //for location

    if (authData.checkFilter["location"]) {
      //iterate over the filters..
      Keys.forEach(filterKey => {
        if (filterKey === "gurugram" && authData.appliedFilters[filterKey] === true && (emp.location == 1)) {

          okLocation = true;
        }

        if (filterKey === "bangalore" && authData.appliedFilters[filterKey] === true && (emp.location == 2)) {

          okLocation = true;
        }
        if (filterKey === "hyderabad" && authData.appliedFilters[filterKey] === true && (emp.location == 3)) {

          okLocation = true;
        }

      });
    }
    let okStatus = false;
    //for Active status
    if (authData.checkFilter["status"]) {

      Keys.forEach(filterKey => {
        if (filterKey === "active" && authData.appliedFilters[filterKey] === true && (emp.benchStatus == false)) {

          okStatus = true;
        }

        if (filterKey === "benched" && authData.appliedFilters[filterKey] === true && (emp.benchStatus == true)) {

          okStatus = true;
        }

      });
    }
    if (authData.checkFilter["skill"] && authData.checkFilter["location"] && authData.checkFilter["status"]) { return okSkill && okLocation && okStatus; }
    else if (authData.checkFilter["skill"] && authData.checkFilter["location"]) { return okSkill && okLocation; }
    else if (authData.checkFilter["skill"] && authData.checkFilter["status"]) { return okSkill && okStatus; }
    else if (authData.checkFilter["location"] && authData.checkFilter["status"]) { return okLocation && okStatus; }

    else if (authData.checkFilter["location"]) { return okLocation; }
    else if (authData.checkFilter["skill"]) { return okSkill; }
    // else return okStatus;
    else if(authData.experienceValue>1){
      return okExp;
    }
    else if(authData.benchTimeValue>1 && okStatus)return okBench;
    else return okStatus;

  }
  console.log("Render..  " + JSON.stringify(authData.checkFilter) + " " + authData.experienceValue)
  // console.log("dtoo " + JSON.stringify(authData.dtoData))
 
  // const data = authData.dtoData?.filter(emp => allowData(emp == true))
  // setFilterDataOfDto(data);
  // console.log("filter data : " + filterDataOfDto);
  // setRowsReturned(filterDataOfDto?.length);
  console.log(searchValue)
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
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Employees Not On Bench</h5>
                  <p className="card-text">10</p>
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
                <input className="search-box1" type="text" onChange={(e) => setSearchValue(e.target.value.toLowerCase())} value={searchValue} placeholder=" search by name " aria-label="Search" />
                <img className="search" src={search} alt="search-img" />
              </form>
            </div>
          </div>
          <div className='number'>
            <p>{authData.dtoData && authData.dtoData.filter(key=> allowData(key) == true).length} rows returned</p>
          </div>
          <div className='table'>
            <div className='table-format'>
              <table className="table">
                <thead className='thread1'>
                  <tr className='tableHeader'>
                    <th  scope="col">Id</th>
                    <th className="table-align-left" scope="col">Name</th>
                    <th className="table-align-left" scope="col">Location</th>
                    <th className="table-align-left" scope="col">Bench_Status</th>
                    <th className="table-align-left" scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className='thread1'>
                  {authData.dtoData &&
                    authData.dtoData.map((emp) => (
                      allowData(emp) == true && (searchValue == "" || emp.employeeName.toLowerCase().includes(searchValue)) ?
                        (<tr>
                          <th className='pointer-to-profile' title="Click on ID to view profile" scope="row" onClick={() => { handleViewEmployee(); authData.handleEmpId(emp.employeeId); }} >{emp.employeeId}</th>
                          <td className="table-align-left">{emp.employeeName}</td>
                          <td className="table-align-left">{emp.location == 1 ? "Gurugram" : emp.location == 2 ? "Bangalore" : emp.location == 3 ? "Hyderabad" : "none"}</td>
                          <td className="table-align-left">{emp.benchStatus == 0 ? "Not On Bench" : "On Bench"}</td>
                          <td className="table-align-left"><UpdateEmployee id = {emp.employeeId}/></td>
                        </tr>) :
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



