import React, { Component } from 'react'

import Search from './global/Search'
import UpdateList from './UpdateList'

import '@material/list/dist/mdc.list.css';

class Home extends Component {

  state = {
  	query: ''
  }	
  
  updateQuery = (query) => {
    this.setState( { query: query.trim() })
  }

  render() {
  	return (
	  <main className="demo-main">
	    <div className="wrapper">
	       <Search />
	    
	       <div id="top" className="example">
	       <div className="mdc-grid-list mdc-grid-list--twoline-caption">

		  <ul className="mdc-grid-list__tiles">
		    <li className="mdc-grid-tile">
		      <div className="mdc-grid-tile__primary mdc-grid-tile__primary-cloud">
		       
		      </div>
		      <span className="mdc-grid-tile__secondary card partners">
		        <span className="mdc-grid-tile__title"><a href="/#/cloud">Cloud</a></span>
		        <span className="mdc-grid-tile__support-text">info</span>
		      </span>
		    </li>

		    <li className="mdc-grid-tile">
		      <div className="mdc-grid-tile__primary mdc-grid-tile__primary-systems">
		      </div>
		      <span className="mdc-grid-tile__secondary card approvals">
		        <span className="mdc-grid-tile__title">Systems</span>
		        <span className="mdc-grid-tile__support-text">info</span>
		      </span>
		    </li>

		     <li className="mdc-grid-tile">
		      <div className="mdc-grid-tile__primary mdc-grid-tile__primary-license">
		      </div>
		      <span className="mdc-grid-tile__secondary card license">
		        <span className="mdc-grid-tile__title">License</span>
		        <span className="mdc-grid-tile__support-text">info</span>
		      </span>
		    </li>

		     <li className="mdc-grid-tile">
		      <div className="mdc-grid-tile__primary mdc-grid-tile__primary-services">
		      </div>
		      <span className="mdc-grid-tile__secondary card services">
		        <span className="mdc-grid-tile__title">Services</span>
		        <span className="mdc-grid-tile__support-text">info</span>
		      </span>
		    </li>

		     <li className="mdc-grid-tile">
		      <div className="mdc-grid-tile__primary mdc-grid-tile__primary-support">
			  </div>
		      <span className="mdc-grid-tile__secondary card support">
		        <span className="mdc-grid-tile__title">Support</span>
		        <span className="mdc-grid-tile__support-text">info</span>
		      </span>
		    </li>

		     <li className="mdc-grid-tile">
		      <div className="mdc-grid-tile__primary mdc-grid-tile__primary-partners">
		      </div>
		      <span className="mdc-grid-tile__secondary card partners">
		        <span className="mdc-grid-tile__title">Partners</span>
		        <span className="mdc-grid-tile__support-text">info</span>
		      </span>
		    </li>

		    <li className="mdc-grid-tile">
		      <div className="mdc-grid-tile__primary mdc-grid-tile__primary-migration">
			  </div>
		      <span className="mdc-grid-tile__secondary card migration">
		        <span className="mdc-grid-tile__title">Migration</span>
		        <span className="mdc-grid-tile__support-text">info</span>
		      </span>
		    </li>

		     <li className="mdc-grid-tile">
		      <div className="mdc-grid-tile__primary mdc-grid-tile__primary-acquistions">
		      </div>
		      <span className="mdc-grid-tile__secondary card acquistions">
		        <span className="mdc-grid-tile__title">Acquisitions</span>
		        <span className="mdc-grid-tile__support-text">info</span>
		      </span>
		    </li>

		  
		  </ul>
		    </div>
	    </div>
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
	    </div>
	  </main>

    )
  }
}


export default Home