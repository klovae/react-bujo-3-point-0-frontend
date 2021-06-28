import React, { Component } from "react";
import Tasks from '../components/Tasks'
import TaskInput from '../components/TaskInput'

class DayTasksContainer extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.day.date}</h1>
        <TaskInput />
        <Tasks tasks={this.props.day.tasks} />
      </div>
    )
  }
}

export default DayTasksContainer;