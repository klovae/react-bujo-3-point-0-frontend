import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchTasks } from "../actions/taskActions";
import Tasks from '../components/Tasks'
import TaskInput from '../components/TaskInput'


class TasksContainer extends Component {

  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    return (
      <div>
        <h1>All Tasks</h1>
        <Tasks tasks={this.props.tasks} />
        <TaskInput />
      </div>
    )
  }
}

TasksContainer.defaultProps = {
  tasks: [ "Tasks Are Loading" ]
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    loading: state.tasks.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);