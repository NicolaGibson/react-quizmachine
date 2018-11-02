import { combineReducers } from "redux";
import receiveQuestionReducer from "./receiveQuestionReducer";
import score from "./score";

export default combineReducers({
  result: receiveQuestionReducer,
  score
});
