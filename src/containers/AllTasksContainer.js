import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchTasks } from "../actions/taskActions";
import { fetchDays } from "../actions/dayActions";
import Tasks from '../components/Tasks'
import TaskInput from '../components/TaskInput'


class AllTasksContainer extends Component {

  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    return (
      <div>
        <h1>All Tasks</h1>
        <TaskInput />
        <Tasks tasks={this.props.tasks} />
      </div>
    )
  }
}

AllTasksContainer.defaultProps = {
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
    fetchTasks: () => dispatch(fetchTasks()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTasksContainer);