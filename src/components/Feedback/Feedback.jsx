import css from './Feedback.module.css';
const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.container}>
      <li>Good: {good} </li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad} </li>
      <li>Total: {totalFeedback} </li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};
export default Feedback;
