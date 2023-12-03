import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MeetingVector from '../../../../assets/MeetingVector.png';

import styles from './SetupMarketing.module.scss';
import StyledButton from '../../../../components/styledButton/StyledButton';

SetupMarketing.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  expand: PropTypes.func.isRequired,
  incProgress: PropTypes.func.isRequired,
};

export default function SetupMarketing({ expanded, expand, incProgress }) {
  function openSchedule() {
    window.open(
      'https://calendly.com/tanrajdhillon/terra-marketing-call',
      '_blank',
    );
  }
  return (
    <Accordion
      className={`${styles.topAccordian} 
        ${
          expanded.includes('step2')
            ? styles.selectedAccordian
            : styles.unselectedAccordian
        }
      `}
      expanded={expanded.includes('step2')}
      disableGutters
      onChange={() => expand('step2')}
      id="step2"
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <p className={styles.title}>Marketing</p>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.details}>
          <div className={styles.bulletListContiainer}>
            <p className={styles.subTitle}>
              Schedule a call with one of Terra’s Clinical-Branding experts
            </p>
            <p className={styles.text}>During the call they will:</p>
            <ul className={styles.bulletList}>
              <li>Identify your unqiue value</li>
              <li>Identify your ideal client and pricing strategy</li>
              <li>Gather more information for your custom website</li>
              <li>Explain Terra's marketing approach to bring you clients</li>
            </ul>
          </div>
          <img className={styles.image} src={MeetingVector} />
        </div>
        <StyledButton
          className={styles.button}
          text="Schedule Time"
          onClick={() => openSchedule()}
        />
      </AccordionDetails>
    </Accordion>
  );
}
