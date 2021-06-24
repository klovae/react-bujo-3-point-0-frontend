import React from 'react'
import Task from './Task'

const Tasks = props => {
  return (
    <div>
      {props.tasks.map(task => <Task task={task}/>)}
    </div>
  )
}

export default Tasks