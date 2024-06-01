import { useEffect, useState } from 'react';
import {
  getCurrWeekDates,
  getDatesInYear,
  getDummyEvents,
  getNextWeekDates,
  getPrevWeekDates,
  getWeekData,
} from './customCalendarHelper';

import CalendarHeader from './calendarHeader/CalendarHeader';

import styles from './CustomCalendar.module.scss';
import CalendarDateRow from './calendarDateRow/CalendarDateRow';
import CalendarBody from './calendarBody/calendarBody';

export default function CustomCalendar() {
  const [currWeekDates, setCurrWeekDates] = useState(getCurrWeekDates());
  const [currWeekData, setCurrWeekData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeekData(currWeekDates);
      setCurrWeekData(data);
    };
    fetchData();
  }, [currWeekDates]);

  const nextWeekClick = () => {
    const dates = getNextWeekDates(currWeekDates);
    setCurrWeekDates(dates);
  };

  const prevWeekClick = () => {
    const dates = getPrevWeekDates(currWeekDates);
    setCurrWeekDates(dates);
  };

  return (
    <div className={styles.calendarContainer}>
      <CalendarHeader
        currWeekDates={currWeekDates}
        onForwardClick={nextWeekClick}
        onBackClick={prevWeekClick}
      />
      {currWeekData.length > 0 && (
        <div className={styles.dateBodyContainer}>
          <CalendarDateRow currWeekDates={currWeekDates} />
          <CalendarBody currWeekData={currWeekData} />
        </div>
      )}
    </div>
  );
}
