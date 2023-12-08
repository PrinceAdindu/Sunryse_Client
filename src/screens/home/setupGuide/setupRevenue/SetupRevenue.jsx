import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import useToast from '../../../../hooks/useToast';
import createAccountLinkUrl from './setupRevenueHelper';
import StyledButton from '../../../../components/styledButton/StyledButton';
import RevenueVector from '../../../../assets/RevenueVector.png';

import styles from './SetupRevenue.module.scss';

SetupRevenue.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  expand: PropTypes.func.isRequired,
  onStepCheck: PropTypes.func.isRequired,
};

export default function SetupRevenue({ expanded, expand, onStepCheck }) {
  const isChecked = localStorage.getItem('setupGuideRevenueCheck');

  const axios = useAxiosPrivate();
  const toast = useToast();

  async function stripeAccountLinkRedirect() {
    const url = await createAccountLinkUrl(axios, toast);
    window.open(url, '_blank');
  }
  return (
    <Accordion
      className={
        expanded.includes('step5')
          ? styles.selectedAccord
          : styles.unselectedAccordian
      }
      expanded={expanded.includes('step5')}
      disableGutters
      onChange={() => expand('step5')}
      id="step5"
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className={styles.summary}>
          <Checkbox
            checked={isChecked === 'true'}
            onChange={() => onStepCheck('setupGuideRevenueCheck')}
          />
          <p className={styles.title}>Set up Terra Payemnts </p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.details}>
          <div className={styles.detailsContent}>
            <p className={styles.subTitle}>
              Terra Payments is almost ready to go. You just need to provide a
              few details to start getting paid by your clients.
            </p>
            <StyledButton
              className={styles.button}
              text="Go to Terra Payments"
              onClick={() => stripeAccountLinkRedirect()}
            />
          </div>
          <img className={styles.image} src={RevenueVector} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
