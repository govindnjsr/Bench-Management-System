import React from 'react'
import './Project.css'

export default function Side_Bar() {
  return (
    <div className="fixed">
      <div className="left-panel">
        <div className="logo">
            Logo
        </div>
        <div className="filter-heading">
            Filters
        </div>
        <div className="filters">
                  
                <h6 className="my-2">Skills</h6>
                <div class="form-check mx-2">
                    <input className="form-check-input" type="checkbox" value="Java" id="skill-1"/>
                    <label className="form-check-label" for="skill-1">
                       Java
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="Python" id="skill-2"/>
                    <label className="form-check-label" for="skill-2">
                       Python
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="React" id="skill-3"/>
                    <label className="form-check-label" for="skill-3">
                       React
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="Angular" id="skill-4"/>
                    <label className="form-check-label" for="skill-4">
                       Angular
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="HTML" id="skill-5"/>
                    <label className="form-check-label" for="skill-5">
                       HTML
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="CSS" id="skill-6"/>
                    <label className="form-check-label" for="skill-6">
                       CSS
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="JavaScript" id="skill-7"/>
                    <label className="form-check-label" for="skill-7">
                       JavaScript
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="SpringBoot" id="skill-8"/>
                    <label className="form-check-label" for="skill-8">
                       SpringBoot
                    </label><br/>
                </div>

                <h6 className="my-2">Experience</h6>
                <div class="form-check mx-2">
                    <input className="form-check-input" type="checkbox" value="2" id="exp-1"/>
                    <label className="form-check-label" for="exp-1">
                       0 - 2 years
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="4" id="exp-2"/>
                    <label className="form-check-label" for="exp-2">
                       2 - 4 years
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="6" id="exp-3"/>
                    <label className="form-check-label" for="exp-3">
                       4 - 6 years
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="8" id="exp-4"/>
                    <label className="form-check-label" for="sex-4">
                       6-8 years
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="10" id="exp-5"/>
                    <label className="form-check-label" for="exp-5">
                       8 - 10 years
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="12" id="exp-6"/>
                    <label className="form-check-label" for="exp-6">
                       10 years and above
                    </label><br/>
                </div>

                <h6 className="my-2">Benched Time</h6>
                <div class="form-check mx-2">
                    <input className="form-check-input" type="checkbox" value="2m" id="bench-1"/>
                    <label className="form-check-label" for="bench-1">
                       0 - 2 months
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="4m" id="bench-2"/>
                    <label className="form-check-label" for="bench-2">
                       2 - 4 months
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="6m" id="bench-3"/>
                    <label className="form-check-label" for="bench-3">
                       4 - 6 months
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="8m" id="bench-4"/>
                    <label className="form-check-label" for="sbench-4">
                       6-8 months
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="10m" id="sbench-5"/>
                    <label className="form-check-label" for="bench-5">
                       8 - 10 months
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="12m" id="bench-6"/>
                    <label className="form-check-label" for="bench-6">
                       10 - 12 montha
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="14m" id="bench-7"/>
                    <label className="form-check-label" for="bench-7">
                       12 months and above
                    </label><br/>
                </div>

                <h6 className="my-2">Location</h6>
                <div class="form-check mx-2">
                    <input className="form-check-input" type="checkbox" value="Gurugram" id="loc-1"/>
                    <label className="form-check-label" for="loc-1">
                       Gurugram
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="Banglore" id="loc-2"/>
                    <label className="form-check-label" for="loc-2">
                       Banglore
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="Hyderabad" id="loc-3"/>
                    <label className="form-check-label" for="loc-3">
                      Hyderabad
                    </label><br/>
                </div>
        </div>
      </div> 

      {/* <div className="right-panel">
        <h1>Rendering Area</h1>
      </div> */}
    </div>
  )
}