export function fetchQuestionFromAPI(quizQuestion) {
  return function(dispatch) {
    fetch(
      `https://opentdb.com/api.php?amount=1&category=20&difficulty=medium&type=multiple`
    )
      .then(response => response.json())

      .then(result => {
        dispatch(receiveQuestion(result));
        console.log(result);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export function receiveQuestion(result) {
  return {
    type: "RECEIVE_QUESTION",
    result: result.results
  };
}

export function correctAnswer() {
  return {
    type: "CORRECT_ANSWER"
  };
}

export function incorrectAnswer() {
  return {
    type: "INCORRECT_ANSWER"
  };
}
