import React, { useState } from 'react'
import './Project.css'
import logoImage from './Images/accoliteLogo.png';

export default function SideBar() {

   const [benchTimeValue, setBenchTimeValue] = useState(3);
   const [experienceValue, setExperienceValue] = useState(3);

   return (
      <>
         <div className="left-panel">

            <div className='logoContainer'>
               <img className='logoImageClass' src={logoImage} alt="accoliteLogo" />
            </div>

            <hr style={{color:'grey', borderWidth:'3px' , marginTop:'0px', marginBottom:'0px'}}/>

            <div className="filterContainer">
               <p style={{fontSize:'14px', opacity:'0.6', fontWeight:'bolder', marginLeft:'24%'}}>SORT BY FILTERS</p>

               <div className='filterByExperience'>
                  <p style={{fontSize:'18px', opacity:'0.8', fontWeight:'bold', marginBottom:'0px'}}>EXPERIENCE <span style={{fontSize:'14px', opacity:'0.7', marginLeft:'3%'}}>( 0 - {experienceValue} Years)</span></p>
                  <label htmlFor="customRange2" className="form-label"></label>
                  <input type="range" className="form-range experienceClass" min="1" max="10" value={experienceValue} onChange={(e) => setExperienceValue(e.target.value)} id="customRange2" />
                  <p className='sliderParaLeft'>0 Years</p>
                  <span className='sliderParaRightExpereince'>10 Years</span>
               </div>


               <div className='filterByBenchTime'>
               <p style={{fontSize:'18px', opacity:'0.8', fontWeight:'bold', marginBottom:'0px'}}>BENCH TIME <span style={{fontSize:'14px', opacity:'0.7', marginLeft:'3%'}}>( 0 - {benchTimeValue} Months)</span></p>
                  <label htmlFor="customRange2" className="form-label"></label>
                  <input type="range" className="form-range benchTimeSliderClass" min="1" max="12" value={benchTimeValue} onChange={(e) => setBenchTimeValue(e.target.value)} id="customRange2"/>
                  <p className='sliderParaLeft'>0 Months</p>
                  <span className='sliderParaRightBench'>12 Months</span>
               </div>


               <div className='filterBySkills'>

                  <p style={{fontSize:'18px', opacity:'0.8', fontWeight:'bold', marginBottom:'0px'}}>SKILLS</p>

                  <div className="form-check mx-4 my-4">
                     <input className="form-check-input" type="checkbox" value="Java" id="skill-1" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-1">
                        Java
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="Python" id="skill-2" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-2">
                        Python
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="React" id="skill-3" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-3">
                        React
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="Angular" id="skill-4" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-4">
                        Angular
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="HTML" id="skill-5" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-5">
                        HTML
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="CSS" id="skill-6" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-6">
                        CSS
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="JavaScript" id="skill-7" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-7">
                        JavaScript
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="SpringBoot" id="skill-8" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-8">
                        SpringBoot
                     </label><br />
                  </div>
               </div>

               <div className='filterByLocation'>

                  <p style={{fontSize:'18px', opacity:'0.8', fontWeight:'bold', marginBottom:'0px'}}>Location</p>

                  <div className="form-check mx-4 my-4">
                     <input className="form-check-input" type="checkbox" value="Gurugram" id="loc-1" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-1">
                        Gurugram
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="Banglore" id="loc-2" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-2">
                        Banglore
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="Hyderabad" id="loc-3" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-3">
                        Hyderabad
                     </label><br />
                  </div>
               </div>

            </div>
         </div>
      </>
   )
}