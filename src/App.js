import React from 'react'
import AllTasksContainer from './containers/AllTasksContainer'

class App extends React.Component {
  render () {
    return (
      <div className="App" id="all-wrap">
         <AllTasksContainer />
      </div>
    );
  }
}

export default App;
