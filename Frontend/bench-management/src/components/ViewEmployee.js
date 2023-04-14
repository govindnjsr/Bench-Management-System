import React from 'react'
import NavBar from './Navbar'
import profileImageEmployee from './Images/photo.avif';

export default function ViewEmployee() {

  return (
    <div >
             <div className='profile-window'>

                <div>
                    <NavBar />
                </div>
                <div className='shadow1 p-3 mb-5'>
                <h6 className='profile-heading'>PROFILE</h6>
                    <hr></hr>
                    <img className='profile-photo' src={image} alt='profile photo'/>
                    <div className='content'><center>Megha Mathur</center></div>
                    <div className='content'><center>ID : 1234</center></div>
                </div>

                <div className="shadow2 p-3 mb-5">
                    <h6 className='profile-heading'>PERSONAL INFORMATION</h6>
                    <hr></hr>
                    <div className='details'>
                        <div className='details1'>
                            <p className='labels'>Name</p>
                            <p className='content'>Megha Mathur</p>
                        </div>
                        <div className='details1'>
                            <p className='labels'>Contact Number</p>
                            <p className='content'>9319018917</p>
                        </div>
                        <div className='details1'>
                            <p className='labels'>Address</p>
                            <p className='content'>A-1/9 Xenia Hub, Sector 55, Gurugram</p>
                        </div>
                    </div> 
                </div>

                <div className="shadow2 p-3 mb-5">
                    <h6 className='profile-heading'>WORK INFORMATION</h6>
                    <hr></hr>
                    <div className='details'>
                        <div className='details1'>
                            <p className='labels'>Work Experience</p>
                            <p className='content'>2 Years</p>
                            <p className='labels'>Location</p>
                            <p className='content'>Gurugram</p>
                        </div>
                        <div className='details1'>
                            <p className='labels'>Last Billable Date</p>
                            <p className='content'>10/07/2020</p>
                            <p className='labels'>Bench Status</p>
                            <p className='content'>Not Benched</p>
                        </div>
                        <div className='details1'>
                            <p className='labels'>Active</p>
                            <p className='content'>Active</p>
                            <p className='labels'>Slills</p>
                            <p className='content'>HTML, CSS, REACT</p>
                        </div>
                    </div> 
                </div>

                <div className="shadow2 p-3 mb-5">
                    <h6 className='profile-heading'>CLIENT INTERVIEWS</h6>
                    <hr></hr>
                    <div className='details'>
                        <div className='details1'>
                            <p className='labels'>Client Name</p>
                            <p className='content'>Amazon</p>
                            <p className='labels'>Client Name</p>
                            <p className='content'>Flipkart</p>
                        </div>
                        <div className='details1'>
                            <p className='labels'>Interview Date</p>
                            <p className='content'>22/07/2005</p>
                            <p className='labels'>Interview Date</p>
                            <p className='content'>11/03/2000</p>
                        </div>
                        <div className='details1'>
                            <p className='labels'>Result</p>
                            <p className='content'>Not Clear</p>
                            <p className='labels'>Result</p>
                            <p className='content'>Not Clear</p>
                        </div>
                    </div> 
                </div>

            </div>                   
     </div>
  )
}
