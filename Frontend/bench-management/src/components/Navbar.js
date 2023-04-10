import React from 'react'
import logoImage from './Images/accoliteLogo.png'
import SideBar from './Side_Bar'
export default function Navbar() {
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

                    <i className="fa-solid fa-user"></i>
                    <div className='NavbarDropDown'>
                        <span className='profileUserName'>username</span>
                    </div>

                </div>

            </div>
            <SideBar />
        </>
    )
}
