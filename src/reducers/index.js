// this will be helpful for combining auth, articles, comments, etc.
import { combineReducers } from "redux";
import tutorials from "./tutorials";

export default combineReducers({
  tutorials,
});