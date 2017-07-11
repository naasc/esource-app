import React from 'react'

import Cloud from './components/Cloud'
import Home from './components/Home'

import { Route, Switch } from 'react-router-dom'

const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cloud' component={Cloud}/>
    </Switch>
  </main>
)

export default Main