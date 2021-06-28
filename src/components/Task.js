import React from 'react'
import Bullet from './taskbuttons/Bullet'
import Migrate from './taskbuttons/Migrate'
import Edit from './taskbuttons/Edit'
import Delete from './taskbuttons/Delete'

const Task = props => {
  return (
    <div className="task-container">
      <Bullet completed={props.task.complete} />
      {props.task.content}
      <Migrate completed={props.task.complete} />
      <Edit />
      <Delete />
    </div>
  )
}

export default Task