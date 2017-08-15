import React, { Component } from 'react'
import Search from './global/Search'
import HomeGrid from './home/HomeGrid'
import HomeBottom from './home/HomeBottom'

import * as ContentAPI from '../utils/ContentAPI'
import Tabs from './global/Tabs'

import '@material/list/dist/mdc.list.css';

class Home extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
       query: '',
       indexes: []
  	}
  }
  componentDidMount() {
    ContentAPI.getIndex().then((indexes) => {
       this.setState({ indexes })
     })
  }

  render() {
  	const { indexes } = this.state
  	return (
	  <main className="demo-main">
	    <div className="wrapper"> 
	       <Search indexes={ indexes }/>
	       <HomeGrid />
	       <HomeBottom />
	       
	     </div>
	  </main>
    )
  }
}


export default Home