
import React from 'react'
import Header from './components/global/Header'
import Drawer from './components/global/Drawer'
import Main from './Main'


const App = (props) => (

 <div id="data-reactroot" className="demo-body mdc-typography">
 
    <Drawer />
    <div className="demo-content">
      <header className="mdc-toolbar mdc-elevation--z4">
        <div className="mdc-toolbar__row">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <button className="demo-menu material-icons mdc-toolbar__icon--menu">menu</button>
            <span className="mdc-toolbar__title catalog-title">
               <img src='./images/logo.png' alt="profile picture"/>
            </span>
          </section>
        </div>
      </header>
      
      
      <Main />

      </div>
    </div>
)



export default App;
