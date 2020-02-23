import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  
  return result;
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;