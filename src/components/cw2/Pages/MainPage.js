import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import { SignUp } from '../Components'

const MainPage = () => {
  return (
    <Router>
      <Switch>
        <Route path='/fiber-clone-cw/user'>
          <SignUp />
        </Route>
        <Route path='/fiber-clone-cw' exact={true}>
          <Home />
        </Route>
        <Route path='*'>
          <div>Error...</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default MainPage
