import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import useToast from '../../../../hooks/useToast';
import createAccountLinkUrl from './SetupRevenue';
import StyledButton from '../../../../components/styledButton/StyledButton';
import RevenueVector from '../../../../assets/RevenueVector.png';

import styles from './SetupRevenue.module.scss';

SetupRevenue.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  expand: PropTypes.func.isRequired,
  incProgress: PropTypes.func.isRequired,
};

export default function SetupRevenue({ expanded, expand, incProgress }) {
  const axios = useAxiosPrivate();
  const toast = useToast();

  async function stripeAccountLinkRedirect() {
    const url = await createAccountLinkUrl(axios, toast);
    window.open(url);
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
        <div className={styles.details}>
          <div className={styles.bulletListContainer}>
            <p className={styles.subTitle}>
              Setup your business banking details
            </p>
            <p className={styles.text}>This will enable you to:</p>
            <ul className={styles.bulletList}>
              <li>Collect client payments from your website</li>
              <li>Create invoices for your insurance filings</li>
              <li>View and analyze your revenue history</li>
            </ul>
          </div>
          <img className={styles.image} src={RevenueVector} />
        </div>
        <StyledButton
          className={styles.button}
          text="Begin Setup"
          onClick={() => stripeAccountLinkRedirect()}
        />
      </AccordionDetails>
    </Accordion>
  );
}
