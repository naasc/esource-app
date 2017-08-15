import React from 'react'
import UpdateList from '../UpdateList'

const HomeBottom =() => (
  <div id="bottom" className="example">
      <div className="demo-grid mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="demo-cell mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet">
              <section> This week on eSource
               <h1>Accouncements</h1>
	              <p>
	                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper 
	                 diam arcu, non venenatis eros elementum vitae. Phasellus eleifend ultricies
	                 tortor quis suscipit. Integer viverra lacus non vestibulum auctor. Nulla 
	                 cursus neque ac lectus eleifend, dignissim lacinia arcu viverra.
	              </p>
              </section>
            </div>     
            <div className="demo-cell mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet">
				<section>
	            <h3>System Updates</h3>
	            <div className="mdc-list-group">
	              <UpdateList />
	            </div>
	          </section>
            </div>
          </div>
	  </div>
   </div>

)

export default HomeBottom