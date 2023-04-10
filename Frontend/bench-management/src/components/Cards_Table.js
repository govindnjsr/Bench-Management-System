import React from 'react'
import SideBar from './Side_Bar'
import profile from './Images/user.png'

export default function Cards_Table() {

  document.body.backGroundColor = "rgb(8, 8, 41)";

  return (
    <>
      <div className='cardsTableMain'>
        <div className='left-dashboard'>
        <SideBar />
        </div>
        <div className='right-dashboard'>
                <div className='profileBar' >
                  <p classname='nav-heading'>Bench Management</p>
                  <div class="dropdown">

                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Profile Name
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                          <li><a class="dropdown-item active" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                          <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                      </div> 
                </div>
                                                            {/* <div style={{ height: "90vh", borderRight: "3px inset lightgrey", margin:'0px', padding:'0px', opacity:'0.25' }}></div> */}
                <div className='cards-table'>
                  
                                                             {/* <hr style={{color:'grey', borderWidth:'3px' , marginBottom:'0px', marginTop: '0px'}}/> */}
                  {/* <div className='search'>
                    <nav className="navbar">
                      <div className="container-fluid">
                      <h5>EMPLOYEES</h5>
                        <form className="d-flex" role="search">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-outline-warning" type="button">Add Employee</button>
                        </form>
                      </div>
                    </nav>
                  </div> */}

                  <div className='tableSubHeading'>
                    <h6>All</h6>
                    <h6>Active</h6>
                    <h6>Benched</h6>
                  </div>
                  <div className='table-format'>
                  <table className="table table-dark table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Emp_Id</th>
                        <th scope="col">Emp_Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Dhruv Bansal</td>
                        <td>Gurugram</td>
                        <td>Active</td>
                        <td>View/Update</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Megha Mathur</td>
                        <td>Gurugram</td>
                        <td>Active</td>
                        <td>View/Update</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Shambhavi Vats</td>
                        <td>Gurugram</td>
                        <td>Active</td>
                        <td>View/Update</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Gobind</td>
                        <td>Gurugram</td>
                        <td>Active</td>
                        <td>View/Update</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Dhruv Bansal</td>
                        <td>Gurugram</td>
                        <td>Active</td>
                        <td>View/Update</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
        </div>
      </div>
    </>

  )
}
