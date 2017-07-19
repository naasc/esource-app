import React from 'react';
import Tabs from './global/Tabs'

const Cloud = () => (
<main className="demo-main">
  <div className="wrapper">	
    <div className="example">	
	  <h1> This is cloud </h1>
	  <div className="demo-grid mdc-layout-grid">
	          <div className="mdc-layout-grid__inner">
	            <div className="demo-cell mdc-layout-grid__cell--span-6">6</div>
	            <div className="demo-cell mdc-layout-grid__cell--span-6">6</div>
	          </div>
	  </div>
      
	  <Tabs />
  	  <section>
            <h3>Full-Width Dividers</h3>
            <ul className="mdc-list">
              <li className="mdc-list-item">Single-line item - section 1</li>
              <li className="mdc-list-item">Single-line item - section 1</li>
              <li className="mdc-list-item">Single-line item - section 1</li>
              <li className="mdc-list-divider" role="separator"></li>
              <li className="mdc-list-item">Single-line item - section 2</li>
              <li className="mdc-list-item">Single-line item - section 2</li>
            </ul>
       </section>
   </div>
  </div>
 </main>
)

export default Cloud;