import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import './App.css';

function App() {
  const [respCount, setrespCount] = useState(() => {
    const saveCount = localStorage.getItem('respCount');
    if (saveCount !== null) {
      return JSON.parse(saveCount);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const updateFeedback = (feedbackType) => {
    setrespCount({
      ...respCount,
      [feedbackType]: respCount[feedbackType] + 1,
    });
  };
  const totalFeedback = respCount.good + respCount.neutral + respCount.bad;
  // const positiveFeedback = Math.round((respCount / totalFeedback) * 100);

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((respCount.good / totalFeedback) * 100) : 0;
  const resetFeedback = () => {
    setrespCount({ good: 0, neutral: 0, bad: 0 });
  };
  useEffect(() => {
    const prevCount = localStorage.getItem('respCount');
    if (prevCount !== JSON.stringify(respCount)) {
      localStorage.setItem('respCount', JSON.stringify(respCount));
    }
  }, [respCount]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={respCount.good}
          neutral={respCount.neutral}
          bad={respCount.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
