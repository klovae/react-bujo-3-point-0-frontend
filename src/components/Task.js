import React from 'react'

const Task = props => {
  return (
    <div className="task-container">
      <button className="icon complete"></button>
      {props.task.content}
      <button className="icon migrate"></button>
      <button className="icon edit"></button>
      <button className="icon delete"></button>
    </div>
  )
}

export default Task