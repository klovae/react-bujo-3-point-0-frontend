export const fetchAllTasks = () => {
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
/*
export const addTask = task => {
  return {
    type: 'ADD_TASK',
    task
  }
}
*/