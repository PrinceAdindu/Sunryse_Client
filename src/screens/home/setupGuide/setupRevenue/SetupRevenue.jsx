import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RevenueVector from '../../../../assets/RevenueVector.png';

import styles from './SetupRevenue.module.scss';
import StyledButton from '../../../../components/styledButton/StyledButton';

SetupRevenue.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  expand: PropTypes.func.isRequired,
  incProgress: PropTypes.func.isRequired,
};

export default function SetupRevenue({ expanded, expand, incProgress }) {
  function openSchedule() {
    window.open(
      'https://calendly.com/tanrajdhillon/terra-marketing-call',
      '_blank',
    );
  }
  return (
    <Accordion
      className={
        expanded.includes('step3')
          ? styles.selectedAccord
          : styles.unselectedAccordian
      }
      expanded={expanded.includes('step3')}
      disableGutters
      onChange={() => expand('step3')}
      id="step3"
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <p className={styles.title}>Revenue</p>
      </AccordionSummary>
      <AccordionDetails>
        <p className={styles.text}>
          In order to setup your brand and online presence, schedule a call with
          one of Terra’s clinical branding experts.
        </p>
        <p className={styles.bulletListHeader}>During the call they will:</p>
        <div className={styles.bulletListContainer}>
          <ul className={styles.bulletList}>
            <li>Discover your unique value proposition</li>
            <li>Identify your ideal client</li>
            <li>Build a client pricing strategy</li>
            <li>Gather more information for your website</li>
          </ul>
          <img className={styles.image} src={RevenueVector} />
        </div>
        <StyledButton
          className={styles.button}
          text="Schedule a time"
          onClick={() => openSchedule()}
        />
      </AccordionDetails>
    </Accordion>
  );
}
