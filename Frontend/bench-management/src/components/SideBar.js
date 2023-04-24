import React, { useState, useContext, useEffect } from "react";
import "./Project.css";
import AuthContext from "./AuthContext";
import Accordion from "react-bootstrap/Accordion";

export default function SideBar() {
  const authData = useContext(AuthContext);

  //  useEffect(() => {
  //    filterDataByBenchTime();
  //  }, [authData.benchTimeValue])
  const handleApplyFilter = () => {};
  const handleFiltersValue = (e) => {
    const { value, checked } = e.target;
    let True = true,
      False = false;
    if (checked) {
      authData.setAppliedFilters({
        ...authData.appliedFilters,
        [e.target.name]: True,
      });

      if (
        e.target.name == "gurugram" ||
        e.target.name == "bangalore" ||
        e.target.name == "hyderabad"
      ) {
        authData.setCheckFilter({
          ...authData.checkFilter,
          ["location"]: authData.checkFilter["location"] + 1,
        });
      } else if (e.target.name === "active" || e.target.name === "benched") {
        authData.setCheckFilter({
          ...authData.checkFilter,
          ["status"]: authData.checkFilter["status"] + 1,
        });
      } else {
        authData.setCheckFilter({
          ...authData.checkFilter,
          ["skill"]: authData.checkFilter["skill"] + 1,
        });
      }
    } else {
      authData.setAppliedFilters({
        ...authData.appliedFilters,
        [e.target.name]: False,
      });
      if (
        e.target.name == "gurugram" ||
        e.target.name == "bangalore" ||
        e.target.name == "hyderabad"
      ) {
        authData.setCheckFilter({
          ...authData.checkFilter,
          ["location"]: authData.checkFilter["location"] - 1,
        });
      } else if (e.target.name === "active" || e.target.name === "benched") {
        authData.setCheckFilter({
          ...authData.checkFilter,
          ["status"]: authData.checkFilter["status"] - 1,
        });
      } else {
        authData.setCheckFilter({
          ...authData.checkFilter,
          ["skill"]: authData.checkFilter["skill"] - 1,
        });
      }
    }
  };
  return (
    <>
      <div className="filterHeading">
        <p className="pfilterHeading">SORT BY FILTERS</p>
      </div>
      <div className="left-panel">
        <div className="filterContainer">
          <div className="filterByExperience">
            <p className="pfilter">
              EXPERIENCE{" "}
              <span className="span-style">
                ( {authData.experienceValue -1 }+ Years)
              </span>
            </p>
            <label htmlFor="customRange2" className="form-label"></label>
            <input
              type="range"
              className="form-range experienceClass"
              min="1"
              max="10"
              defaultValue="0"
              onChange={(e) => {
                authData.setExperienceValue(e.target.value);
              }}
              id="customRange2"
            />
            <p className="sliderParaLeft">0 Years</p>
            <span className="sliderParaRightExpereince">10 Years</span>
          </div>

          <div className="filterByBenchTime">
            <p className="pfilter">
              BENCH TIME{" "}
              <span className="span-style">
                ( {authData.benchTimeValue -1 }+ Months)
              </span>
            </p>
            <label htmlFor="customRange2" className="form-label"></label>
            <input
              type="range"
              className="form-range benchTimeSliderClass"
              min="1"
              max="12"
              defaultValue="0"
              onChange={(e) => {
                authData.setBenchTimeValue(e.target.value);
              }}
              id="customRange2"
            />
            <p className="sliderParaLeft">0 Months</p>
            <span className="sliderParaRightBench">12 Months</span>
          </div>
          <div className="accordian">
            <Accordion eventKey={["0"]}>
              <Accordion.Item eventKey="0">
                <Accordion.Header><div className="pfilter">BUSINESS UNIT</div></Accordion.Header>
                <Accordion.Body>
                <div className="filterByBusinessUnit">
                    <div className="form-check-sidebar">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="1"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="status-1"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="status-1"
                      >
                       BFSI Financial Services
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="2"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="status-2"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="status-2"
                      >
                     BFSI Insurance
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="3"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="status-2"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="status-2"
                      >
                      Media Telecom
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="4"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="status-2"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="status-2"
                      >
                      Logistics
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="5"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="status-2"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="status-2"
                      >
                       Consulting Services
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="6"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="status-2"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="status-2"
                      >
                       Technology
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="7"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="status-2"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="status-2"
                      >
                       Healthcare
                      </label>
                      <br />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                <div className="pfilter">LOCATION</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="filterByLocation">
                    <div className="form-check-sidebar">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="gurugram"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="loc-1"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="skill-1"
                      >
                        Gurugram
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="bangalore"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="loc-2"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="skill-2"
                      >
                        Bangalore
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hyderabad"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="loc-3"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="skill-3"
                      >
                        Hyderabad
                      </label>
                      <br />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><div className="pfilter">SKILLS</div></Accordion.Header>
                <Accordion.Body>
                  <div className="filterBySkills">
                    <div className="form-check-sidebar">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="java"
                        value={"1"}
                        onChange={handleFiltersValue.bind(this)}
                        id="skill-1"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="skill-1"
                      >
                        Java
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="python"
                        value={"1"}
                        onChange={handleFiltersValue.bind(this)}
                        id="skill-2"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="skill-2"
                      >
                        Python
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="react"
                        value={"1"}
                        onChange={handleFiltersValue.bind(this)}
                        id="skill-3"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="skill-3"
                      >
                        React
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="angular"
                        value={"1"}
                        onChange={handleFiltersValue.bind(this)}
                        id="skill-4"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="skill-4"
                      >
                        Angular
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="html"
                        value={"1"}
                        onChange={handleFiltersValue.bind(this)}
                        id="skill-5"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="skill-5"
                      >
                        HTML
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="css"
                        value={"1"}
                        onChange={handleFiltersValue.bind(this)}
                        id="skill-6"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="skill-6"
                      >
                        CSS
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="javascript"
                        value={"1"}
                        onChange={handleFiltersValue.bind(this)}
                        id="skill-7"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="skill-7"
                      >
                        JavaScript
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="springboot"
                        value={"1"}
                        onChange={handleFiltersValue.bind(this)}
                        id="skill-8"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="skill-8"
                      >
                        SpringBoot
                      </label>
                      <br />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header><div className="pfilter">STATUS</div></Accordion.Header>
                <Accordion.Body>
                  <div className="filterByStatus">
                    <div className="form-check-sidebar">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="active"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="status-1"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="status-1"
                      >
                        Not Blocked
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="benched"
                        value={true}
                        onChange={handleFiltersValue.bind(this)}
                        id="status-2"
                      />
                      <label
                        className="form-check-label skillsLabel"
                        htmlFor="status-2"
                      >
                        Blocked
                      </label>
                      <br />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
