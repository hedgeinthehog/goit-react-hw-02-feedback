import PropTypes from 'prop-types';

const FeedbackStatistics = ({ options }) => (
  <>
    <h2>Statistics</h2>
    {options.map(option => (
      <p key={option}>
        {option[0]}: {option[1]}
      </p>
    ))}
  </>
);

FeedbackStatistics.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.array,
  ),
};

export default FeedbackStatistics;
