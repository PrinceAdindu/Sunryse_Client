import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SetupProgress from './setupProgress/SetupProgress';
import SetupMarketing from './setupMarketing/SetupMarketing';

import styles from './SetupGuide.module.scss';
import './SetupGuide.module.scss';

export default function SetupGuide() {
  const [expanded, setExpanded] = useState([]);

  const StepThreeView = () => (
    <>
      <p className={styles.sectionText}>
        We need to connect your banking account to your new practice.
      </p>
    </>
  );

  const StepFourView = () => (
    <>
      <p className={styles.sectionText}>
        Assign what times throughout the week your pracitce is open and closed.
      </p>
    </>
  );

  const StepFiveView = () => (
    <>
      <p className={styles.sectionText}>
        You have completed everything, let's LAUNCH!
      </p>
    </>
  );

  const expand = (step) => {
    setExpanded((prevExpanded) => {
      if (prevExpanded.includes(step)) {
        return prevExpanded.filter((item) => item !== step);
      } else {
        return [...prevExpanded, step];
      }
    });
  };

  return (
    <div className={styles.container}>
      <SetupProgress expanded={expanded} expand={expand} />
      <SetupMarketing expanded={expanded} expand={expand} />
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
          <p className={styles.sectionTitle}>Revenue Collection</p>
        </AccordionSummary>
        <AccordionDetails>
          <StepThreeView />
        </AccordionDetails>
      </Accordion>
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
          <p className={styles.sectionTitle}>Businees Hours</p>
        </AccordionSummary>
        <AccordionDetails>
          <StepFourView />
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={`${styles.bottomAccordian} ${
          expanded.includes('step5')
            ? styles.selectedAccord
            : styles.unselectedAccordian
        }`}
        expanded={expanded.includes('step5')}
        disableGutters
        onChange={() => expand('step5')}
        id="step5"
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <p className={styles.sectionTitle}>Launch</p>
        </AccordionSummary>
        <AccordionDetails>
          <StepFiveView />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
