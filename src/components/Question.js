import React from "react";

class Question extends React.Component {
  constructor() {
    super();
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
    this.handleIncorrectAnswer = this.handleIncorrectAnswer.bind(this);
  }
  componentDidMount() {
    console.log("Step 1: calling fetchQuestion.");
    this.props.fetchQuestionFromAPI();
  }

  handleCorrectAnswer() {
    event.preventDefault();
    this.props.correctAnswer();
    this.props.fetchQuestionFromAPI();
  }

  handleIncorrectAnswer() {
    event.preventDefault();
    this.props.incorrectAnswer();
    this.props.fetchQuestionFromAPI();
  }

  render() {
    const { result } = this.props;
    const { score } = this.props;
    return (
      <div>
        {result.map(result => {
          return (
            <li key={result.question}>
              {result.question}
              <button onClick={this.handleCorrectAnswer}>
                {result.correct_answer}
              </button>
              {result.incorrect_answers.map(answer => {
                return (
                  <button onClick={this.handleIncorrectAnswer}>
                    <li>{answer}</li>
                  </button>
                );
              })}
            </li>
          );
        })}
        {score}
      </div>
    );
  }
}
export default Question;
