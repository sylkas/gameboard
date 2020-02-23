import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import boardReducer from "./boardReducer";

export default combineReducers({
  counter: counterReducer,
  board: boardReducer
});