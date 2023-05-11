import React, { useState, useContext, useEffect } from "react";
import "./Project.css";
import AuthContext from "./AuthContext";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";


export default function SideBar() {
  const authData = useContext(AuthContext);
  const [BUList, setBUList] = useState([]);
  const [LocationList, setLocationList] = useState([]);
  const [SkillList, setSkillList] = useState([]);

  const fetchApis = async () => {
    // let itemList=[];
    try {
      const list1 = await axios
        .get("http://localhost:2538/api/empdetails/get/BU")
        .then((res) => {
          setBUList(res.data);
        });
      const List2 = await axios
        .get("http://localhost:2538/api/empdetails/get/Location")
        .then((res) => {
          let tempData=[];
          res.data.forEach(element => {                
               tempData.push(element.toLowerCase());
          })
          setLocationList(tempData);
        });

      const List3 = await axios
        .get("http://localhost:2538/api/skill/get/skill")
        .then((res) => {
          setSkillList(res.data);
        });
    } catch {
      console.log();
    }
  };

  useEffect(() => {
    fetchApis();
  }, []);

  const itemList = ["Item1", "Item2", "Item3", "Item4", "Item5"];
  console.log("itemlist" + BUList);

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
    } else {
      authData.setAppliedFilters({
        ...authData.appliedFilters,
        [e.target.name]: false,
      });
      authData.setCheckFilter({
        ...authData.checkFilter,
        ["BU"]: authData.checkFilter["BU"] - 1,
      });
    }
  };

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
    } else {
      authData.setAppliedFilters({
        ...authData.appliedFilters,
        [e.target.name]: false,
      });
      authData.setCheckFilter({
        ...authData.checkFilter,
        ["location"]: authData.checkFilter["location"] - 1,
      });
    }
  };
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
    } else {
      authData.setReqDto({
        ...authData.requestDto,
        [e.target.name]: False,
      });
      authData.setCheckFilter({
        ...authData.checkFilter,
        ["skill"]: authData.checkFilter["skill"] - 1,
      });
    }
  };
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
    } else {
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
                <Accordion.Header>
                  <div className="pfilter">BUSINESS UNIT</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="filterByBusinessUnit">
                    {BUList.map((item, index) => (
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={item}
                          id={index}
                          value={true}
                          checked={authData.appliedFilters.this}
                          onChange={handleBUFilter.bind(this)}
                        />
                        <label className="form-check-label" htmlFor={index}>
                          {item = item.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="pfilter">LOCATION</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="filterByBusinessUnit">
                    {LocationList.map((item, index) => (
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={item}
                          id={index}
                          value={true}
                          checked={authData.appliedFilters.this}
                          onChange={handleLocationFilter.bind(this)}
                        />
                        <label className="form-check-label" htmlFor={index}>
                          {item.charAt(0).toUpperCase()+item.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className="pfilter">SKILLS</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="filterBySkills">
                    {SkillList.map((item, index) => (
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={item}
                          id={index}
                          value={true}
                          checked={authData.appliedFilters.this}
                          onChange={handleSkillsFilter.bind(this)}
                        />
                        <label className="form-check-label" htmlFor={index}>
                          {item.charAt(0).toUpperCase()+item.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className="pfilter">STATUS</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="filterByStatus">
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
