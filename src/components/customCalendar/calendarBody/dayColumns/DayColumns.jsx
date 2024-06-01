import PropTypes from 'prop-types';

import { calendarHoursArray } from '../../customCalendarHelper';

import CalendarEvent from '../calendarEvent/CalendarEvent';

import styles from './DayColumns.module.scss';

DayColumns.propTypes = {
  currWeekData: PropTypes.arrayOf(PropTypes.object),
};

export default function DayColumns({ currWeekData }) {
  const EmptySlots = ({ dayIndex }) =>
    calendarHoursArray.map((hourString) => (
      <div
        key={hourString}
        className={`${styles.hourBlock} ${
          dayIndex === 0 ? styles.firstColumnHourBlock : ''
        }`}
      />
    ));

  const DailyEvents = ({ dayData }) =>
    dayData.events.map((event) => (
      <CalendarEvent key={event.startTime} eventData={event} />
    ));

  const Column = ({ dayData, dayIndex }) => (
    <div className={styles.columnContainer}>
      <EmptySlots dayIndex={dayIndex} />
      <DailyEvents dayData={dayData} />
    </div>
  );

  return (
    <div className={styles.dayColumnsContainer}>
      {currWeekData.map((dayData, index) => (
        <Column key={dayData.date} dayData={dayData} dayIndex={index} />
      ))}
    </div>
  );
}
