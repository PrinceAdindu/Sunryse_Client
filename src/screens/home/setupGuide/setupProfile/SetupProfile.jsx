import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

import StyledButton from '../../../../components/styledButton/StyledButton';

import MeetingVector from '../../../../assets/MeetingVector.png';
import styles from './SetupProfile.module.scss';

SetupProfile.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  expand: PropTypes.func.isRequired,
  onStepCheck: PropTypes.func.isRequired,
};

export default function SetupProfile({ expanded, expand, onStepCheck }) {
  const isChecked = localStorage.getItem('setupProfileCheck');

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
        <div className={styles.summary}>
          <Checkbox
            checked={isChecked === 'true'}
            onChange={() => onStepCheck('setupProfileCheck')}
          />
          <p className={styles.title}>Name your practice</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.details}>
          <div className={styles.detailsContent}>
            <p className={styles.subTitle}>
              Your practice is currently untitled. The name will appear on your
              website and whenever a client searches for you.
            </p>
            <StyledButton
              className={styles.button}
              text="Name my practice"
              onClick={() => {}}
            />
          </div>
          <img className={styles.image} src={MeetingVector} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
