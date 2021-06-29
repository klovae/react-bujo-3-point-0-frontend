import { fetchDays } from "./dayActions"

export const fetchOpenTasks = () => {
  return (dispatch) => {
    console.log('first dispatch')
    dispatch(pendingTasks())
    console.log('fetching tasks')
    fetch('http://localhost:3002/api/tasks')
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
/*
  fetch('http://localhost:3002/tasks', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(taskPost)
  })
    .then(response => response.json())
    .then(() => {
      dispatch(fetchDays())
    })  */
  }
}