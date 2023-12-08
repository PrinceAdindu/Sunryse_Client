import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

import StyledButton from '../../../../components/styledButton/StyledButton';

import MeetingVector from '../../../../assets/MeetingVector.png';
import styles from './SetupProducts.module.scss';

SetupProducts.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  expand: PropTypes.func.isRequired,
  onStepCheck: PropTypes.func.isRequired,
};

export default function SetupProducts({ expanded, expand, onStepCheck }) {
  const isChecked = localStorage.getItem('setupProductsCheck');

  return (
    <Accordion
      className={
        expanded.includes('step4')
          ? styles.selectedAccord
          : styles.unselectedAccordian
      }
      expanded={expanded.includes('step4')}
      disableGutters
      onChange={() => expand('step4')}
      id="step4"
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className={styles.summary}>
          <Checkbox
            checked={isChecked === 'true'}
            onChange={() => onStepCheck('setupProductsCheck')}
          />
          <p className={styles.title}>Create your first bookable session</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.details}>
          <div className={styles.detailsContent}>
            <p className={styles.subTitle}>
              Write a description, add availability, and set pricing for the
              sessions you plan to offer.
            </p>
            <StyledButton
              className={styles.button}
              text="Create a session"
              onClick={() => {}}
            />
          </div>
          <img className={styles.image} src={MeetingVector} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
