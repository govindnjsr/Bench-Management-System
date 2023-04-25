import { useRef } from "react";
import { Bar, Pie, getElementsAtEvent } from "react-chartjs-2";
import { Category } from "react-chartjs-2";
import Chart from "chart.js/auto";
import NavBar from "./Navbar";
import "./Project.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ViewReport() {
  const navigate = useNavigate();
  function handleBackButton() {
    navigate("/");
  }

  const data = {
    labels: ["Gurugram", "Banglore", "Hyderabad"],
    datasets: [
      {
        label: "On Bench",
        data: [10, 20, 15],
        borderColor: "black",
        backgroundColor: ["red", "blue", "purple"],
        // link: [
        //   "https://www.chartjs3.com",
        //   "https://www.chartjs4.com",
        //   "https://www.chartjs.com",
        // ],
      },
    ],
  };

  const options = {};

  const chartRef = useRef();
  const onClick = (event) => {
    if (getElementsAtEvent(chartRef.current, event).length > 0) {
      const datasetIndexNum = getElementsAtEvent(chartRef.current, event)[0]
        .datasetIndex;
      const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;
      console.log(`Dataset:${datasetIndexNum} and Data: ${dataPoint}`);
      // console.log(data.datasets[datasetIndexNum].link[dataPoint]);
      // window.open(data.datasets[datasetIndexNum].link[dataPoint], "_blank");
    }
  };

  return (
    <div className="view-report">
      <div>
        <NavBar />
      </div>
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
      <div className="representations">
        <div className="pie-chart">
          <Pie
            data={data}
            options={options}
            onClick={onClick}
            ref={chartRef}
          ></Pie>
        </div>
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
                  data: [1, 10, 6, 14, 12, 2, 10],
                  // Color of each bar
                  backgroundColor: [
                    "aqua",
                    "green",
                    "red",
                    "yellow",
                    "yellow",
                    "yellow",
                    "yellow",
                  ],
                  // Border color of each bar
                  borderColor: [
                    "aqua",
                    "green",
                    "red",
                    "yellow",
                    "yellow",
                    "yellow",
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
      </div>
    </div>
  );
}

export default ViewReport;
