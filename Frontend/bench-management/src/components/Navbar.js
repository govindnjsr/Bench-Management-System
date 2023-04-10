import React, { useContext } from 'react'
import logoImage from './Images/accoliteLogo.png'
import SideBar from './Side_Bar'
import Dropdown from 'react-bootstrap/Dropdown';
import AuthContext from './AuthContext';
export default function NavBar() {
    const authData = useContext(AuthContext);

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
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                <i className="fa-solid fa-user userIcon" ></i>
                                username
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end" className='NavbarDropDownMenu'>
                                <Dropdown.Item href="" onClick={authData.handleLogin}>
                                    <span style={{ fontSize: '15px' }}>
                                        Logout
                                    </span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>

            </div>
            <SideBar />
        </>
    )
}
