import React, { useState, useEffect, useContext, useRef } from "react";
import "./Project.css";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import axios from "axios";
import UpdateEmployee from "./UpdateEmployee";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import UploadFile from "./UploadFile";
import DownloadFile from "./DownloadFile";
import BlockEmployee from "./BlockEmployee";

export default function AdminDashboard() {
  const authData = useContext(AuthContext);
  const [verifyLocation, setVerifyLocation] = useState({
    '1': false,
    '2': false,
    '3': false
  })
  console.log("loc : " + JSON.stringify(verifyLocation));
  const [allManagerDetails, setAllManagerDetails] = useState();
  const navigate = useNavigate();
  const handleViewEmployee = () => {
    authData.setShowSearchBar(false);
    navigate("/viewEmployee");
  };

  const handleReport = () => {
    authData.setShowSearchBar(false);
    navigate('/viewReport');
  }
console.log("Location access testing"+JSON.stringify(authData.assignedLocation));
  const fetchApis = async () => {

    try {
      
      const allnewDto = await axios.post(
        "http://localhost:2538/api/dto/get/filterd", authData.requestDto
      );
      authData.setNewData(allnewDto.data);

      //count emp locatin wise 
      const countOfEachLoc = await axios.get(
        "http://localhost:2538/api/empdetails/get/countOfEachLocation"
      ).then((res)=>{        
        let tempData=[];
           res.data.forEach(element => {
                console.log(element.count)
                tempData.push(parseInt(element.count));
           });
           authData.setCountOfEachLocation(tempData);           
      })
      //count of All BU location wise 
      //gurugram
      const countOfGurugramBU = await axios.get(
        "http://localhost:2538/api/empdetails/get/gurugramBU"
        ).then((res)=>{
            authData.setGurugramBU(res.data);      
      })
      //Bangalore
      const countOfBangaloreBU = await axios.get(
        "http://localhost:2538/api/empdetails/get/bangaloreBU"
      ).then((res)=>{       
            authData.setBangaloreBU(res.data);         
      })
       //hyderabad
       const countOfHyderabadBU = await axios.get(
        "http://localhost:2538/api/empdetails/get/hyderabadBU"
      ).then((res)=>{
            authData.setHyderabadBU(res.data);       
      })

    }
    catch {
      console.log();
    }
  }

  console.log('managerId : ' + authData.managerId)
  console.log(allManagerDetails);
  const fetchNew = async () => {
    try {
      const managerApiDetails = await axios.get('http://localhost:2538/api/manager/get')
        .then((response) => {
          setAllManagerDetails(response.data);
          response.data.map(key => {
            if (key.id === authData.managerId) {
              key.assignedLocation.map(loc => {
                if (loc.locName == "Gurugram") {
                  verifyLocation[1] = true;
                }
                if (loc.locName == "Bangalore") {
                  verifyLocation[2] = true;
                }
                if (loc.locName == "Hyderabad") {
                  verifyLocation[3] = true;
                }
              })
            }
          })
        })




      const allnewDto = await axios.post(
        "http://localhost:2538/api/dto/get/filterd", authData.requestDto
      );
      authData.setNewData(allnewDto.data);
    }
    catch {
      console.log();
    }
  }


  useEffect(() => {
    // fetchApi();
    fetchNew();
    fetchApis();
  }, [authData.appliedFilters, authData.dtoDetails, authData.post, authData.requestDto]);

  const allowData = (emp) => {
    let Keys = Object.keys(authData.appliedFilters);

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

  const getColor = (color) => {
    if (color) return 'red';
    return '';
};
  // console.log(file);
  // console.log("new Data "+JSON.stringify(authData.newData));
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
          <div className="actions-manager">
            <p className="employees">EMPLOYEES</p>
            <button className="button2" onClick={handleReport}>
              <i className="fa-solid fa-chart-simple"></i> &nbsp;
              VIEW REPORT
            </button>
            {/* </div> */}
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
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody className="thread1">
                  {authData.newData &&
                    authData.newData.map((emp) =>
                      allowData(emp) == true &&
                        (verifyLocation[emp.location]) &&
                        (authData.searchValue == "" ||
                          emp.employeeName
                            .toLowerCase()
                            .includes(authData.searchValue)) ? (
                        <tr style={{color:getColor(emp.blocked)}}>
                          {/* <th className='pointer-to-profile' title="Click on ID to view profile" scope="row" onClick={() => { handleViewEmployee(); authData.handleEmpId(emp.employeeId); }} >{emp.employeeId}</th> */}
                          <th className="table-align-left">
                            <BlockEmployee id={emp.employeeId} blocked={emp.blocked} />
                          </th>
                          <td
                            className="pointer-to-profile" title="Click on ID to view profile" scope="row" onClick={() => { handleViewEmployee(); authData.handleEmpId(emp.employeeId); }}>
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
