import React from 'react'
import './Project.css';
import img from './Images/LoginImage.jpg';
export default function Login() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", position: "fixed" }}>
        <div className='left'>
          <img id="left-img" src={img} alt="backimg" />
        </div>
        <div className='right'>
          <h2>
            Login
          </h2>
          <p>Please login to continue..</p>
          <p>Login as</p>
          <button type="button" className="admin btn-light">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Admin" />
              <label className="form-check-label" for="inlineRadio1">Amin</label>
            </div>
          </button>
          <button type="button" className="manager btn-light mx-3 ">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Manager" />
              <label className="form-check-label" for="inlineRadio2">Manager</label>
            </div>
          </button>
          <div className="form_entry my-4">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" />
            </div>
            <div className="mb-3">
              <label for="inputPassword5" className="form-label">Password</label>
              <input type="password" id="inputPassword5" className="form-control" placeholder="Enter your Password" />
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked"> Show Password</label>
            </div>
          </div>
          <div className="div.btn" style={{ display: "flex", flexDirection: "column", position: "fixed" }}>
            <button type="button" id="btn1" className="LoginButton">Get Started</button>
            <button type="button" id="btn2" className="my-2 LoginButton">
              <i className="fa-brands fa-google mx-3" style={{color: '#186eaf'}}></i>
              Login with Google</button>
          </div>
        </div>
      </div>
    </>
  )
}