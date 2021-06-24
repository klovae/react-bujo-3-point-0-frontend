import React from 'react'

const Task = props => {
  return (
    <div>
      <button>Complete</button>
      {props.task.content}
    </div>
  )
}

export default Task