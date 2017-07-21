import React from 'react'
import Header from './global/Header'
import Search from './global/Search'
import '@material/list/dist/mdc.list.css';

const Home = () => (
<main className="demo-main">

  <div className="wrapper">
    
   <div className="search">
		    <Search />
	 </div>
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
            <div className="demo-cell mdc-layout-grid__cell--span-6">
             
              <section> This week on eSource
               <h1>Accouncements</h1>
              <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper 
                 diam arcu, non venenatis eros elementum vitae. Phasellus eleifend ultricies
                 tortor quis suscipit. Integer viverra lacus non vestibulum auctor. Nulla 
                 cursus neque ac lectus eleifend, dignissim lacinia arcu viverra. Nam egestas
                  elit risus, sed facilisis lacus aliquet eget. 
              </p>
              </section>
            </div>
            <div className="demo-cell mdc-layout-grid__cell--span-6">

				<section>
	            <h3>System Updates</h3>
	            <div className="mdc-list-group">
	              <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list two-line-avatar-text-icon-demo mdc-list--dense">
	                <li className="mdc-list-item">
	                  <span className="mdc-list-item__start-detail grey-bg" role="presentation">
	                    <i className="material-icons" aria-hidden="true">folder</i>
	                  </span>
	                  <span className="mdc-list-item__text">
	                    Updates 15 FY 2017
	                    <span className="mdc-list-item__text__secondary">Jan 9, 2014</span>
	                  </span>
	                  <a href="#" className="mdc-list-item__end-detail material-icons" aria-label="View more information" title="More info" onclick="event.preventDefault();">
	                    info
	                  </a>
	                </li>
	                <li className="mdc-list-item">
	                  <span className="mdc-list-item__start-detail grey-bg" role="presentation">
	                    <i className="material-icons" aria-hidden="true">folder</i>
	                  </span>
	                  <span className="mdc-list-item__text">
	                    Updates 14 FY 2017
	                    <span className="mdc-list-item__text__secondary">Jan 17, 2014</span>
	                  </span>
	                  <a href="#" className="mdc-list-item__end-detail material-icons" aria-label="View more information" title="More info" onclick="event.preventDefault();">
	                    info
	                  </a>
	                </li>
	                <li className="mdc-list-item">
	                  <span className="mdc-list-item__start-detail grey-bg" role="presentation">
	                    <i className="material-icons" aria-hidden="true">folder</i>
	                  </span>
	                  <span className="mdc-list-item__text">
	                    Updates 13 FY 2017
	                    <span className="mdc-list-item__text__secondary">Jan 28, 2014</span>
	                  </span>
	                  <a href="#" className="mdc-list-item__end-detail material-icons" aria-label="View more information" title="More info" onclick="event.preventDefault();">
	                    info
	                  </a>
	                </li>
	              </ul>            
	            </div>
	          </section>
            </div>
          </div>
	  </div>
      
   </div>
  </div>
  
  
 </main>

  
)


export default Home