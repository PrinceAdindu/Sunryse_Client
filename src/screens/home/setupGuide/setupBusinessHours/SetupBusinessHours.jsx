import { useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import StyledButton from '../../../../components/styledButton/StyledButton';

import WeeklyHours from './weeklyHours/WeeklyHours';
import Dropdown from '../../../../components/dropdown/Dropdown';
import saveBusinessHours, { timeZones } from './businessHoursHelper';
import useToast from '../../../../hooks/useToast';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';

import CalendarVector from '../../../../assets/CalendarVector.png';
import styles from './SetupBusinessHours.module.scss';

SetupBusinessHours.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  expand: PropTypes.func.isRequired,
  onStepCheck: PropTypes.func.isRequired,
};

export default function SetupBusinessHours({ expanded, expand, onStepCheck }) {
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

  const isChecked = localStorage.getItem('setupGuideBusinessHoursCheck');

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
          <Checkbox
            checked={isChecked === 'true'}
            onChange={() => onStepCheck('setupGuideBusinessHoursCheck')}
          />
          <p className={styles.title}>Set your business hours</p>
        </div>{' '}
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.details}>
          <div className={styles.detailsContent}>
            <p className={styles.subTitle}>
              Your practice needs hours of operation from which your clients can
              select time slots for their sessions.
            </p>
            <StyledButton
              className={styles.button}
              text="Set business hours"
              onClick={() => {}}
            />
          </div>
          <img className={styles.image} src={CalendarVector} />
        </div>
        {/* <div className={styles.details}>
          <TimeZonePicker />
          <WeeklyHours schedule={schedule} setSchedule={setSchedule} />
        </div> */}
        {/* <StyledButton
          className={styles.button}
          text="Save"
          onClick={() => save()}
          disabled={checkForErrors() ? true : false}
        /> */}
      </AccordionDetails>
    </Accordion>
  );
}
