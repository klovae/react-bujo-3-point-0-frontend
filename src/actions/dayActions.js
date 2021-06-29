export const fetchDays = () => {
  return (dispatch) => {
    console.log('first dispatch')
    dispatch(pendingDays())
    console.log('fetching days')
    fetch('http://localhost:3001/api/days')
      .then(response => response.json())
      .then(daysData => {
        dispatch(loadDays(daysData))
      })
  }
}

export const pendingDays = () => {
  return {
    type: 'PENDING_DAYS'
  }
}


export const loadDays = days => {
  return {
    type: 'LOAD_DAYS',
    days
  }
}

export const addTaskToDay = taskObj => {
  return {
    type: 'ADD_TASK_TO_DAY',
    taskObj
  }
}