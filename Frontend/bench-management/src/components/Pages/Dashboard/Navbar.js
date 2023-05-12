import React, { useContext } from "react";
import logoImage from '../../../Assets/Images/accoliteLogo.png';
import Dropdown from "react-bootstrap/Dropdown";
import AuthContext from '../../Global/AuthContext.js';
import search from '../../../Assets/Images/search.png';
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const authData = useContext(AuthContext);
  const userImageUrl = authData.googleData.picture;
  // const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const unmount=()=>{
    navigate("/");
    authData.handleLogout();
    
  }
  return (
    <>
      <div className="NavbarComponent">
        <div className="logoContainer">
          <img className="logoImageClass" src={logoImage} alt="accoliteLogo" />
        </div>
        {
        authData.showSearchBar === true ? (
        <div className="NavbarSearch">
          <div className="search-icon">
          <i className="fa-sharp fa-solid fa-magnifying-glass "style={{color:"#1e2c3f"}}></i>
          </div>
          <form>
              <input className="search" type="text" onChange={(e) => authData.setSearchValue(e.target.value.toLowerCase())} value={authData.searchValue} placeholder="Search by Name" aria-label="Search"/>
           </form>
        </div>
        )
        :
        null
        }
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
                <Dropdown.Item href="" onClick={(e)=>{unmount()}}>
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
