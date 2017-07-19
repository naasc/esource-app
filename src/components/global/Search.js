import React, {PureComponent} from 'react';
import {Set as ImmutableSet, Map as ImmutableMap} from 'immutable';
import '@material/textfield/dist/mdc.textfield.css';


const Search = () => (
  
	<div className="mdc-textfield mdc-textfield--fullwidth">
	
	  <input className="mdc-textfield__input"
	         type="text"
	         placeholder="Search"
	         aria-label="Full-Width Textfield" />
	</div>
	
 
)

export default Search