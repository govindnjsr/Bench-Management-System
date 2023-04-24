import React, { useState, useContext, NavLink } from "react";
import logoImage from "./Images/accoliteLogo.png";
import Dropdown from "react-bootstrap/Dropdown";
import AuthContext from "./AuthContext";
import search from "./Images/search.png";
export default function NavBar() {
  const authData = useContext(AuthContext);
  const userImageUrl = authData.googleData.picture;
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="NavbarComponent">
        <div className="logoContainer">
          <img className="logoImageClass" src={logoImage} alt="accoliteLogo" />
        </div>

        <div className="NavbarHeading">
          <div class="col-md-5 mobile-inlineBlock">
            <div
            
              class="search-header searchbar-home focusIcon"
              data-step="1"
              data-tooltipclass="db-intro-step-first"
              data-intro="<b>Search Bar</b> <hr style = 'padding: 0px; border:1px dashed #cccccc;'> Top navigation is replaced by universal search across the application to easily search colleagues and visit their profile "
              data-position="bottom"
            >
              <input
                type="text"
                class="global-search ui-autocomplete-input"
                id="employee-search_dashboard"
                placeholder="Search by Employee Name"
                autocomplete="off"
              />
            </div>
          </div>
        </div>

        <div className="profile">
          <div className="NavbarDropDown">
            <Dropdown className="MainprofileDiv">
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-basic"
                className="profileUserName"
                 
              >
                <img
                  className="googleImage"
                  src={userImageUrl}
                  alt="googleImage"
                />
                {/* {authData.googleData.given_name}{" "}
                {authData.googleData.family_name} */}
              </Dropdown.Toggle>

              <Dropdown.Menu align="end" className="NavbarDropDownMenu">
                <Dropdown.Item href="" onClick={authData.handleLogout}>
                  <span style={{ fontSize: "12px" }}>Logout</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}
