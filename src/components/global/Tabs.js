import React, { PureComponent, PropTypes} from 'react';
import { Set as ImmutableSet, Map as ImmutableMap } from 'immutable';
import '@material/tabs/dist/mdc.tabs.css';

export default class Tabs extends PureComponent {
  render() {
    return (
       <nav id="basic-tab-bar" className="mdc-tab-bar">
		     <a className="mdc-tab mdc-tab--active" href="#">Home</a>
		     <a className="mdc-tab" href="#about">About</a>
		     <a className="mdc-tab" href="#info">Info</a>
		     <span className="mdc-tab-bar__indicator"></span>
       </nav>
    )

  }

}
