import React from 'react'
import Header from './global/Header'
import Search from './global/Search'

const Home = () => (
<main className="demo-main">

  <div className="wrapper">
    
   <div className="search">
		    <Search />
	 </div>
  <div className="example">

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
  </div>
  
  
 </main>

  
)

export default Home