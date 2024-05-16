import { useState } from 'react';
import PropTypes from 'prop-types';

import CustomCalendar from '../../components/customCalendar/CustomCalendar';
import LoadingHOC from '../../components/loading/LoadingHOC';

import styles from './Calendar.module.scss';

Calendar.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

function Calendar({ setLoading }) {
  const [calendarData, setCalendarData] = useState([]);

  return (
    <div id="Calendar" className={styles.screen}>
      <div className={styles.container}>
        <CustomCalendar />
      </div>
    </div>
  );
}

export default LoadingHOC(Calendar, 'Calendar', false);
