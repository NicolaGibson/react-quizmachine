import { combineReducers } from "redux";
import receiveQuestionReducer from "./receiveQuestionReducer";

export default combineReducers({
  result: receiveQuestionReducer
});
