import { connect } from "react-redux";
import Question from "../components/Question";
import {
  fetchQuestionFromAPI,
  incorrectAnswer,
  correctAnswer
} from "../actions";

const mapStateToProps = reduxState => {
  console.log("mapStateToProps: ", reduxState);
  return {
    result: reduxState.result,
    score: reduxState.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestionFromAPI: () => {
      dispatch(fetchQuestionFromAPI());
      console.log("Step 2: getting action creator");
    },

    correctAnswer: () => {
      dispatch(correctAnswer());
    },
    incorrectAnswer: () => {
      dispatch(incorrectAnswer());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
