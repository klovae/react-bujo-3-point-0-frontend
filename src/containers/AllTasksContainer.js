import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchOpenTasks } from "../actions/taskActions";
import Tasks from '../components/Tasks'
import TaskInput from '../components/TaskInput'


class AllTasksContainer extends Component {

  componentDidMount() {
    this.props.fetchOpenTasks()
  }

  render() {
    return (
      <div>
        <h1>All Open Tasks</h1>
        <Tasks tasks={this.props.tasks} />
      </div>
    )
  }
}

AllTasksContainer.defaultProps = {
  tasks: [ "No Tasks (Yet)" ]
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    loading: state.tasks.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOpenTasks: () => dispatch(fetchOpenTasks()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTasksContainer);