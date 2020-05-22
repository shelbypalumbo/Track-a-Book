// combineReducer brings together all other reducers ex auth reducer, books reducer
import { combineReducers } from "redux";
import bookReducer from "./bookReducer";

export default combineReducers({
  book: bookReducer
  // auth: authReducer
});
