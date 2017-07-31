import React, { Component } from 'react';
import '@material/textfield/dist/mdc.textfield.css';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {
    state = {
    	query: ''
    }
	updateQuery = (query) => (
       this.setState({ query: query.trim() })
	)

    clearQuery = () => {
      this.setState({ query: '' })
    }

    render(){
    const { query } = this.props
    
	  return(
		  <div className="mdc-textfield mdc-textfield--fullwidth search">
		    <input className="mdc-textfield__input"
			         type="text"
			         placeholder="Search"
			         aria-label="Full-Width Textfield" 
			         value={query}
			         onChange={(event) => this.updateQuery(event.target.value)}/>
		   </div>

	   )
	}
 
}

export default Search