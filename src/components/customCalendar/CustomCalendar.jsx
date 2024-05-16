import { useEffect, useState } from 'react';
import { getCurrWeekDates, getDatesInYear } from './customCalendarHelper';

import CalendarHeader from './calendarHeader/CalendarHeader';

import styles from './CustomCalendar.module.scss';

export default function CustomCalendar() {
  const currWeekDates = getCurrWeekDates();

  return (
    <div className={styles.calendarContainer}>
      <CalendarHeader currWeekDates={currWeekDates} />
      <p></p>
    </div>
  );
}
