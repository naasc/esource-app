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
	      <div className="mdc-grid-tile__primary">
	        <img className="mdc-grid-tile__primary-content" src="/images/1-1.jpg" />
	      </div>
	      <span className="mdc-grid-tile__secondary card partners">
	        <span className="mdc-grid-tile__title"><a href="/#/cloud">Cloud</a></span>
	        <span className="mdc-grid-tile__support-text">info</span>
	      </span>
	    </li>

	    <li className="mdc-grid-tile">
	      <div className="mdc-grid-tile__primary">
	        <img className="mdc-grid-tile__primary-content" src="/images/1-1.jpg" />
	      </div>
	      <span className="mdc-grid-tile__secondary card approvals">
	        <span className="mdc-grid-tile__title">License</span>
	        <span className="mdc-grid-tile__support-text">info</span>
	      </span>
	    </li>

	     <li className="mdc-grid-tile">
	      <div className="mdc-grid-tile__primary">
	        <img className="mdc-grid-tile__primary-content" src="/images/1-1.jpg" />
	      </div>
	      <span className="mdc-grid-tile__secondary card pricelists">
	        <span className="mdc-grid-tile__title">Systems</span>
	        <span className="mdc-grid-tile__support-text">info</span>
	      </span>
	    </li>

	     <li className="mdc-grid-tile">
	      <div className="mdc-grid-tile__primary">
	        <img className="mdc-grid-tile__primary-content" src="/images/1-1.jpg" />
	      </div>
	      <span className="mdc-grid-tile__secondary card migrations">
	        <span className="mdc-grid-tile__title">Support</span>
	        <span className="mdc-grid-tile__support-text">info</span>
	      </span>
	    </li>

	     <li className="mdc-grid-tile">
	      <div className="mdc-grid-tile__primary">
	        <img className="mdc-grid-tile__primary-content" src="/images/1-1.jpg" />
	      </div>
	      <span className="mdc-grid-tile__secondary card contracts">
	        <span className="mdc-grid-tile__title">Migrations</span>
	        <span className="mdc-grid-tile__support-text">info</span>
	      </span>
	    </li>

	     <li className="mdc-grid-tile">
	      <div className="mdc-grid-tile__primary">
	        <img className="mdc-grid-tile__primary-content" src="/images/1-1.jpg" />
	      </div>
	      <span className="mdc-grid-tile__secondary card development">
	        <span className="mdc-grid-tile__title">Partners</span>
	        <span className="mdc-grid-tile__support-text">info</span>
	      </span>
	    </li>

	    <li className="mdc-grid-tile">
	      <div className="mdc-grid-tile__primary">
	        <img className="mdc-grid-tile__primary-content" src="/images/1-1.jpg" />
	      </div>
	      <span className="mdc-grid-tile__secondary card migrations">
	        <span className="mdc-grid-tile__title">Services</span>
	        <span className="mdc-grid-tile__support-text">info</span>
	      </span>
	    </li>

	     <li className="mdc-grid-tile">
	      <div className="mdc-grid-tile__primary">
	        <img className="mdc-grid-tile__primary-content" src="/images/1-1.jpg" />
	      </div>
	      <span className="mdc-grid-tile__secondary card contracts">
	        <span className="mdc-grid-tile__title">Global Business</span>
	        <span className="mdc-grid-tile__support-text">info</span>
	      </span>
	    </li>

	     <li className="mdc-grid-tile">
	      <div className="mdc-grid-tile__primary">
	        <img className="mdc-grid-tile__primary-content" src="/images/1-1.jpg" />
	      </div>
	      <span className="mdc-grid-tile__secondary card development">
	        <span className="mdc-grid-tile__title">Acquisitions</span>
	        <span className="mdc-grid-tile__support-text">info</span>
	      </span>
	    </li>
        <li className="mdc-grid-tile">
	      <div className="mdc-grid-tile__primary">
	        <img className="mdc-grid-tile__primary-content" src="/images/1-1.jpg" />
	      </div>
	      <span className="mdc-grid-tile__secondary card development">
	        <span className="mdc-grid-tile__title">Other</span>
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