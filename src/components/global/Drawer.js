import React, {PureComponent} from 'react';
import {Set as ImmutableSet, Map as ImmutableMap} from 'immutable';
import '@material/drawer/dist/mdc.drawer.css';
import Tabs from './Tabs';


const Drawer = () => (

 
  <aside className="mdc-persistent-drawer">
      <nav className="mdc-persistent-drawer__drawer">
        <div className="mdc-persistent-drawer__toolbar-spacer"></div>
        <div className="mdc-list-group">
          <nav className="mdc-list">
            <a className="mdc-list-item mdc-persistent-drawer--selected" href="#" data-mdc-tabIndex-handled="true" tabIndex="-1">
              <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">assignment</i>Assignments
            </a>
            <a className="mdc-list-item" href="#" data-mdc-tabIndex-handled="true" tabIndex="-1">
              <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">favorite</i>Favorite
            </a>
            <a className="mdc-list-item" href="#" data-mdc-tabIndex-handled="true" tabIndex="-1">
              <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">people</i>Share
            </a>
            <a className="mdc-list-item" href="#" data-mdc-tabIndex-handled="true" tabIndex="-1">
              <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">show_chart</i>Analytics
            </a>
          </nav>

         

          <nav className="mdc-list">
              <a className="mdc-list-item" href="#" data-mdc-tabIndex-handled="true" tabIndex="-1">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">card_travel</i>Briefcase
              </a>
              <a className="mdc-list-item" href="#" data-mdc-tabIndex-handled="true" tabIndex="-1">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">settings</i>Settings
              </a>
              <a className="mdc-list-item" href="#" data-mdc-tabIndex-handled="true" tabIndex="-1">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">power_settings_new</i>Login
              </a>
            </nav>
          </div>
      </nav>
    </aside>
 )

export default Drawer