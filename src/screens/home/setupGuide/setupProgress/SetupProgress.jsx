import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProgressBar from '../../../../components/progressBar/ProgressBar';

import styles from './SetupProgress.module.scss';

SetupProgress.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  expand: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

export default function SetupProgress({ expanded, expand, progress }) {
  return (
    <Accordion
      className={`${styles.topAccordian} ${
        expanded.includes('step1')
          ? styles.selectedAccordian
          : styles.unselectedAccordian
      }`}
      expanded={expanded.includes('step1')}
      disableGutters
      onChange={() => expand('step1')}
      id="step1"
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <p className={styles.title}>Setup Guide</p>
      </AccordionSummary>
      <AccordionDetails>
        <p className={styles.text}>
          Use this personalized setup guide to get your practice up and runnnig.
        </p>
        <div className={styles.progressContainer}>
          <p className={styles.progressBarText}>0 out of 3 tasks completed</p>
          <div className={styles.progressBar}>
            <ProgressBar progress={progress} />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
