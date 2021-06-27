import React from 'react';

const Migrate = props => {
  let className;
  if (props.completed) {
    className = "icon migrate-disabled"
  } else {
    className = "icon migrate"
  }

  return (
    <button className={className}></button>
  )
}

export default Migrate