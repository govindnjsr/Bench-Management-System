import React from 'react'
import './Project.css';
import Navbar from './Navbar';
import SideBar from './SideBar';
import AddEmployee from './AddEmployee';
import ViewManager from './ViewManager';
import search from './Images/search.png';
import UpdateEmployee from './UpdateEmployee';



export default function AdminDashboard() {
  return (
    <div className="window">
      <div className='top'>
        <Navbar />
      </div>
      <div className='bottom'>
        <div className='bottom-left'>
          <SideBar />
        </div>
        <div className='bottom-right'>
          <div className='statistics'>
            <p>STATISTICS</p>
          </div>
          <div className="row">
            <div className="col-sm-3 mx-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Employees</h5>
                  <p className="card-text">12345</p> 
                  <button className='button4'>View</button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Active Employees</h5>
                  <p className="card-text">12345</p>
                  <button className='button4'>View</button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Benched Employees</h5>
                  <p className="card-text">12345</p>
                  <button className='button4'>View</button>
                </div>
              </div>
            </div>
          </div>
          <div className='actions'>
            <p className='employees'>EMPLOYEES</p>
            <div className='buttons'>
              <ViewManager/>
              <AddEmployee/>
              <form className="d-flex" role="search">
                <input className="search-box1" type="search" placeholder="Search " aria-label="Search" />
                 <img className="search" src={search} alt="search-img"/>
              </form>
            </div>
          </div>
          <div className='number'>
            <p>50 rows returned</p>
          </div>
          <div className='table'>
            <div className='table-format'>
              <table className="table table table-striped">
                <thead className='thread1'>
                  <tr>
                    <th scope="col">Emp_Id</th>
                    <th scope="col">Emp_Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className='thread1'>
                  <tr>
                    <th scope="row">1</th>
                    <td>Dhruv Bansal</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Megha Mathur</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Shambhavi Vats</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Gobind</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Dhruv Bansal</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Megha Mathur</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Shambhavi Vats</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Megha Mathur</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Megha Mathur</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Megha Mathur</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Megha Mathur</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>Megha Mathur</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td>Megha Mathur</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td>Megha Mathur</td>
                    <td>Gurugram</td>
                    <td>Active</td>
                    <td><UpdateEmployee/></td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}



