import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CheckBox from '../../../../components/checkbox/Checkbox';
import StyledButton from '../../../../components/styledButton/StyledButton';
import ServicesImage from '../../../../assets/ServicesImage.png';

import styles from './SetupServices.module.scss';

SetupServices.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  expand: PropTypes.func.isRequired,
  onStepCheck: PropTypes.func.isRequired,
};

export default function SetupServices({ expanded, expand, onStepCheck }) {
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
          <CheckBox
            checked={isChecked === 'true'}
            onChange={() => onStepCheck('setupProductsCheck')}
          />
          <p className={styles.title}>Create Your First Service</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.details}>
          <div className={styles.detailsContent}>
            <p className={styles.subTitle}>
              Write a description, set a duration, add availability, and set
              pricing for the seervices you plan to offer.
            </p>
            <p className={styles.subTitle}>
              We have already created your 15 minute free consultation service.
            </p>
            <StyledButton
              className={styles.button}
              text="Create A Service"
              onClick={() => {}}
            />
          </div>
          <img className={styles.image} src={ServicesImage} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
