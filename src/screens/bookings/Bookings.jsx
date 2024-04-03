import { useState } from 'react';
import PropTypes from 'prop-types';
import Placeholder from '../../components/placeholder/Placeholder';
import MeetingImage from '../../assets/MeetingImage.jpeg';

import styles from './Bookings.module.scss';

// Bookings.propTypes = {
//   setLoading: PropTypes.func.isRequired,
// };

export default function Bookings() {
  const [bookingData, setBookingData] = useState([]);

  return (
    <div className={styles.screen}>
      {bookingData.length > 0 ? (
        <div id="Bookings" className={styles.screen}>
          Bookings
        </div>
      ) : (
        <Placeholder
          image={MeetingImage}
          title="Welcome to your bookings"
          text="You have no bookings at the moment but when you do, they will appear here."
        />
      )}
    </div>
  );
}
