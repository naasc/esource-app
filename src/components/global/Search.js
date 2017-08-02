import React, { Component } from 'react';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/button/dist/mdc.button.css';
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

    render() {
	    const { query } = this.state
	    const { indexes } = this.props
        
	    let showingIndex
	    if (query) {
	      const match = new RegExp(escapeRegExp(query), 'i')
	      showingIndex = indexes.filter((ind) => match.test(ind.term))
	    } else {
	      showingIndex = indexes
	    }
	    showingIndex.sort(sortBy('term'))
 
	  return(
	  	  <div className="search-indexes">
			  <div className="mdc-textfield mdc-textfield--fullwidth search">
			    
			    <input className="mdc-textfield__input"
				         type="text"
				         placeholder="Search"
				         aria-label="Full-Width Textfield" 
				         value={query}
				         onChange={(event) => this.updateQuery(event.target.value)}/>
			   </div>
	           {showingIndex.length !== indexes.length && (
	          <div className='showing-indexes'>
	            <span>Now showing {showingIndex.length} of {indexes.length} total</span>
	            <button onClick={this.clearQuery}>Show all</button>
	          </div>
	          )}

           </div>
	   )
	}
 
}

export default Search