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

                <div className='profile-view'>
                    <img className='profile-photo' src={profileImageEmployee} alt='profileImageEmployee' />
                    <div className='profile-name'>Megha Mathur</div>
                    <div className='profile-name'>Gurugram</div>
                </div>
                <div div className='profile-headings'>PERSONAL INFORMATION </div>
                <div className='personal'>
                    <table className='personal-table'>
                        <tr>
                            <th>Name &nbsp;:</th>
                            <td>&nbsp;Megha Mathur</td>
                        </tr>
                        <tr>
                            <th>Contact &nbsp;:</th>
                            <td>&nbsp;9319018917</td>
                        </tr>
                        <tr>
                            <th>Address &nbsp;:</th>
                            <td>&nbsp;abckdfbw sjnvjowruhg ljdabvowrhv dojbvuwrojbv ovbjrwbv ojwfvbw</td>
                        </tr>
                        <tr>
                            <th>Location &nbsp;:</th>
                            <td>&nbsp;GURUGRAM</td>
                        </tr>
                    </table>
                </div>
                <div className='profile-headings'>WORK INFORMATION</div>
                <div className='work'>
                    <table className='personal-table'>
                        <tr>
                            <th>Name</th>
                            <td>Megha Mathur</td>
                        </tr>
                        <tr>
                            <th>Contact</th>
                            <td>9319018917</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>abckdfbw sjnvjowruhg ljdabvowrhv dojbvuwrojbv ovbjrwbv ojwfvbw</td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>GURUGRAM</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
