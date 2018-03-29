import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from './components/Nav'
import Articles from './pages/Articles'
import NoMatch from './pages/NoMatch'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Articles} />
            <Route exact path='/articles' component={Articles} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
