import React from "react";
import QuestionContainer from "../containers/QuestionContainer";

class App extends React.Component {
  constructor(props) {
    super(props);

    // const reduxState = this.props.store.getState();

    // this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Quiz</h1>
        <QuestionContainer />
      </div>
    );
  }
}

export default App;
