import { useState } from 'react';
import SetupMarketing from './setupMarketing/SetupMarketing';
import SetupRevenue from './setupRevenue/SetupRevenue';
import SetupBusinessHours from './setupBusinessHours/SetupBusinessHours';
import Launch from './launch/Launch';
import ProgressBar from '../../../components/progressBar/ProgressBar';

import styles from './SetupGuide.module.scss';

export default function SetupGuide() {
  const [expanded, setExpanded] = useState([]);
  const [progress, setProgress] = useState(0);

  const tasksCompleted = Math.floor(progress / 33);

  const expand = (step) => {
    setExpanded((prevExpanded) => {
      if (prevExpanded.includes(step)) {
        return prevExpanded.filter((item) => item !== step);
      } else {
        return [...prevExpanded, step];
      }
    });
  };

  const incProgress = () => {
    if (progress === 66) {
      setProgress(100);
    } else {
      setProgress(progress + 33);
    }
  };

  const SetupHeader = () => (
    <div className={styles.setupHeaderContainer}>
      <p className={styles.title}>Setup Guide</p>
      <p className={styles.text}>
        Use this personalized setup guide to get your practice up and runnnig.
      </p>
      <div className={styles.progressContainer}>
        <p className={styles.progressBarText}>
          {tasksCompleted} out of 3 tasks completed
        </p>
        <div className={styles.progressBar}>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SetupHeader />
      <div className={styles.setupAccordianContainer}>
        <SetupMarketing
          expanded={expanded}
          expand={expand}
          incProgress={incProgress}
        />
        <SetupBusinessHours
          expanded={expanded}
          expand={expand}
          incProgress={incProgress}
        />
        <SetupRevenue
          expanded={expanded}
          expand={expand}
          incProgress={incProgress}
        />
        <Launch expanded={expanded} expand={expand} progress={progress} />
      </div>
    </>
  );
}
