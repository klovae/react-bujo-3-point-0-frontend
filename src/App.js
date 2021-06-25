import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TasksContainer from './containers/TasksContainer'
import DayContainer from './containers/DayContainer'
import Menu from './components/Menu'

class App extends React.Component {
  render () {
    return (
      <div className="App" id="all-wrap">
        <Menu />
        <div id='content-wrap'>
          <DayContainer />
          <TasksContainer />
        </div>
      </div>
    );
  }
}

export default App;
