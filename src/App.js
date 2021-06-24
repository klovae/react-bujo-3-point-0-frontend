import React from 'react'
import TasksContainer from './containers/TasksContainer'
import DayContainer from './containers/DayContainer'

class App extends React.Component {
  render () {
    return (
      <div className="App" id="all-wrap">
        <DayContainer />
        <TasksContainer />
      </div>
    );
  }
}

export default App;
