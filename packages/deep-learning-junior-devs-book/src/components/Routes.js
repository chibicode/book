import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import App from './App'
import Home from './Home'
import Depth1 from './Depth1'

const Routes = () => (
  <Router history={ browserHistory }>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/depth/1' component={Depth1} />
    </Route>
  </Router>
)

export default Routes
