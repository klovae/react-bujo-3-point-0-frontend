import { combineReducers } from "redux";

const rootReducer = combineReducers({
  days: daysReducer,
  tasks: tasksReducer
});

export default rootReducer;

function daysReducer(state = {days: [], loading: false}, action) {
  return state;
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