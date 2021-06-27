import React from 'react'

const Bullet = props => {
  let className
  if (props.completed) {
    className = "icon completed"
  } else {
    className = "icon complete"
  }

  return (
    <button className={className}></button>
  )
}

export default Bullet