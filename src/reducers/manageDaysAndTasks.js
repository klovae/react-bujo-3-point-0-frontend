import { combineReducers } from "redux";

const rootReducer = combineReducers({
  days: daysReducer,
  tasks: tasksReducer
});

export default rootReducer;

function daysReducer(state = [], action) {
  return state;
};

function tasksReducer(state = [], action) {
  return state;
};