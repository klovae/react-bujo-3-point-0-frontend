import { combineReducers } from "redux";

const rootReducer = combineReducers({
  days: daysReducer,
  tasks: tasksReducer
});

export default rootReducer;

function daysReducer(state = {days: [], loading: false}, action) {
  switch(action.type) {
    case 'PENDING_DAYS':
      return {
        ...state,
        days: action.days,
        loading: true
      };
    case 'LOAD_DAYS':
      return {
        ...state,
        days: action.days,
        loading: false
      };
    case 'ADD_TASK_TO_DAY':
      let index = state.days.findIndex(day => day.id === action.taskObj.day_id);
      let taskDay = state.days[index];

      return {
        ...state,
        days: [
          ...state.days.slice(0, index),
          Object.assign({}, taskDay, { tasks: taskDay.tasks.concat(action.taskObj)}),
          ...state.days.slice(index + 1)
        ],
        loading: false
      };

    case 'UPDATE_TASK_IN_DAY':
      let dayIndex = state.days.findIndex(day => day.id === action.taskObj.day_id);
      let updatedTaskDay = state.days[dayIndex];
      let taskIndex = updatedTaskDay.tasks.findIndex(task => task.id === action.taskObj.id);

      return {
        ...state,
        days: [
          ...state.days.slice(0, dayIndex),
          Object.assign({}, updatedTaskDay, { tasks: [
            ...updatedTaskDay.tasks.slice(0, taskIndex),
            action.taskObj,
            ...updatedTaskDay.tasks.slice(taskIndex + 1)
          ]}),
          ...state.days.slice(dayIndex + 1)
        ],
        loading: false
      }

    default:
      return state;
  }
};

function tasksReducer(state = {tasks: [], loading: false}, action) {
  switch(action.type) {
    case 'PENDING_TASKS':
      return {
        ...state,
        tasks: action.tasks,
        loading: true
      }
    case 'LOAD_TASKS':
      console.log(state)
      return {
        ...state,
        tasks: action.tasks,
        loading: false
      }
    default:
      return state;
  }
};