import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchTasks } from "../actions/taskActions";
import Tasks from '../components/Tasks'


class AllTasksContainer extends Component {

  componentDidMount() {
    this.props.fetchTasks()
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
    fetchTasks: () => dispatch(fetchTasks()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTasksContainer);