import React, { useState ,useContext } from 'react'
import './Project.css'
import AuthContext from './AuthContext';
export default function SideBar() {
   const authData = useContext(AuthContext);
   // const [appliedFilters,setAppliedFilters]=authData;
   const [benchTimeValue, setBenchTimeValue] = useState(3);
   const [experienceValue, setExperienceValue] = useState(3);
   // const[filters,setFilters]=useState({
   //    exp:0,
   //    benchTime:0,
   //    locationId:0,
   //  })

    const handleFiltersValue = (e) => {     
      const {value,checked}=e.target;
      let temp1=true,temp2=false;
      if(checked)  
      {
         authData.setAppliedFilters({ ...authData.appliedFilters, [e.target.name]: temp1});
         if(e.target.name=="gurugram" ||e.target.name=="bangalore" || e.target.name=="hyderabad" ){
            authData.setCheckFilter({...authData.checkFilter,["location"]:temp1});
            
         }
         else if(e.target.name=="active" || e.target.name=="benched")
          {
            authData.setCheckFilter({...authData.checkFilter,["status"]:temp1});
          }
         else{
            authData.setCheckFilter({...authData.checkFilter,["skill"]:temp1});
         }
    }
    else{
      authData.setAppliedFilters({ ...authData.appliedFilters, [e.target.name]:temp2 });
      if(e.target.name=="gurugram" ||e.target.name=="bangalore" || e.target.name=="hyderabad" ){
         authData.setCheckFilter({...authData.checkFilter,["location"]:temp2});
         
      }
      else if(e.target.name=="active" || e.target.name=="benched")
          {
            authData.setCheckFilter({...authData.checkFilter,["status"]:temp2});
          }
      else{
         authData.setCheckFilter({...authData.checkFilter,["skill"]:temp2});
      }
    }
    };
    console.log("filters "+JSON.stringify(authData.appliedFilters))
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
                  <input type="range" className="form-range experienceClass" min="1" max="10" value={experienceValue} onChange={(e) => handleFiltersValue(e.target.value).bind(this)} id="customRange2" />
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

                  <div className="form-check mx-4 my-4" >
                     <input className="form-check-input" type="checkbox" name="java" value={"1"} onChange={handleFiltersValue.bind(this)} id="skill-1" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-1">
                        Java
                     </label><br />
                     <input className="form-check-input" type="checkbox"  name="python" value={"1"} onChange={handleFiltersValue.bind(this)} id="skill-2" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-2">
                        Python
                     </label><br />
                     <input className="form-check-input" type="checkbox"  name="react" value={"1"} onChange={handleFiltersValue.bind(this)}id="skill-3" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-3">
                        React
                     </label><br />
                     <input className="form-check-input" type="checkbox"  name="angular" value={"1"} onChange={handleFiltersValue.bind(this)} id="skill-4" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-4">
                        Angular
                     </label><br />
                     <input className="form-check-input" type="checkbox" name="html" value={"1"} onChange={handleFiltersValue.bind(this)} id="skill-5" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-5">
                        HTML
                     </label><br />
                     <input className="form-check-input" type="checkbox"  name="css" value={"1"} onChange={handleFiltersValue.bind(this)} id="skill-6" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-6">
                        CSS
                     </label><br />
                     <input className="form-check-input" type="checkbox"  name="javascript" value={"1"} onChange={handleFiltersValue.bind(this)} id="skill-7" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-7">
                        JavaScript
                     </label><br />
                     <input className="form-check-input" type="checkbox"  name="springboot" value={"1"} onChange={handleFiltersValue.bind(this)} id="skill-8" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-8">
                        SpringBoot
                     </label><br />
                  </div>
               </div>

               <div className='filterByLocation'>

                  <p className='pfilter'>LOCATION</p>

                  <div className="form-check mx-4 my-4">
                     <input className="form-check-input" type="checkbox" name="gurugram" value={true} onChange={handleFiltersValue.bind(this)} id="loc-1" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-1">
                        Gurugram
                     </label><br />
                     <input className="form-check-input" type="checkbox"  name="bangalore" value={true} onChange={handleFiltersValue.bind(this)} id="loc-2" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-2">
                        Banglore
                     </label><br />
                     <input className="form-check-input" type="checkbox"  name="hyderabad" value={true} onChange={handleFiltersValue.bind(this)} id="loc-3" />
                     <label className="form-check-label skillsLabel" htmlFor="skill-3">
                        Hyderabad
                     </label><br />
                  </div>
               </div>

               <div className='filterByLocation'>

                     <p className='pfilter'>STATUS</p>

                     <div className="form-check mx-4 my-4">
                        <input className="form-check-input" type="checkbox"  name="active" value={true} onChange={handleFiltersValue.bind(this)} id="status-1" />
                        <label className="form-check-label skillsLabel" htmlFor="status-1">
                           Active
                        </label><br />
                        <input className="form-check-input" type="checkbox"  name="benched" value={true} onChange={handleFiltersValue.bind(this)} id="status-2" />
                        <label className="form-check-label skillsLabel" htmlFor="status-2">
                           Benched
                        </label><br />
                     </div>
                </div>

            </div>
         </div>
      </>
   )
}