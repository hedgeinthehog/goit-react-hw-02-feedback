import PropTypes from 'prop-types';

const FeedbackStatistics = ({ options }) => {
  const countTotalFeedbacks = options => {
    const totalFeedbacks = Object.values(options).reduce(
      (total, option) => total + option,
    );

    return totalFeedbacks;
  };

  const countPositiveFeedbackPercentage = options => {
    const positiveFeedbacks = options.good;
    const totalFeedbacks = countTotalFeedbacks(options);

    const positiveFeedbackPercentage = totalFeedbacks
      ? (positiveFeedbacks / totalFeedbacks) * 100
      : 0;

    return Math.round(positiveFeedbackPercentage);
  };

  return (
    <>
      <h2>Statistics</h2>
      {Object.entries(options).map(option => (
        <p key={option}>
          {option[0]}: {option[1]}
        </p>
      ))}
      <p>Total: {countTotalFeedbacks(options)}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage(options)}%</p>
    </>
  );
};

FeedbackStatistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
};

export default FeedbackStatistics;
