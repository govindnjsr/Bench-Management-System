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
    authData.setShowSearchBar(false);
    navigate("/viewEmployee");
  };

  const handleReport = () => {
    authData.setShowSearchBar(false);
    navigate('/viewReport');
  }
  const [countAllEmployees, setCountAllEmployees] = useState();
  const [countActiveEmp, setCountActiveEmp] = useState();
  const [countBenchedEmp, setCountBenchedEmp] = useState();
  const [empdetails, setEmpDetails] = useState();
  const [filterDataOfDto, setFilterDataOfDto] = useState();
  const [rowsReturned, setRowsReturned] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  
  //----Precalculatino Stuff -----//
  const checkBU=(BU)=>{
    if(BU=="BFSI Financial Services")return 1;
    if(BU=="BFSI Insurance")return 2;
    if(BU=="Media Telecom")return 3;
    if(BU=="Logistics")return 4;
    if(BU=="Consulting Services")return 5;
    if(BU=="Technology")return 6;
    if(BU=="Healthcare")return 7;

  }
  const preLoadData=()=>{

    //count total no of employee on a particular location
      let g=0,b=0,h=0;
      let g1=0,g2=0,g3=0,g4=0,g5=0,g6=0,g7=0;
      let h1=0,h2=0,h3=0,h4=0,h5=0,h6=0,h7=0;
      let b1=0,b2=0,b3=0,b4=0,b5=0,b6=0,b7=0;
      authData.allData && authData.allData.map((emp)=>{
        console.log(emp.empLocation+" "+typeof(emp.empLocation))
        // 
           if(emp.empLocation==1){
            g++;
           if(checkBU(emp.businessUnit)==1)g1++;
           if(checkBU(emp.businessUnit)==2)g2++;
           if(checkBU(emp.businessUnit)==3)g3++;
           if(checkBU(emp.businessUnit)==4)g4++;
           if(checkBU(emp.businessUnit)==5)g5++;
           if(checkBU(emp.businessUnit)==6)g6++;
           if(checkBU(emp.businessUnit)==7)g7++;
           
          }
          else if(emp.empLocation==2){
                  h++;
                  if(checkBU(emp.businessUnit)==1)h1++;
                  if(checkBU(emp.businessUnit)==2)h2++;
                  if(checkBU(emp.businessUnit)==3)h3++;
                  if(checkBU(emp.businessUnit)==4)h4++;
                  if(checkBU(emp.businessUnit)==5)h5++;
                  if(checkBU(emp.businessUnit)==6)h6++;
                  if(checkBU(emp.businessUnit)==7)h7++;
          }
          else{
            b++;
            if(checkBU(emp.businessUnit)==1)b1++;
            if(checkBU(emp.businessUnit)==2)b2++;
            if(checkBU(emp.businessUnit)==3)b3++;
            if(checkBU(emp.businessUnit)==4)b4++;
            if(checkBU(emp.businessUnit)==5)b5++;
            if(checkBU(emp.businessUnit)==6)b6++;
            if(checkBU(emp.businessUnit)==7)b7++;
          }          
      })
      //locations
      authData.locationWiseEmployeeCount.push(parseInt(g));
      authData.locationWiseEmployeeCount.push(parseInt(b));
      authData.locationWiseEmployeeCount.push(parseInt(h));
      //gurugram
      authData.gurugramBU.push(parseInt(g1));
      authData.gurugramBU.push(parseInt(g2));
      authData.gurugramBU.push(parseInt(g3));
      authData.gurugramBU.push(parseInt(g4));
      authData.gurugramBU.push(parseInt(g5));
      authData.gurugramBU.push(parseInt(g6));
      authData.gurugramBU.push(parseInt(g7));
      //hyderabad
      authData.hyderabadBU.push(parseInt(h1));
      authData.hyderabadBU.push(parseInt(h2));
      authData.hyderabadBU.push(parseInt(h3));
      authData.hyderabadBU.push(parseInt(h4));
      authData.hyderabadBU.push(parseInt(h5));
      authData.hyderabadBU.push(parseInt(h6));
      authData.hyderabadBU.push(parseInt(h7));
      //banglore
      authData.bangaloreBU.push(parseInt(b1));
      authData.bangaloreBU.push(parseInt(b2));
      authData.bangaloreBU.push(parseInt(b3));
      authData.bangaloreBU.push(parseInt(b4));
      authData.bangaloreBU.push(parseInt(b5));
      authData.bangaloreBU.push(parseInt(b6));
      authData.bangaloreBU.push(parseInt(b7));

      //

  }
  



  const fetchNew = async () => {
    try {

      const allnewDto = await axios.post(
        "http://localhost:2538/api/dto/get/filterd", authData.requestDto
      );
      authData.setNewData(allnewDto.data);

      const allData = await axios.get(
        "http://localhost:2538/api/empdetails/get"
      ).then((response)=>{
        authData.setAlldata(response.data);
      })
    }
    catch {
      console.log();
    }
  }

  useEffect(() => {
    // fetchApi();
    fetchNew();
  
  }, [authData.appliedFilters, authData.dtoDetails, authData.post,authData.requestDto]);
 useEffect(()=>{
  preLoadData();
 },[authData.allData])
  const allowData = (emp) => {
    let Keys = Object.keys(authData.appliedFilters);
    //-------------byDefault Based on Skill--------------------------//
    if (authData.checkFilter["skill"] === 0) {
      return true;
    }

    //----------Check for BU-----------------------------//
    let okBU = false;
    if (authData.checkFilter["BU"]) {
      Keys.forEach((filterKey) => {
        if (filterKey === "BFSI Financial Services" && authData.appliedFilters[filterKey] === true &&
          emp.businessUnit === "BFSI Financial Services")
          okBU = true;

        if (filterKey === "Media Telecom" && authData.appliedFilters[filterKey] === true &&
          emp.businessUnit === "Media Telecom")
          okBU = true;

        if (filterKey === "Logistics" && authData.appliedFilters[filterKey] === true &&
          emp.businessUnit === "Logistics")
          okBU = true;

        if (filterKey === "Technology" && authData.appliedFilters[filterKey] === true &&
          emp.businessUnit === "Technology")
          okBU = true;

        if (filterKey === "Healthcare" && authData.appliedFilters[filterKey] === true &&
          emp.businessUnit === "Healthcare")
          okBU = true;

        if (filterKey === "Consulting Services" && authData.appliedFilters[filterKey] === true &&
          emp.businessUnit === "Consulting Services")
          okBU = true;

        if (filterKey === "BFSI Insurance" && authData.appliedFilters[filterKey] === true &&
          emp.businessUnit === "BFSI Insurance")
          okBU = true;

      })
    }

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
      authData.checkFilter["status"] && authData.checkFilter["BU"]
    )
      return okStatus && okLocation && okBU;
    else if (authData.checkFilter["location"] && authData.checkFilter["status"])
      return okLocation && okStatus;
    else if (authData.checkFilter["location"] && authData.checkFilter["BU"])
      return okLocation && okBU;
    else if (authData.checkFilter["status"] && authData.checkFilter["BU"])
      return okBU && okStatus;
    else if (authData.checkFilter["status"]) return okStatus;
    else if (authData.checkFilter["BU"]) return okBU;
    else if (authData.checkFilter["location"]) return okLocation;
    else return true;
  };


  console.log(
    "Render..  " +
    JSON.stringify(authData.checkFilter) +
    " " +
    authData.experienceValue
  );

  const [file, setFile] = useState([]);
  const inputFile = useRef(null);

  const handleChange = e => {
    setFile([...file, e.target.files[0]]);

  }
  // console.log(file);
  console.log("new Data " + JSON.stringify(authData.newData));
  console.log("exppppp " + authData.requestDto.experience + " " + authData.requestDto.benchPeriod);
  console.log("request dto " + JSON.stringify(authData.requestDto))
  console.log("applied filters " + JSON.stringify(authData.appliedFilters))

  console.log("check filters " + JSON.stringify(authData.checkFilter))
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
          <div className="actions-admin">
            <p className="employees">EMPLOYEES</p>
            <div className="buttons">
              <ViewManager />
              <button className="button2" onClick={handleReport}>
                <i className="fa-solid fa-chart-simple"></i> &nbsp;
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
                      allowData(emp) == true &&
                        (authData.searchValue == "" ||
                          emp.employeeName
                            .toLowerCase()
                            .includes(authData.searchValue)) ? (

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
                            <BlockEmployee />
                          </th>
                          <td
                            className="pointer-to-profile" title="Click on Name to view profile" scope="row" onClick={() => { handleViewEmployee(); authData.handleEmpId(emp.employeeId); }}>
                            {emp.employeeName}
                          </td>
                          <td className="table-align-left">
                            {emp.email}
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
                              : `${Math.round(emp.benchPeriod * 0.032855)} Months, ${emp.benchPeriod % 30} Days`}
                          </td>
                          {/* <td className="table-align-left"><UpdateEmployee id = {emp.employeeId}/></td> */}
                          <td className="table-align-left">
                            <UploadFile id={emp.employeeId} />
                            <DownloadFile id={emp.employeeId} name={emp.employeeName} />
                          </td>

                          <td className="table-align-left-action">
                            <UpdateEmployee id={emp.employeeId} />
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
