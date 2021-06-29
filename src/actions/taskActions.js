import { addTaskToDay, updateTaskInDay } from "./dayActions"

export const fetchOpenTasks = () => {
  return (dispatch) => {
    console.log('first dispatch')
    dispatch(pendingTasks())
    console.log('fetching tasks')
    fetch('http://localhost:3001/api/tasks')
      .then(response => response.json())
      .then(taskData => {
        dispatch(loadTasks(taskData))
      })
  }
}

export const pendingTasks = () => {
  return {
    type: 'PENDING_TASKS'
  }
}


export const loadTasks = tasks => {
  return {
    type: 'LOAD_TASKS',
    tasks
  }
}

export const postTask = taskObj => {
  return (dispatch) => {
  const taskPost = {
    content: taskObj.content,
    day_id: taskObj.dayId
  }

  console.log(taskPost)

  fetch('http://localhost:3001/api/tasks', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(taskPost)
  })
    .then(response => response.json())
    .then(taskData => {
      dispatch(addTaskToDay(taskData))
    })
  }
}

export const completeTask = taskObj => {
  return (dispatch) => {
    const taskPost = {
      id: taskObj.id,
      complete: true
    }

    fetch(`http://localhost:3001/api/tasks/${taskObj.id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(taskPost)
    })
      .then(response => response.json())
      .then(taskData => {
        dispatch(updateTaskInDay(taskData))
      })
  }
}