import React, { useState, useEffect, useCallback, useContext, useRef } from "react";
import "./Project.css";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import AddEmployee from "./AddEmployee";
import ViewManager from "./ViewManager";
import axios from "axios";
import search from "./Images/search.png";
import UpdateEmployee from "./UpdateEmployee";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import UploadFile from "./UploadFile";
import DownloadFile from "./DownloadFile";
import BlockEmployee from "./BlockEmployee";

export default function AdminDashboard() {
  const authData = useContext(AuthContext);
  const navigate = useNavigate();
  const handleViewEmployee = () => {
    navigate("/viewEmployee");
  };

  const handleReport=()=>{
    navigate('/viewReport');
  }
  const [countAllEmployees, setCountAllEmployees] = useState();
  const [countActiveEmp, setCountActiveEmp] = useState();
  const [countBenchedEmp, setCountBenchedEmp] = useState();
  const [empdetails, setEmpDetails] = useState();
  const [filterDataOfDto, setFilterDataOfDto] = useState();
  const [rowsReturned, setRowsReturned] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  
  

  const fetchNew =async ()=>{
    try{
      const allnewDto = await axios.post(
        "http://localhost:2538/api/dto/get/filterd",authData.requestDto
      );
      authData.setNewData(allnewDto.data);
    }
    catch {
      console.log();
    }
  }

  const fetchApi = async () => {
    try {
      const allEmp = await axios.get(
        "http://localhost:2538/api/empdetails/get/allemployee"
      );
      setCountAllEmployees(allEmp.data);
      const allActiveEmp = await axios.get(
        "http://localhost:2538/api/empdetails/get/activeemployee"
      );
      setCountActiveEmp(allActiveEmp.data);
      const allBenchedEmp = await axios.get(
        "http://localhost:2538/api/empdetails/get/benchedemployee"
      );
      setCountBenchedEmp(allBenchedEmp.data);
      const employeeDetails = await axios.get(
        "http://localhost:2538/api/empdetails/get"
      );
      setEmpDetails(employeeDetails.data);

      const dtoDetails = await axios.get("http://localhost:2538/api/dto/get");
      authData.setDtoData(dtoDetails.data);
    } catch {
      console.log();
    }
  };
  useEffect(() => {
    // fetchApi();
    fetchNew();
  }, [authData.appliedFilters, authData.dtoDetails, authData.post,authData.requestDto]);

  const allowData = (emp) => {
    let Keys = Object.keys(authData.appliedFilters);
  
           
    //------------check for the location--------------------------//
    let okLocation = false; 
        if (authData.checkFilter["location"]) {
      //iterate over the filters..
      Keys.forEach((filterKey) => {
        if (
          filterKey === "gurugram" &&
          authData.appliedFilters[filterKey] === true &&
          emp.location == 1
        ) {
          okLocation = true;
        }

        if (
          filterKey === "bangalore" &&
          authData.appliedFilters[filterKey] === true &&
          emp.location == 2
        ) {
          okLocation = true;
        }
        if (
          filterKey === "hyderabad" &&
          authData.appliedFilters[filterKey] === true &&
          emp.location == 3
        ) {
          okLocation = true;
        }
      });
    }
  //------Check for Blocked status ----////
    let okStatus = false;
    // for Active status
    if (authData.checkFilter["status"]) {
      Keys.forEach((filterKey) => {
        if (
          filterKey === "blocked" &&
          authData.appliedFilters[filterKey] === true &&
          emp.blocked == true
        ) {
          okStatus = true;
        }

        if (
          filterKey === "notblocked" &&
          authData.appliedFilters[filterKey] === true &&
          emp.blocked == false
        ) {
          okStatus = true;
        }
      });
    }
    // return okStatus;
   if (
      authData.checkFilter["location"] &&
      authData.checkFilter["status"]
    ) 
    return okStatus && okLocation;
    else if(authData.checkFilter["status"])return okStatus;
    else
    return okLocation;
  };
  console.log(
    "Render..  " +
      JSON.stringify(authData.checkFilter) +
      " " +
      authData.experienceValue
  );
 
const[file,setFile]=useState([]);
const inputFile= useRef(null);

const handleChange=e=>{
  setFile([...file,e.target.files[0]]);
  
}
// console.log(file);
// console.log("new Data "+JSON.stringify(newData));
// console.log("exppppp "+authData.requestDto.experience+" "+authData.requestDto.benchPeriod);
// console.log("request dto "+JSON.stringify(authData.requestDto))
// console.log("applied filters "+JSON.stringify(authData.appliedFilters))

// console.log("check filters "+JSON.stringify(authData.checkFilter))
// console.log("default data "+JSON.stringify(authData.defaultData))
  return (
    <div className="window">
      <div className="top">
        <Navbar />
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <SideBar />
        </div>
        <div className="bottom-right">
          {/* <div className="statistics">
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
                  <h5 className="card-title">Recently removed from bench</h5>
                  <p className="card-text">{countActiveEmp}</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="actions">
            <p className="employees">EMPLOYEES</p>
            <div className="buttons">
              <ViewManager />
              <button className="button2" onClick={handleReport}>
              <i class="fa-solid fa-chart-simple"></i> &nbsp;
                VIEW REPORT
              </button>
            </div>
          </div>
          <div className="table">
            <div className="table-format">
              <table className="table">
                <thead className="thread1">
                  <tr className="tableHeader">
                    <th className="table-align-left" scope="col">
                      Block
                    </th>
                    <th className="table-align-left" scope="col">
                      Name
                    </th>
                    <th className="table-align-left" scope="col">
                      Email
                    </th>
                    <th className="table-align-left" scope="col">
                      Location
                    </th>
                    <th className="table-align-left" scope="col">
                      Bench_Aging
                    </th>
                    <th className="table-align-left" scope="col">
                      Resume
                    </th>
                    <th className="table-align-left" scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="thread1">
                  {authData.newData &&
                    authData.newData.map((emp) =>
                      // allowData(emp) == true &&
                      // (searchValue == "" ||
                      //   emp.employeeName
                      //     .toLowerCase()
                      //     .includes(searchValue)) ?
                          allowData(emp)==true? (
                  
                        <tr>
                          {/* <th className='pointer-to-profile' title="Click on ID to view profile" scope="row" onClick={() => { handleViewEmployee(); authData.handleEmpId(emp.employeeId); }} >{emp.employeeId}</th> */}
                          <th className="table-align-left">
                            {/* <Form>
                              {["checkbox"].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </div>
                              ))}
                            </Form> */}
                            <BlockEmployee/>
                          </th>
                          <td
                            className="pointer-to-profile" title="Click on ID to view profile" scope="row" onClick={() => {handleViewEmployee();authData.handleEmpId(emp.employeeId);}}>                                                                                              
                            {emp.employeeName}
                          </td>
                          <td className="table-align-left">
                            megha.mathur@accolitedigital.com
                          </td>
                          <td className="table-align-left">
                            {emp.location == 1
                              ? "Gurugram"
                              : emp.location == 2
                              ? "Bangalore"
                              : emp.location == 3
                              ? "Hyderabad"
                              : "none"}
                          </td>
                          <td className="table-align-left">
                            {emp.benchStatus == 0
                              ? "Removed From Bench"
                              : `${Math.round(emp.benchPeriod / 30)} Months, ${emp.benchPeriod%30} Days`}
                          </td>
                          {/* <td className="table-align-left"><UpdateEmployee id = {emp.employeeId}/></td> */}
                          <td className="table-align-left">
                            <UploadFile id={emp.employeeId}/>
                            <DownloadFile id={emp.employeeId} name={emp.employeeName}/>
                          </td>
                          
                          <td className="table-align-left-action">
                            <UpdateEmployee id={emp.employeeId}/>
                            {/* {" "} */}
                            &nbsp; &nbsp;
                          </td>
                        </tr>
                      )
                       : (
                        <tr></tr>
                      )
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
