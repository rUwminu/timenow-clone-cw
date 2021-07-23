import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Plan from './Plan'
import { Navbar, Footer } from '../Components/index'

const MainPage = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/timenow-clone-cw/plan'>
          <Plan />
        </Route>
        <Route path='/timenow-clone-cw' exact={true}>
          <Home />
        </Route>
        <Route path='*'>
          <div>Error...</div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default MainPage
