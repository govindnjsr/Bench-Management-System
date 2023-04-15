import React, { useContext } from 'react'
import NavBar from './Navbar'
import profileImageEmployee from './Images/photo.avif';
import AuthContext from './AuthContext';

export default function ViewEmployee() {
const authData = useContext(AuthContext);
const empId = authData.viewEmployeeId;
  return (
    <div >
             <div className='profile-window'>

                <div>
                    <NavBar />
                </div>
                
                <div className='shadow1 p-3 mb-5'>
                    <div className='for-back'>
                        <h6 className='profile-heading'>PROFILE</h6>
                        <button className='button3'><i class="fa-sharp fa-solid fa-arrow-left"></i> &nbsp;BACK</button>
                    </div>
               
                    <hr></hr>
                    <img className='profile-photo' src={profileImageEmployee} alt='profileImageEmployee'/>
                    <div className='content'><center>Megha Mathur</center></div>
                    <div className='content'><center>ID : 1234</center></div>
                </div>

                <div className="shadow2 p-3 mb-5">
                    <h6 className='profile-heading'>PERSONAL INFORMATION</h6>
                    <hr></hr>
                    <div className='details-personal'>
                        <div className='details1'>
                            <p className='labels'>Name</p>
                            <p className='content'>Megha Mathur</p>
                            <p className='labels'>Email ID</p>
                            <p className='content'>megha.mathur@accolitedigital.com</p>
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
                    <div className='details-work'>
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
                            <p className='content'>Not On Benched</p>
                        </div>
                        <div className='details1'>
                            <p className='labels'>Bench Start Date</p>
                            <p className='content'>23/8/2020</p>
                            <p className='labels'>Skills</p>
                            <p className='content'>HTML, CSS, REACT</p>
                        </div>
                    </div> 
                </div>

                <div className="shadow2 p-3 mb-5">
                    <h6 className='profile-heading'>LAST CLIENT INTERVIEW</h6>
                    <hr></hr>
                    <div className='details-interview'>
                        <div className='details1'>
                            <p className='labels'>Client Name</p>
                            <p className='content'>Amazon</p>
                        </div>
                        <div className='details1'>
                            <p className='labels'>Interview Date</p>
                            <p className='content'>22/07/2005</p>
                        </div>
                        <div className='details1'>
                            <p className='labels'>Result</p>
                            <p className='content'>Accepted/Rejected</p>
                        </div>
                    </div> 
                </div>

            </div>                   
     </div>
  )
}
