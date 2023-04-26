import { useRef, useState,useContext ,useEffect} from "react";
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
ChartJS.register(ArcElement, Tooltip, Legend);

function ViewReport() {
  const authData=useContext(AuthContext);
  const navigate = useNavigate();
  function handleBackButton() {
    authData.setShowSearchBar(true);
    navigate("/");
  }
 
  const [curIndex,setCurrentIndex]=useState(-1);

  const loactionCounts=[];
  
  const [mydata,setData]=useState({
    labels: ["Gurugram", "Banglore", "Hyderabad"],
    datasets: [
      {
        label: "On Bench",
        data: authData.countOfEachLocation,
        borderColor: "black",
        backgroundColor: ["red", "blue", "purple"],
        link: [],
      },
    ],
  })

  const options = {};  
  const chartRef = useRef();
  const onClick = (event) => {
    if (getElementsAtEvent(chartRef.current, event).length > 0) {
      const datasetIndexNum = getElementsAtEvent(chartRef.current, event)[0]
        .datasetIndex;
      const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;
      setCurrentIndex(dataPoint);
    }
  };

 
  return (
    <>
     {(<div>
        <NavBar />
      </div>)    
      }
      {
        <div className="report-heading">
        <h5>Representation of Business Units on the basis of Locations.</h5>
        <button
          className="button3"
          onClick={handleBackButton}
          style={{ position: "fixed", right: "0.1%" }}
        >
          <i className="fa-sharp fa-solid fa-arrow-left"></i> &nbsp;BACK
        </button>
      </div>
      }

    {<div className="view-report">      
      <div className="representations">
        <div className="pie-chart">
          <Pie
            data={mydata}
            options={options}
            onClick={onClick}
            ref={chartRef}
          ></Pie>
        </div>   
        {      
      curIndex===0? (<div className="bar-graph">
       <Bar
         data={{
           // Name of the variables on x-axies for each bar
           labels: [
             "BFSI Financial Services",
             "BFSI Insurance",
             "Media Telecom",
             "Logistics",
             "Consulting Services",
             "Technology",
             "Healthcare",
           ],
           datasets: [
             {
               label: "On bench",
               // Data or value of your each variable
               data: authData.gurugramBU,
               // Color of each bar
               backgroundColor: [
                 "aqua",
                 "green",
                 "red",
                 "gray",
                 "orange",
                 "black",
                 "yellow",
               ],
               // Border color of each bar
               borderColor: [
                "aqua",
                "green",
                "red",
                "gray",
                "orange",
                "black",
                "yellow",
               ],
               borderWidth: 0.5,
             },
           ],
         }}
         // Height of graph
         // height={400}
         options={{
           maintainAspectRatio: false,
           scales: {
             yAxes: [
               {
                 ticks: {
                   // The y-axis value will start from zero
                   beginAtZero: true,
                 },
               },
             ],
           },
           legend: {
             labels: {
               fontSize: 15,
             },
           },
         }}
       />
     </div>):
     curIndex===1?(
      <div className="bar-graph">
      <Bar
        data={{
          // Name of the variables on x-axies for each bar
          labels: [
            "BFSI Financial Services",
            "BFSI Insurance",
            "Media Telecom",
            "Logistics",
            "Consulting Services",
            "Technology",
            "Healthcare",
          ],
          datasets: [
            {
              label: "On bench",
              // Data or value of your each variable
              data: authData.bangaloreBU,
              // Color of each bar
              backgroundColor: [
                "aqua",
                 "green",
                 "red",
                 "gray",
                 "orange",
                 "black",
                 "yellow",
              ],
              // Border color of each bar
              borderColor: [
                "aqua",
                 "green",
                 "red",
                 "gray",
                 "orange",
                 "black",
                 "yellow",
              ],
              borderWidth: 0.5,
            },
          ],
        }}
        // Height of graph
        // height={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  // The y-axis value will start from zero
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 15,
            },
          },
        }}
      />
    </div>
     ):(
      <div className="bar-graph">
      <Bar
        data={{
          // Name of the variables on x-axies for each bar
          labels: [
            "BFSI Financial Services",
            "BFSI Insurance",
            "Media Telecom",
            "Logistics",
            "Consulting Services",
            "Technology",
            "Healthcare",
          ],
          datasets: [
            {
              label: "On bench",
              // Data or value of your each variable
              data: authData.hyderabadBU,
              // Color of each bar
              backgroundColor: [
                "aqua",
                "green",
                "red",
                "gray",
                "orange",
                "black",
                "yellow",
              ],
              // Border color of each bar
              borderColor: [
                "aqua",
                 "green",
                 "red",
                 "gray",
                 "orange",
                 "black",
                 "yellow",
              ],
              borderWidth: 0.5,
            },
          ],
        }}
        // Height of graph
        // height={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  // The y-axis value will start from zero
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 15,
            },
          },
        }}
      />
    </div>
     )
     }   
  
      </div>
    </div>
    }
    
    </>
    
  );
}

export default ViewReport;
