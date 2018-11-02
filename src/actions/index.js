export function fetchQuestionFromAPI(quizQuestion) {
  return function(dispatch) {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple`
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

/* export function verifyAnswer(answerToQuestion){
  return{
    type: 'RECEIEVE_ANSWER,
    answer
  }
}*/

/* export function updateScore (score){
  return{
   type: 'RECEIVE_SCORE',
   score
  }
} */
