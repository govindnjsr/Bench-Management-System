import React, { useState, useContext, useEffect } from "react";
import "./Project.css";
import AuthContext from "./AuthContext";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
export default function SideBar() {
  const authData = useContext(AuthContext);
 
// console.log(authData.currentRole);
 

  //Handle BU filters

  const handleBUFilter = (e) => {
    const { value, checked } = e.target;
    let True = true,
      False = false;


    if (checked) {
      authData.setAppliedFilters({
        ...authData.appliedFilters,
        [e.target.name]: True,
      });

      authData.setCheckFilter({
        ...authData.checkFilter,
        ["BU"]: authData.checkFilter["BU"] + 1,
      });


    }
    else {
      authData.setAppliedFilters({
        ...authData.appliedFilters,
        [e.target.name]: false,
      });
      authData.setCheckFilter({
        ...authData.checkFilter,
        ["BU"]: authData.checkFilter["BU"] - 1,
      });

    }
  }


  
  //Handle Location filters
  const handleLocationFilter = (e) => {
    const { value, checked } = e.target;
    let True = true,
      False = false;

    if (checked) {
      authData.setAppliedFilters({
        ...authData.appliedFilters,
        [e.target.name]: True,
      });
      authData.setCheckFilter({
        ...authData.checkFilter,
        ["location"]: authData.checkFilter["location"] + 1,
      });

    }
    else {
      authData.setAppliedFilters({
        ...authData.appliedFilters,
        [e.target.name]: false,
      });
      authData.setCheckFilter({
        ...authData.checkFilter,
        ["location"]: authData.checkFilter["location"] - 1,
      });

    }

  }
  //Handle Skills Filters
  const handleSkillsFilter = (e) => {
    const { value, checked } = e.target;
    let True = true,
      False = false;
    if (checked) {
      authData.setReqDto({
        ...authData.requestDto,
        [e.target.name]: True,
      });
      authData.setCheckFilter({
        ...authData.checkFilter,
        ["skill"]: authData.checkFilter["skill"] + 1,
      });

    }
    else {
      authData.setReqDto({
        ...authData.requestDto,
        [e.target.name]: False,
      });
      authData.setCheckFilter({
        ...authData.checkFilter,
        ["skill"]: authData.checkFilter["skill"] - 1,
      });

    }


  }
  //Handle State Filters
  const handleStateFilters = (e) => {
    const { value, checked } = e.target;
    let True = true,
      False = false;
    if (checked) {
      if (e.target.name === "notblocked" || e.target.name === "blocked") {
        authData.setAppliedFilters({
          ...authData.appliedFilters,
          [e.target.name]: True,
        });
        authData.setCheckFilter({
          ...authData.checkFilter,
          ["status"]: authData.checkFilter["status"] + 1,
        });

      }

    }
    else {
      if (e.target.name === "notblocked" || e.target.name === "blocked") {
        authData.setAppliedFilters({
          ...authData.appliedFilters,
          [e.target.name]: False,
        });
        authData.setCheckFilter({
          ...authData.checkFilter,
          ["status"]: authData.checkFilter["status"] - 1,
        });
      }
    }

  }

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
                ( {authData.requestDto.experience}+ Years)
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
                // authData.setExperienceValue(e.target.value);
                authData.setReqDto({
                  ...authData.requestDto,
                  ["experience"]: e.target.value - 1,
                });
              }}
              id="customRange2"
              value={authData.requestDto.experience}
            />
            <p className="sliderParaLeft">0 Years</p>
            <span className="sliderParaRightExpereince">10 Years</span>
          </div>


          <div className="filterByBenchTime">
            <p className="pfilter">
              BENCH AGING{" "}
              <span className="span-style">
                ( {authData.requestDto.benchPeriod} + Months)
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
                // authData.setBenchTimeValue(e.target.value);
                authData.setReqDto({
                  ...authData.requestDto,
                  ["benchPeriod"]: e.target.value - 1,
                });
              }}
              id="customRange2"
              value={authData.requestDto.benchPeriod}
            />
            <p className="sliderParaLeft">0 Months</p>
            <span className="sliderParaRightBench">12 Months</span>
          </div>


          <div className="accordian">
            <Accordion eventKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header><div className="pfilter">BUSINESS UNIT</div></Accordion.Header>
                <Accordion.Body>
                  <div className="filterByBusinessUnit">
                    <div className="form-check-sidebar">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="BFSIFinancialServices"
                        value={true}
                        onChange={handleBUFilter.bind(this)}
                        id="status-1"
                        checked={authData.appliedFilters.BFSIFinancialServices}
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
                        name="BFSIInsurance"
                        value={true}
                        onChange={handleBUFilter.bind(this)}
                        id="status-2"
                        checked={authData.appliedFilters.BFSIInsurance}
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
                        name="MediaTelecom"
                        value={true}
                        onChange={handleBUFilter.bind(this)}
                        id="status-2"
                        checked={authData.appliedFilters.MediaTelecom}
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
                        name="Logistics"
                        value={true}
                        onChange={handleBUFilter.bind(this)}
                        id="status-2"

                        checked={authData.appliedFilters.Logistics}

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
                        name="ConsultingServices"
                        value={true}
                        onChange={handleBUFilter.bind(this)}
                        id="status-2"
                        checked={authData.appliedFilters.ConsultingServices}
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
                        name="Technology"
                        value={true}
                        onChange={handleBUFilter.bind(this)}
                        id="status-2"
                        checked={authData.appliedFilters.Technology}
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
                        name="Healthcare"
                        value={true}
                        onChange={handleBUFilter.bind(this)}
                        id="status-2"
                        checked={authData.appliedFilters.Healthcare}
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
                      {
                        authData.locationAcess["Gurugram"] &&
                        <>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="gurugram"
                            value={true}
                            onChange={handleLocationFilter.bind(this)}
                            id="loc-1"
                            checked={authData.appliedFilters.gurugram}
                          />
                          <label
                            className="form-check-label skillsLabel"
                            htmlFor="skill-1"
                          >
                            Gurugram
                          </label>
                          <br />
                        </>
                      }
                      {
                        authData.locationAcess["Bangalore"]
                        &&
                        <>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="bangalore"
                            value={true}
                            onChange={handleLocationFilter.bind(this)}
                            id="loc-2"
                            checked={authData.appliedFilters.bangalore}
                          />
                          <label
                            className="form-check-label skillsLabel"
                            htmlFor="skill-2"
                          >
                            Bangalore
                          </label>
                          <br />
                        </>
                      }
                      {
                         authData.locationAcess["Hyderabad"] &&
                        <>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="hyderabad"
                          value={true}
                          onChange={handleLocationFilter.bind(this)}
                          id="loc-3"
                          checked={authData.appliedFilters.hyderabad}
                        />
                        <label
                          className="form-check-label skillsLabel"
                          htmlFor="skill-3"
                        >
                          Hyderabad
                        </label>
                        <br />
                      </>
                      }
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
                        onChange={handleSkillsFilter.bind(this)}
                        id="skill-1"
                        checked={authData.requestDto.java}
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
                        onChange={handleSkillsFilter.bind(this)}
                        id="skill-2"
                        checked={authData.requestDto.python}
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
                        onChange={handleSkillsFilter.bind(this)}
                        id="skill-3"
                        checked={authData.requestDto.react}
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
                        onChange={handleSkillsFilter.bind(this)}
                        id="skill-4"
                        checked={authData.requestDto.angular}
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
                        onChange={handleSkillsFilter.bind(this)}
                        id="skill-5"
                        checked={authData.requestDto.html}
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
                        onChange={handleSkillsFilter.bind(this)}
                        id="skill-6"
                        checked={authData.requestDto.css}
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
                        onChange={handleSkillsFilter.bind(this)}
                        id="skill-7"
                        checked={authData.requestDto.javascript}
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
                        onChange={handleSkillsFilter.bind(this)}
                        id="skill-8"
                        checked={authData.requestDto.springboot}
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
                        name="notblocked"
                        value={true}
                        onChange={handleStateFilters.bind(this)}
                        id="status-1"
                        checked={authData.appliedFilters.notblocked}
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
                        name="blocked"
                        value={true}
                        onChange={handleStateFilters.bind(this)}
                        id="status-2"
                        checked={authData.appliedFilters.blocked}
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
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
