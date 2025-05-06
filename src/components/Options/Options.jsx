import css from './Options.module.css';
const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.container}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>reset</button>}
    </div>
  );
};
export default Options;
