import React, { useContext, NavLink } from 'react'
import logoImage from './Images/accoliteLogo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import AuthContext from './AuthContext';
export default function NavBar() {
    const authData = useContext(AuthContext);
    const userImageUrl = authData.googleData.picture;
    return (
        <>

            <div className='NavbarComponent'>

                <div className='logoContainer'>
                    <img className='logoImageClass' src={logoImage} alt="accoliteLogo" />
                </div>

                <div className='NavbarHeading'>
                    <span>BENCH MANAGEMENT</span>
                </div>

                <div className='profile'>

                    <div className='NavbarDropDown'>
                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic" className='profileUserName'>
                                <img className='googleImage' src={userImageUrl} alt="googleImage" />
                                {authData.googleData.given_name} {authData.googleData.family_name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end" className='NavbarDropDownMenu'>
                                <Dropdown.Item href="" onClick={authData.handleLogout}>
                                    <span style={{ fontSize: '12px'}}>
                                        Logout  
                                    </span>
                                
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

            </div>
        </>
    )
}
