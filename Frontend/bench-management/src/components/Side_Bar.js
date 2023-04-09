import React from 'react'
import './Project.css'
import logoImage from './Images/accoliteLogo.png';

export default function SideBar() {
   return (
      <>
         <div className="left-panel">

            <div className='logoContainer'>
               <img className='logoImageClass' src={logoImage} alt="accoliteLogo" />
            </div>

            <hr style={{color:'white', marginTop:'0px', marginBottom:'0px'}}/>

            <div className="filterContainer">
               <p style={{fontSize:'14px', opacity:'0.6', fontWeight:'bolder', marginLeft:'24%'}}>SORT BY FILTERS</p>

               <div className='filterByExperience'>
                  <p style={{fontSize:'18px', opacity:'0.8', fontWeight:'bold', marginBottom:'0px'}}>EXPERIENCE</p>
                  <label htmlFor="customRange2" className="form-label"></label>
                  <input type="range" className="form-range" min="0" max="5" id="customRange2" />
                  <p className='sliderParaLeft'>0 Years</p>
                  <span className='sliderParaRightExpereince'>10 Years</span>
               </div>


               <div className='filterByBenchTime'>
               <p style={{fontSize:'18px', opacity:'0.8', fontWeight:'bold', marginBottom:'0px'}}>BENCH TIME</p>
                  <label htmlFor="customRange2" className="form-label"></label>
                  <input type="range" className="form-range" min="0" max="5" id="customRange2" />
                  <p className='sliderParaLeft'>0 Months</p>
                  <span className='sliderParaRightBench'>12 Months</span>
               </div>


               <div className='filterBySkills'>

                  <p style={{fontSize:'18px', opacity:'0.8', fontWeight:'bold', marginBottom:'0px'}}>SKILLS</p>

                  <div className="form-check mx-2 my-3">
                     <input className="form-check-input" type="checkbox" value="Java" id="skill-1" />
                     <label className="form-check-label" htmlFor="skill-1">
                        Java
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="Python" id="skill-2" />
                     <label className="form-check-label" htmlFor="skill-2">
                        Python
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="React" id="skill-3" />
                     <label className="form-check-label" htmlFor="skill-3">
                        React
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="Angular" id="skill-4" />
                     <label className="form-check-label" htmlFor="skill-4">
                        Angular
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="HTML" id="skill-5" />
                     <label className="form-check-label" htmlFor="skill-5">
                        HTML
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="CSS" id="skill-6" />
                     <label className="form-check-label" htmlFor="skill-6">
                        CSS
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="JavaScript" id="skill-7" />
                     <label className="form-check-label" htmlFor="skill-7">
                        JavaScript
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="SpringBoot" id="skill-8" />
                     <label className="form-check-label" htmlFor="skill-8">
                        SpringBoot
                     </label><br />
                  </div>
               </div>

            </div>
         </div>
      </>
   )
}