import React from 'react';
import FeedbackSurvey from '../FeedbackSurvey';
import FeedbackStatistics from '../FeedbackStatistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackBtnClick = event => {
    const { innerText } = event.target;

    this.setState(prevState => ({
      [innerText]: prevState[innerText] + 1,
    }));
  };

  render() {
    return (
      <>
        <FeedbackSurvey
          options={Object.keys(this.state)}
          onClick={this.handleFeedbackBtnClick}
        />
        <FeedbackStatistics options={this.state} />
      </>
    );
  }
}

export default App;
