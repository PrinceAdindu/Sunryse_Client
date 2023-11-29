import { useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledButton from '../../../../components/styledButton/StyledButton';
import WeeklyHours from './weeklyHours/WeeklyHours';

import styles from './SetupBusinessHours.module.scss';
import useToast from '../../../../hooks/useToast';
import Dropdown from '../../../../components/dropdown/Dropdown';
import saveBusinessHours, { timeZones } from './businessHoursHelper';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';

SetupBusinessHours.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  expand: PropTypes.func.isRequired,
  incProgress: PropTypes.func.isRequired,
};

export default function SetupBusinessHours({ expanded, expand, incProgress }) {
  const [schedule, setSchedule] = useState([
    {
      day: 'sunday',
      on: false,
      times: [{ start: '09:00', end: '17:00', error: false }],
    },
    {
      day: 'monday',
      on: true,
      times: [{ start: '09:00', end: '17:00', error: false }],
    },
    {
      day: 'tuesday',
      on: true,
      times: [{ start: '09:00', end: '17:00', error: false }],
    },
    {
      day: 'wednesday',
      on: true,
      times: [{ start: '09:00', end: '17:00', error: false }],
    },
    {
      day: 'thursday',
      on: true,
      times: [{ start: '09:00', end: '17:00', error: false }],
    },
    {
      day: 'friday',
      on: true,
      times: [{ start: '09:00', end: '17:00', error: false }],
    },
    {
      day: 'saturday',
      on: false,
      times: [{ start: '09:00', end: '17:00', error: false }],
    },
  ]);

  const [timeZone, setTimeZone] = useState('Pacific Time - US & Canada');

  const axios = useAxiosPrivate();
  const toast = useToast();

  async function save() {
    try {
      await saveBusinessHours(axios, toast, timeZone, schedule);
    } catch (error) {
      toast.error();
    }
  }

  const timeZoneOptions = timeZones.map((timeZone) => ({
    value: timeZone,
    label: timeZone,
  }));

  const checkForErrors = () => {
    let errorFound = false;
    schedule.forEach((day) => {
      day.times.forEach((timeBlock) => {
        if (timeBlock.error === true) {
          errorFound = true;
          return;
        }
      });
    });
    return errorFound;
  };

  const TimeZonePicker = () => (
    <Dropdown
      id="time_zone_picker"
      classNames={styles.dropdown}
      options={timeZoneOptions}
      value={timeZone}
      onChange={setTimeZone}
      indicator={true}
    />
  );

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
        <p className={styles.title}>Business Hours</p>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.details}>
          <TimeZonePicker />
          <WeeklyHours schedule={schedule} setSchedule={setSchedule} />
          <StyledButton
            className={styles.button}
            text="Save"
            onClick={() => save()}
            disabled={checkForErrors() ? true : false}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
