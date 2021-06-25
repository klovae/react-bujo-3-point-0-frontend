import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TasksContainer from './containers/TasksContainer'
import Help from './components/Help'
import About from './components/About'
import Menu from './components/Menu'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="App" id="all-wrap">
          <Menu />
          <div id='content-wrap'>
            
              <div>
                <Route exact path="/today" component={TasksContainer} />
                <Route exact path="/tomorrow" component={TasksContainer} />
                <Route exact path="/about" component={About} />
                <Route exact path="/help" component={Help} />
              </div>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
