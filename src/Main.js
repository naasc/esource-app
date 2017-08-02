import React from 'react'

import Cloud from './components/Cloud'
import Home from './components/Home'
import Login from './components/login/Login'
import { Route, Switch } from 'react-router-dom'

const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/cloud' component={Cloud}/>
    </Switch>
   
)

export default Main