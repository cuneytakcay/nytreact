import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from './components/Nav'
import Collection from './pages/Collection'
import Detail from './pages/Detail'
import NoMatch from './pages/NoMatch'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Collection} />
            <Route exact path='/articles' component={Collection} />
            <Route exact path='/articles/:id' component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
