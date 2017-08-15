import React, { Component } from 'react'
import '@material/textfield/dist/mdc.textfield.css';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/button/dist/mdc.button.css';
import * as Mbe from '../../mbe/mbe'

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
   }

    onSuccess = () => (
      console.log("Login success")
    )

    onFailure = () => (
      console.log("Login failure")
    )
    onLogin = () => {
       console.log(this.state);
  
       Mbe.authenticate(this.state);
    }
    updateName(value) {
      this.setState({username: value});
    }
    updatePassword(value) {
      this.setState({password: value});
    }
   render() {

    const { username, password } = this.state

    return (
      <div className="login-form">
        <div className="mdc-form-field mdc-form-field--align-end">
          <div id="username" className="mdc-textfield" data-demo-no-auto-js="">
            <input onChange={(event) => this.updateName(event.target.value)} type="text" 
            className="mdc-textfield__input" id="css-only-textfield" placeholder="Name"/>
          </div>
          <label htmlFor="css-only-textfield">Your name:</label>
          
        </div>
        <div className="mdc-form-field mdc-form-field--align-end">
         <div id="pword" className="mdc-textfield" data-demo-no-auto-js="">
            <input type="password" onChange={(event) => this.updatePassword(event.target.value)} className="mdc-textfield__input" id="css-only-textfield" placeholder="Password"/>
          </div>
          <label htmlFor="css-only-textfield">Password:</label>
        </div>
        <button onClick={this.onLogin} className="mdc-button mdc-button--raised" data-demo-no-js="">
            Login
          </button>

         
      </div>
    );
  }
}


export default Login;