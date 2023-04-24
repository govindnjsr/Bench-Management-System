import React, { useState, useContext, NavLink } from "react";
import logoImage from "./Images/accoliteLogo.png";
import Dropdown from "react-bootstrap/Dropdown";
import AuthContext from "./AuthContext";
import search from "./Images/search.png";
export default function NavBar() {
  const authData = useContext(AuthContext);
  const userImageUrl = authData.googleData.picture;
  // const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="NavbarComponent">
        <div className="logoContainer">
          <img className="logoImageClass" src={logoImage} alt="accoliteLogo" />
        </div>

        <div className="NavbarSearch">
          <div className="search-icon">
          <i class="fa-sharp fa-solid fa-magnifying-glass "style={{color:"#1e2c3f"}}></i>
          </div>
          <form>
              <input className="search" type="text" onChange={(e) => authData.setSearchValue(e.target.value.toLowerCase())} value={authData.searchValue} placeholder="Search by Name" aria-label="Search"/>
           </form>
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
