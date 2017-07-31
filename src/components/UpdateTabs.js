import React from 'react'
import '@material/toolbar/dist/mdc.toolbar.css';

const UpdateTabs =() => (
 <div className="mdc-toolbar">
            <div className="mdc-toolbar__row">
              <div className="mdc-toolbar__section mdc-toolbar__section--shrink-to-fit mdc-toolbar__section--align-start">
                <h1 className="mdc-toolbar__title">Title</h1>
              </div>
  

             <nav id="basic-tab-bar" className="mdc-tab-bar">
               <a className="mdc-tab mdc-tab--active" href="#update">eBusiness</a>
               <a className="mdc-tab" href="">System</a>
             </nav>
	        </div>
	     </div>
)

export default UpdateTabs