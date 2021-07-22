import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './HomeIndie'
import SignUp from './LoginRegister'

const MainPage = () => {
  return (
    <Router>
      <Switch>
        <Route path='/indiebrew-clone-cw/user'>
          <SignUp />
        </Route>
        <Route path='/indiebrew-clone-cw' exact={true}>
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
