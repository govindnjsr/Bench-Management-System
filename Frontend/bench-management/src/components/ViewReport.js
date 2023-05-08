import { useRef, useState, useContext, useEffect } from "react";
import { Bar, Pie, getElementsAtEvent } from "react-chartjs-2";
import { Category } from "react-chartjs-2";
import Chart from "chart.js/auto";
import NavBar from "./Navbar";
import "./Project.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import AuthContext from "./AuthContext";
import axios from "axios";
import Login from "./Login";

ChartJS.register(ArcElement, Tooltip, Legend);

function ViewReport(props) {
  const authData = useContext(AuthContext);
  const navigate = useNavigate();
 
  function handleBackButton() {
    authData.setShowSearchBar(true);
    navigate("/");
  }
 //console.log("locationAcess "+JSON.stringify(authData.locationAcess))
  const [curIndex, setCurrentIndex] = useState(-1);

  const loactionCounts = [];
  const [mydata, setData] = useState({
    labels: authData.pieChartLabels,
    datasets: [
      {
        // label: "On Bench",
        data: authData.countOfEachLocation,//[12,23,45]
        borderColor: [
          "rgba(250, 10, 10, 0.5)",
          "rgba(95, 60, 64, 0.5)",
          "rgba(25, 10, 104, 0.5)",
        ],
        borderWidth: 2,
        backgroundColor: [
          "rgba(250, 10, 10, 0.5)",
          "rgba(95, 60, 64, 0.5)",
          "rgba(25, 10, 104, 0.5)",
        ],
        hoverOffset: 15,
        link: [],
        set: 10,
      },
    ],
  });

  const options = {
    layout: {
      padding: {
        left: 15,
        right: 0,
        top: 2,
        bottom: 6,
      },
    },
  };
  const chartRef = useRef();
  const onClick = (event) => {
    if (getElementsAtEvent(chartRef.current, event).length > 0) {
      console.log(getElementsAtEvent(chartRef.current, event));
      const datasetIndexNum = getElementsAtEvent(chartRef.current, event)[0]
        .datasetIndex;
      const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;
      setCurrentIndex(dataPoint);
    }
  };
 useEffect(()=>{
  //rerendering...
 },[authData.loactionAcess])

 
  return authData.isAuthentication ? (
    <>
      {
        <div>
          <NavBar />
        </div>
      }
      {
        <div className="report-heading">
          <button className="button3"  onClick={handleBackButton} >
            <i className="fa-sharp fa-solid fa-arrow-left"></i> &nbsp;BACK
          </button>
          <h5>Representation of Business Units on the basis of Locations.</h5>
          <button className="reload"  onClick={handleBackButton} >
          <i class="fa-solid fa-rotate-right fa-lg"></i>
          </button>
        </div>
      }

      {
        <div className="view-report">
          <div className="representations">
            <div className="pie-chart">
              <h5>
                <i>
                  <center>
                    Click on pie to view data according to business units
                  </center>
                </i>
              </h5>
              <Pie
                data={mydata}
                options={options}
                onClick={onClick}
                ref={chartRef}
              ></Pie>
            </div>
            {curIndex === 0 ? (
              <div className="bar-graph">
                <h5>
                  <i>
                    <center>GURUGRAM : Data according to business units</center>
                  </i>
                </h5>
                <Bar
                  data={{
                    // Name of the variables on x-axies for each bar
                    labels: [
                      "BFSI Financial Services",
                      "BFSI Insurance",
                      "Consulting Services",
                      "Healthcare",
                      "Logistics",
                      "Media Telecom",
                      "Technology",
                    ],
                    datasets: [
                      {
                        label: "On bench : Gurugram",
                        // Data or value of your each variable
                        data: authData.gurugramBU,
                        // Color of each bar
                        backgroundColor: [
                          "rgba(255, 26, 104, 0.5)",
                          "rgba(54, 162, 235, 0.5)",
                          "rgba(255, 206, 86, 0.5)",
                          "rgba(75, 192, 192, 0.5)",
                          "rgba(153, 102, 255, 0.5)",
                          "rgba(255, 159, 64, 0.5)",
                          "rgba(0, 0, 0, 0.5)",
                        ],
                        // Border color of each bar
                        borderColor: [
                          "rgba(255, 26, 104, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                          "rgba(0, 0, 0, 1)",
                        ],
                        borderWidth: 2,
                      },
                    ],
                  }}
                  // Height of graph
                  // height={400}
                  options={{
                    layout: {
                      padding: {
                        left: 50,
                        top: 20,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        ticks: {
                          // The y-axis value will start from zero
                          beginAtZero: true,
                          precision: 0,
                        },
                      },
                    },
                    legend: {
                      labels: {
                        fontSize: 15,
                      },
                    },
                  }}
                />
              </div>
            ) : curIndex === 1 ? (
              <div className="bar-graph">
                <h5>
                  <i>
                    <center>BANGLORE : Data according to business units</center>
                  </i>
                </h5>
                <Bar
                  data={{
                    // Name of the variables on x-axies for each bar
                    labels: [
                      "BFSI Financial Services",
                      "BFSI Insurance",
                      "Consulting Services",
                      "Healthcare",
                      "Logistics",
                      "Media Telecom",
                      "Technology",
                    ],
                    datasets: [
                      {
                        label: "On bench : Bangalore",
                        // Data or value of your each variable
                        data: authData.bangaloreBU,
                        // Color of each bar
                        backgroundColor: [
                          "rgba(255, 26, 104, 0.5)",
                          "rgba(54, 162, 235, 0.5)",
                          "rgba(255, 206, 86, 0.5)",
                          "rgba(75, 192, 192, 0.5)",
                          "rgba(153, 102, 255, 0.5)",
                          "rgba(255, 159, 64, 0.5)",
                          "rgba(0, 0, 0, 0.5)",
                        ],
                        // Border color of each bar
                        borderColor: [
                          "rgba(255, 26, 104, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                          "rgba(0, 0, 0, 1)",
                        ],
                        borderWidth: 2,
                      },
                    ],
                  }}
                  // Height of graph
                  // height={400}
                  options={{
                    layout: {
                      padding: {
                        left: 50,
                        top: 20,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        ticks: {
                          // The y-axis value will start from zero
                          beginAtZero: true,
                          precision: 0,
                        },
                      },
                    },
                    legend: {
                      labels: {
                        fontSize: 15,
                      },
                    },
                  }}
                />
              </div>
            ) : curIndex === 2 ? (
              <div className="bar-graph">
                <h5>
                  <i>
                    <center>
                      HYDERABAD : Data according to business units
                    </center>
                  </i>
                </h5>
                <Bar
                  data={{
                    // Name of the variables on x-axies for each bar
                    labels: [
                      "BFSI Financial Services",
                      "BFSI Insurance",
                      "Consulting Services",
                      "Healthcare",
                      "Logistics",
                      "Media Telecom",
                      "Technology",
                    ],
                    datasets: [
                      {
                        label: "On bench : Hyderabad",
                        // Data or value of your each variable
                        data: authData.hyderabadBU,
                        // Color of each bar
                        backgroundColor: [
                          "rgba(255, 26, 104, 0.5)",
                          "rgba(54, 162, 235, 0.5)",
                          "rgba(255, 206, 86, 0.5)",
                          "rgba(75, 192, 192, 0.5)",
                          "rgba(153, 102, 255, 0.5)",
                          "rgba(255, 159, 64, 0.5)",
                          "rgba(0, 0, 0, 0.5)",
                        ],
                        // Border color of each bar
                        borderColor: [
                          "rgba(255, 26, 104, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                          "rgba(0, 0, 0, 1)",
                        ],
                        borderWidth: 2,
                      },
                    ],
                  }}
                  // Height of graph
                  // height={400}
                  options={{
                    layout: {
                      padding: {
                        left: 50,
                        top: 20,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        ticks: {
                          // The y-axis value will start from zero
                          beginAtZero: true,
                          precision: 0,
                        },
                      },
                    },
                    legend: {
                      labels: {
                        fontSize: 15,
                      },
                    },
                  }}
                />
              </div>
            ) : (
              <div className="bar-graph">
                <h5>
                  <i>
                    <center>Data according to business units</center>
                  </i>
                </h5>
                <Bar
                  data={{
                    // Name of the variables on x-axies for each bar
                    labels: [
                      "BFSI Financial Services",
                      "BFSI Insurance",
                      "Consulting Services",
                      "Healthcare",
                      "Logistics",
                      "Media Telecom",
                      "Technology",
                    ],
                    datasets: [
                      {
                        label: "On bench",
                        // Data or value of your each variable
                        // data: authData.hyderabadBU,
                        // Color of each bar
                        backgroundColor: [
                          "rgba(255, 26, 104, 0.5)",
                          "rgba(54, 162, 235, 0.5)",
                          "rgba(255, 206, 86, 0.5)",
                          "rgba(75, 192, 192, 0.5)",
                          "rgba(153, 102, 255, 0.5)",
                          "rgba(255, 159, 64, 0.5)",
                          "rgba(0, 0, 0, 0.5)",
                        ],
                        // Border color of each bar
                        borderColor: [
                          "rgba(255, 26, 104, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                          "rgba(0, 0, 0, 1)",
                        ],
                        borderWidth: 2,
                      },
                    ],
                  }}
                  // Height of graph
                  // height={900}
                  options={{
                    layout: {
                      padding: {
                        left: 50,
                        top: 20,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        ticks: {
                          // The y-axis value will start from zero
                          beginAtZero: true,
                          precision: 0,
                        },
                      },
                    },
                    legend: {
                      labels: {
                        fontSize: 15,
                      },
                    },
                  }}
                />
              </div>
            )}
          </div>
        </div>
      }
    </>
  ) : (
    <Login />
  );
}

export default ViewReport;
