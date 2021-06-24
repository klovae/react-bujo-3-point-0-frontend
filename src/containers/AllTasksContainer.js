import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchAllTasks } from "../actions/taskActions";


class AllTasksContainer extends Component {

  componentDidMount() {
    this.props.fetchAllTasks()
  }

  render() {
    return (
      <div>
        <h1>All Tasks</h1>
        <ul>
          {this.props.tasks.map((task) => <li key={task.id}>{task.content}</li>)}
        </ul>
      </div>
    )
  }
}

AllTasksContainer.defaultProps = {
  tasks: [ "Tasks Are Loading"]
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    loading: state.tasks.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTasksContainer);