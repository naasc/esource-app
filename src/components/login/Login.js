import React, { Component } from 'react'
import '@material/textfield/dist/mdc.textfield.css';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/button/dist/mdc.button.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
   }
   render() {
    return (
      <div className="login-form">
        <div className="mdc-form-field mdc-form-field--align-end">
          <div id="username" className="mdc-textfield" data-demo-no-auto-js="">
            <input type="text" className="mdc-textfield__input" id="css-only-textfield" placeholder="Name"/>
          </div>
          <label htmlFor="css-only-textfield">Your name:</label>
          
        </div>
        <div className="mdc-form-field mdc-form-field--align-end">
         <div id="pword" className="mdc-textfield" data-demo-no-auto-js="">
            <input type="password" className="mdc-textfield__input" id="css-only-textfield" placeholder="Password"/>
          </div>
          <label htmlFor="css-only-textfield">Password:</label>
        </div>
        <button className="mdc-button mdc-button--raised" data-demo-no-js="">
            Login
          </button>
      </div>
    );
  }
}


export default Login;