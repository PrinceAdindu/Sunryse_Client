import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import BackArrow from '@mui/icons-material/ArrowBackIosNew';
import ForwardArrow from '@mui/icons-material/ArrowForwardIos';
import { getWeekRangeText, getCurrYearText } from './calendarHeaderHelper';

import styles from './CalendarHeader.module.scss';
import MultiButton from '../../multiButton/MultiButton';

CalendarHeader.propTypes = {
  currWeekDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
};

export default function CalendarHeader({ currWeekDates }) {
  const [selectedView, setSelectedView] = useState('week');
  const buttons = [
    {
      text: 'Month',
      onClick: (button) => {
        setSelectedView('month');
      },
      baseClassname: styles.viewButton,
      selectedClassname: styles.selectedViewButton,
    },
    {
      text: 'Week',
      onClick: (button) => {
        setSelectedView('week');
      },
      baseClassname: styles.viewButton,
      selectedClassname: styles.selectedViewButton,
    },
  ];

  const weekRangeText = getWeekRangeText(currWeekDates);
  const currYearText = getCurrYearText();
  //   const [weekRange, setWeekRange] = useState('');
  //   const [currYear, setCurrYear] = useState('');

  //   useEffect(() => {
  //     const weekRangeText = getWeekRangeText(currWeekDates);
  //     const currYearText = getCurrYearText();
  //     weekRange(weekRangeText);
  //     setCurrYear(currYearText);
  //   }, []);
  useEffect(() => {
    const todo = () => {
      console.log('CHANGE VIEW');
    };
    todo();
  }, [selectedView]);

  const WeekRange = () => (
    <div className={styles.weekRangeContainer}>
      <div className={styles.iconContainer}>
        <BackArrow className={styles.icon} fontSize="small" />
      </div>
      <p className={styles.weekRangeText}>
        {weekRangeText} {currYearText}
      </p>
      <div className={styles.iconContainer}>
        <ForwardArrow className={styles.icon} fontSize="small" />
      </div>
    </div>
  );

  return (
    <div className={styles.headerContainer}>
      <WeekRange />
      <MultiButton buttons={buttons} initial={buttons[0]} />
    </div>
  );
}
