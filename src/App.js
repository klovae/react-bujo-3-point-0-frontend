import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DayTasksContainer from './containers/DayTasksContainer';
import Help from './components/Help';
import About from './components/About';
import Menu from './components/Menu';
import AllTasksContainer from './containers/AllTasksContainer';
import AllDaysContainer from './containers/AllDaysContainer';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="App" id="all-wrap">
          <Menu />
          <div id='content-wrap'>
              <div>
                <Route exact path="/today" component={DayTasksContainer} />
                <Route exact path="/tomorrow" component={DayTasksContainer} />
                <Route exact path="/all-tasks" component={AllTasksContainer} />
                <Route exact path="/all-days" component={AllDaysContainer} />
                <Route exact path="/about" component={About} />
                <Route exact path="/help" component={Help} />
              </div>
          </div>
        </div>
      </Router>
    );
  };
}

export default App;
