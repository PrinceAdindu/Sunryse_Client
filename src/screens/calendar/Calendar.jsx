import { useState } from 'react';
import PropTypes from 'prop-types';

import CustomCalendar from '../../components/customCalendar/CustomCalendar';
import LoadingHOC from '../../components/loading/LoadingHOC';

import styles from './Calendar.module.scss';
import { getDummyEvents } from './CalendarHelper';

Calendar.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

function Calendar({ setLoading }) {
  const [calendarData, setCalendarData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('appointments');
  const events = getDummyEvents();

  const selectCalendar = (choice) => {
    if (choice === 'availability') {
      setSelectedTab('availability');
    } else if (choice === 'appointments') {
      setSelectedTab('appointments');
    }
  };

  const CalendarTabs = () => (
    <div className={styles.calendarCardTabs}>
      <div
        className={`${styles.cardTab} ${
          selectedTab === 'appointments' ? styles.selectedTab : ''
        }`}
        onClick={() => {
          selectCalendar('appointments');
        }}
      >
        <p className={styles.tabText}>Appointments</p>
      </div>
      <div
        className={`${styles.cardTab} ${
          selectedTab === 'availability' ? styles.selectedTab : ''
        }`}
        onClick={() => {
          selectCalendar('availability');
        }}
      >
        <p className={styles.tabText}>Availability</p>
      </div>
    </div>
  );

  return (
    <div id="Calendar" className={styles.calendarScreen}>
      <CalendarTabs />
      {selectedTab === 'appointments' ? (
        <div className={styles.calendarCard}>
          <CustomCalendar events={events} />
        </div>
      ) : (
        <div className={styles.calendarCard}>
          <CustomCalendar events={[]} />
        </div>
      )}
    </div>
  );
}

export default LoadingHOC(Calendar, 'Calendar', false);
