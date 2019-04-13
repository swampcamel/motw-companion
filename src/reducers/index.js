import { combineReducers } from "redux";

import data from "./mainReducer";
import auth from "./authReducer"

export default combineReducers({
  data,
  auth
});
