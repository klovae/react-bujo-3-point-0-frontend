import React, { Component } from "react";
import { connect } from 'react-redux';


class AllTasksContainer extends Component {
  render() {
    return (
      <div>
        Tasks
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTasksContainer);