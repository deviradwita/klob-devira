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
  } else {
    return state;
  }
}


const persistedReducer = persistReducer(persistConfig, JobsReducer);

let store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

// Invoke persistor.purge() to delete persisted data
// persistor.purge();

export { store, persistor };





