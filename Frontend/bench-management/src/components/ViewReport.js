import { Bar } from "react-chartjs-2";
// import { Category } from "react-chartjs-2";
// import Chart from "chart.js/auto";
import NavBar from "./Navbar";
import "./Project.css";
import React, { Component } from "react";
import CanvasJSReact from "../canvasjs.react";
import { Category } from "react-chartjs-2";
import Chart from "chart.js/auto";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var flag=false;

function ViewReport() {
  var label;
  const options = {
    theme: "",
    animationEnabled: true,
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label} :{y}%",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
		click: displayChart,
        dataPoints: [
          { y: 32, label: "Bangalore" },
          { y: 22, label: "Gurugram" },
          { y: 15, label: "Hyderabad" },
        ],
      },
    ],
  };

  function displayChart(label){
	if (label === "Gurugram"){
		console.log("Clicked");
	}
  }


  return (
	
    <div className="view-report">
      <div>
        <NavBar />
      </div>
      <div className="report-heading">
        <h5>Representation of Business Units on the basis of Locations.</h5>
      </div>
      <div className="representations">
        <div className="pie-chart">
			
          <CanvasJSChart options={options} />
          {}
        </div>
        <div className="bar-graph">
			
          <div style={{ maxWidth: "725px" }}>
            <Bar
              data={{
                // Name of the variables on x-axies for each bar
                labels: ["BFSI Financial Services", "BFSI Insurance", "Media Telecom", "Logistics","Consulting Services","Technology","Healthcare"],
                datasets: [
                  {
					label:"On bench",
                    // Data or value of your each variable
                    data: [1, 10, 6, 14,12,2,10],
                    // Color of each bar
                    backgroundColor: ["aqua", "green", "red", "yellow", "yellow", "yellow", "yellow"],
                    // Border color of each bar
                    borderColor: ["aqua", "green", "red", "yellow", "yellow", "yellow", "yellow"],
                    borderWidth: 0.5,
                  },
                ],
              }}
              // Height of graph
              height={400}
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
    </div>
  );
}

export default ViewReport;
