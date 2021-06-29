import React, { Component } from "react";
import Tasks from '../components/Tasks'
import TaskInput from '../components/TaskInput'
import Day from "../components/Day";

class DayTasksContainer extends Component {

  render() {
    return (
      <div>
        <h1><Day day={this.props.day} /></h1>
        <TaskInput day={this.props.day} />
        <Tasks tasks={this.props.day.tasks} />
      </div>
    )
  }
}

export default DayTasksContainer;