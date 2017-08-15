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
    Mbe.getUpdates().then((docs) => {
      console.log("Results" + docs)
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