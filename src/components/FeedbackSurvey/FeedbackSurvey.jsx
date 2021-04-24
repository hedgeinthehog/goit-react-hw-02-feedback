import PropTypes from 'prop-types';

const FeedbackSurvey = ({ options, onClick }) => (
  <>
    <h2>Please leave fedback</h2>
    {options.map(option => (
      <button type="button" key={option} onClick={onClick}>
        {option}
      </button>
    ))}
  </>
);

FeedbackSurvey.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeedbackSurvey;
