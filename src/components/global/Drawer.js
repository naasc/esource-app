import React, {PureComponent, PropTypes} from 'react';
import {Set as ImmutableSet, Map as ImmutableMap} from 'immutable';
import '@material/drawer/dist/mdc.drawer.css';
import Tabs from './Tabs';


export default class Checkbox extends PureComponent {

  render() {
  	return (
  	<div className="demo-body mdc-typography">	
	  <aside className="mdc-persistent-drawer mdc-typography">
	     <nav className="mdc-persistent-drawer__drawer">
	       <header className="mdc-persistent-drawer__header">
	     
	       </header>
	       <nav id="icon-with-text-demo" className="mdc-persistent-drawer__content mdc-list">
		      <a className="mdc-list-item mdc-persistent-drawer--selected" href="#">
		        <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Messages
		      </a>
		      <a className="mdc-list-item" href="#">
		        <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Favorites
		      </a>
		      <a className="mdc-list-item mdc-persistent-drawer" href="#">
		        <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Updates
		      </a>
		      <a className="mdc-list-item" href="#">
		        <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">settings</i>Settings
		      </a>
		       <a className="mdc-list-item" href="#">
		        <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">power_settings_new</i>Sign out
		      </a>
	       </nav>
	     </nav>
	  </aside>
	   <div className="demo-content">
	      <header className="mdc-toolbar mdc-elevation--z4">
	        <div className="mdc-toolbar__row">
	          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
	            <button className="demo-menu material-icons mdc-toolbar__icon--menu">menu</button>
	            <span className="mdc-toolbar__title catalog-title">eSource</span>
	            <Tabs />
	          </section>
	        </div>
	      </header>

	  </div>

	  
   </div>
   )
  }
}