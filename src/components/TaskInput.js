import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postTask } from "../actions/taskActions";

class TaskInput extends Component {
  state={
    content: '',
    dayId: 0
  }

  handleChange = event => {
    this.setState({
      content: event.target.value,
      dayId: this.props.day.id
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.postTask(this.state)
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" className="icon add" value=''></input> 
          <input type="text" name="content" onChange={this.handleChange} value={this.state.content} placeholder="Task text here"></input>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postTask: (taskObj) => dispatch(postTask(taskObj))
    }
  }
  

export default connect(null, mapDispatchToProps)(TaskInput);