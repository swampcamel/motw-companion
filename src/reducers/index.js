import { combineReducers } from "redux"

import data from "./mainReducer"
import auth from "./authReducer"
import game from "./gameBoardReducer"

export default combineReducers({
  data,
  auth,
  game
});
