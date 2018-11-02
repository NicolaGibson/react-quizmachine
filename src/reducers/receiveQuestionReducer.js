function receiveQuestionReducer(state = [], action) {
  switch (action.type) {
    case "RECEIVE_QUESTION":
      return action.result;
    default:
      return state;
  }
}

// function receiveAnswer(state = {}, action) {
//   switch (action.type) {
//     case "RECEIVE_ANSWER":
//     default:
//       return state;
//   }
// }

// function updateScore(state = {}, action) {
//   switch (action.type) {
//     case "RECEIVE_SCORE":
//     default:
//       return state;
//   }
// }
export default receiveQuestionReducer;
