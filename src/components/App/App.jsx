import React from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';

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

  countTotalFeedbacks = options => {
    const totalFeedbacks = Object.values(options).reduce(
      (total, option) => total + option,
    );

    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = options => {
    const positiveFeedbacks = options.good;
    const totalFeedbacks = this.countTotalFeedbacks(options);

    const positiveFeedbackPercentage = totalFeedbacks
      ? (positiveFeedbacks / totalFeedbacks) * 100
      : 0;

    return Math.round(positiveFeedbackPercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedbackBtnClick}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedbacks(this.state)}
          positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
        />
      </>
    );
  }
}

export default App;
