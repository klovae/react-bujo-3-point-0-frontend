import React from 'react';
import Bullet from './taskbuttons/Bullet';
import Migrate from './taskbuttons/Migrate';
import Edit from './taskbuttons/Edit';
import Delete from './taskbuttons/Delete';
import { connect } from 'react-redux';
import { completeTask } from '../actions/taskActions'

const Task = props => {
  return (
    <div className="task-container">
      <Bullet completed={props.task.complete} completeTasl={props.completeTask}/>
      {props.task.content}
      <Migrate completed={props.task.complete} />
      <Edit />
      <Delete />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  completeTask = () => dispatch(completeTask())
}

export default connect(null, mapDispatchToProps)(Task)