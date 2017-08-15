import React, { Component} from 'react';
import fetch from 'isomorphic-fetch'
import * as Mbe from './../mbe/mbe'


class UpdateList extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
       updates: [],
       loading: true
  	}
  }
  componentDidMount() {
  	this.setState({loading: true})
    /*
  	let url = "https://mobile-gse00010386.mobileenv.us2.oraclecloud.com:443/mobile/custom/contentfeed/updates";
  	let myHeaders = new Headers({
      "Authorization": "Basic R1NFMDAwMTAzODZfTU9CSUxFX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6UHcwbnFmZ2sudHViNnI=",
      "Oracle-Mobile-Backend-ID": "2b803cfa-4740-4323-9a70-a39b789816a5"
     });

  	let fetchData = { 
      method: 'GET', 
      headers: myHeaders
    }
  	
     fetch(url, fetchData)
    	  .then(response => response.json())
    	  .then(json => json)
    	  .then(updates => this.setState({
    	  	updates,
    	  	loading: false
    }))*/
    let creds = {
      username: "",
      password: ""
    }

    Mbe.authenticate(creds).then((response) => {
        Mbe.getUpdates().then((updates) => {
        this.setState({
          updates: updates.data,
          loading: false
         })
      })
    })

  }
  render() {
  	const { updates, loading } = this.state

  	return (
       <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list two-line-avatar-text-icon-demo mdc-list--dense">
	     {updates.map((update, i) => (
	     	  <li key={i} className="mdc-list-item">
		     	 <span className="mdc-list-item__start-detail grey-bg" role="presentation">
		               <i className="material-icons" aria-hidden="true">folder</i>
		         </span>
		         <span className="mdc-list-item__text">
		                    Updates 14 FY 2017
		                    <span className="mdc-list-item__text__secondary">Jan 17, 2014</span>
		         </span>
		         <a href="#" className="mdc-list-item__end-detail material-icons" aria-label="View more information" title="More info" 
		           onClick="">
		           info
		         </a>
	               
              </li>
            ))
         }
	   </ul> 
  	)
  }

}

export default UpdateList