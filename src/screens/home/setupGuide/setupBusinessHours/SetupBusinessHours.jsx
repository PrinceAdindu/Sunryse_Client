import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBox from '../../../../components/checkbox/Checkbox';
import StyledButton from '../../../../components/styledButton/StyledButton';

import SoloWorkImage from '../../../../assets/SoloWorkImage.jpeg';

import styles from './SetupBusinessHours.module.scss';

SetupBusinessHours.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  expand: PropTypes.func.isRequired,
  onStepCheck: PropTypes.func.isRequired,
};

export default function SetupBusinessHours({ expanded, expand, onStepCheck }) {
  const isChecked = localStorage.getItem('setupGuideBusinessHoursCheck');

  const navigate = useNavigate();

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
        <div className={styles.summary}>
          <CheckBox
            checked={isChecked === 'true'}
            onChange={() => onStepCheck('setupGuideBusinessHoursCheck')}
          />
          <p className={styles.title}>Set Business Hours</p>
        </div>{' '}
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.details}>
          <div className={styles.detailsContent}>
            <p className={styles.subTitle}>
              Submit the days and hours from which clients can book sessions.
            </p>
            <p className={styles.subTitle}>
              New clients will only see a maximum of 3 open slots a day.
            </p>
            <StyledButton
              className={styles.button}
              text="Set Business Hours"
              onClick={() => {
                navigate('/hours');
              }}
            />
          </div>
          <img className={styles.image} src={SoloWorkImage} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
