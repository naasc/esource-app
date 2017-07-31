import React, { PureComponent} from 'react';
import '@material/tabs/dist/mdc.tabs.css';

export default class Tabs extends PureComponent {
  render() {
    return (
      <div>
      <div className="demo-grid mdc-layout-grid">
            <div className="mdc-layout-grid__inner">
              <div className="demo-cell mdc-layout-grid__cell--span-6">
                 <nav id="basic-tab-bar" className="mdc-tab-bar">
                   <a className="mdc-tab mdc-tab--active" href="">Business Practices</a>
                   <a className="mdc-tab" href="">Price Lists</a>
                   <a className="mdc-tab" href="">Managed Business Practices</a>
                   <a className="mdc-tab" href="">Approvals</a>
                 </nav>
              </div>
            </div>
      </div>
      <div className="demo-grid mdc-layout-grid">
            <div className="mdc-layout-grid__inner">
              <div className="demo-cell mdc-layout-grid__cell--span-6">
                 <nav id="basic-tab-bar" className="mdc-tab-bar">
                 <a className="mdc-tab" href="">Approvals</a>
                 <a className="mdc-tab" href="">Localizations</a>
                 <a className="mdc-tab" href="">Training</a>
                 <a className="mdc-tab" href="">Process & Templates</a>
                 <a className="mdc-tab" href="">Dashboard</a>
                 <span className="mdc-tab-bar__indicator"></span>
               </nav>
              </div>
            </div>
    </div>
    </div>
    )

  }

}
