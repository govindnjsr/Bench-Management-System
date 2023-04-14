import React, { useState } from 'react'
import './Project.css'

export default function SideBar() {

   const [benchTimeValue, setBenchTimeValue] = useState(3);
   const [experienceValue, setExperienceValue] = useState(3);
   const [filters, setFilters] = useState({
      exp: 0,
      benchTime: 0,
      locationId: 0,
   })

   return (
      <>
         <div className='filterHeading' >
            <p className='pfilterHeading'>SORT BY FILTERS</p>
         </div>
         <div className="left-panel">
            <div className="filterContainer">
               <div className='filterByExperience'>
                  <p className='pfilter'>EXPERIENCE <span className='span-style'>( 0 - {experienceValue} Years)</span></p>
                  <label htmlFor="customRange2" className="form-label"></label>
                  <input type="range" className="form-range experienceClass" min="1" max="10" value={experienceValue} onChange={(e) => setExperienceValue(e.target.value)} id="customRange2" />
                  <p className='sliderParaLeft'>0 Years</p>
                  <span className='sliderParaRightExpereince'>10 Years</span>
               </div>


               <div className='filterByBenchTime'>
                  <p className='pfilter'>BENCH TIME <span className='span-style'>( 0 - {benchTimeValue} Months)</span></p>
                  <label htmlFor="customRange2" className="form-label"></label>
                  <input type="range" className="form-range benchTimeSliderClass" min="1" max="12" value={benchTimeValue} onChange={(e) => setBenchTimeValue(e.target.value)} id="customRange2" />
                  <p className='sliderParaLeft'>0 Months</p>
                  <span className='sliderParaRightBench'>12 Months</span>
               </div>


               <div className='filterBySkills'>

                  <p className='pfilter'>SKILLS</p>

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

                  <p className='pfilter'>LOCATION</p>

                  <div className="form-check mx-4 my-4">
                     <input className="form-check-input" type="checkbox" value="Gurugram" id="loc-1" />
                     <label className="form-check-label skillsLabel" htmlFor="loc-1">
                        Gurugram
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="Banglore" id="loc-2" />
                     <label className="form-check-label skillsLabel" htmlFor="loc-2">
                        Banglore
                     </label><br />
                     <input className="form-check-input" type="checkbox" value="Hyderabad" id="loc-3" />
                     <label className="form-check-label skillsLabel" htmlFor="loc-3">
                        Hyderabad
                     </label><br />
                  </div>
               </div>

               <div className='filterByLocation'>

                     <p className='pfilter'>STATUS</p>

                     <div className="form-check mx-4 my-4">
                        <input className="form-check-input" type="checkbox" value="active" id="status-1" />
                        <label className="form-check-label skillsLabel" htmlFor="status-1">
                           Not on bench
                        </label><br />
                        <input className="form-check-input" type="checkbox" value="benched" id="status-2" />
                        <label className="form-check-label skillsLabel" htmlFor="status-2">
                           On benched
                        </label><br />
                     </div>
                </div>

            </div>
         </div>
      </>
   )
}