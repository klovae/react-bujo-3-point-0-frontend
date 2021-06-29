import React from 'react';

const Bullet = props => {
  
  if (props.completed) {
    return (
      <button className='icon completed'></button>
    )
  } else {
    return (
      <button onClick={() => props.completeTask(props.taskId)} className='icon complete'></button>
    )
  }

  
}

export default Bullet