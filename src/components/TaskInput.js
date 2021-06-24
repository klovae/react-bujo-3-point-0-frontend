import React, { Component } from 'react';

class TaskInput extends Component {
  state={
    content: ''
  }

  handleChange = event => {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.content)
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="content" onChange={this.handleChange} value={this.state.content} placeholder="Task text here"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default TaskInput;