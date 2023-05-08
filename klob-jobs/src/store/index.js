import {legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const initialState = {
    Jobs: [],
    detail : {}
};

const persistConfig = {
  key: "root",
  storage,
};

export function JobsReducer(state = initialState, action) {
  if (action.type === "Jobs/fetchSuccess") {
    return {
      ...state,
      Jobs: action.payload,
    };
  } else if (action.type === "Jobs/addSuccess") {
    return {
      ...state,
      Jobs: [...state.Jobs, action.payload],
    };
  }  else if (action.type === "job/fetchSuccess") {
    return {
      ...state,
      detail: action.payload,
    };
  } else if (action.type === "applyJob/Success") {
    const updatedJobs = state.Jobs.map(job => {
      if (job.jobVacancyCode === action.payload) {
        return { ...job, applied: true }
      }
      return job
    })
    return { ...state, Jobs: updatedJobs }
    
  } else if (action.type === "cancelJob/Success") {
    const updatedJobs = state.Jobs.map(job => {
      if (job.jobVacancyCode === action.payload) {
        return { ...job, applied: false }
      }
      return job
    })
    return { ...state, Jobs: updatedJobs }
    
  }  else {
    return state;
  }
}


const persistedReducer = persistReducer(persistConfig, JobsReducer);

let store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);



// Invoke persistor.purge() to delete persisted data
// persistor.purge();

export { store, persistor };







