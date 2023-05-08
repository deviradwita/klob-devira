import {legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


const initialState = {
    Jobs: [],
    detail : {}
};

export function JobsReducer(state = initialState, action) {
  if (action.type === "Jobs/fetchSuccess") {
    return {
      ...state,
      Jobs: action.payload,
    };
  } else {
    return state;
  }
}

let store = createStore(JobsReducer, applyMiddleware(thunk));

export default store;