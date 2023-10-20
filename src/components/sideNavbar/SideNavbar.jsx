import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ChairIcon from '@mui/icons-material/Chair';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentIcon from '@mui/icons-material/Payment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import styles from './SideNavbar.module.scss';
import { useState } from 'react';

export default function SideNavbar() {
  const [option, setOption] = useState(localStorage.getItem('sideNavOption'));
  const location = useLocation();

  const noNavRoutes = ['/login', '/register'];
  const showNav = !noNavRoutes.includes(location.pathname);

  const SIDE_NAV_OPTIONS = {
    HOME: 'Home',
    SESSIONS: 'Sessions',
    BUSINESS_HOURS: 'Business Hours',
    REVENUE: 'Revenue',
    SUPPORT: 'Support',
  };

  function select(selectedOption) {
    localStorage.setItem('sideNavOption', selectedOption);
    setOption(selectedOption);
    console.log(selectedOption);
  }

  function Home() {
    return (
      <div
        className={`${styles.iconContainer} ${styles.homeIconContainer} ${
          option === SIDE_NAV_OPTIONS.HOME && styles.selected
        }`}
        onClick={() => select(SIDE_NAV_OPTIONS.HOME)}
      >
        <HomeIcon fontSize="small" className={styles.icon} />{' '}
        <p className={styles.iconText}>{SIDE_NAV_OPTIONS.HOME}</p>
      </div>
    );
  }
  function Sessions() {
    return (
      <div
        className={`${styles.iconContainer} ${
          option === SIDE_NAV_OPTIONS.SESSIONS && styles.selected
        }`}
        onClick={() => select(SIDE_NAV_OPTIONS.SESSIONS)}
      >
        <ChairIcon fontSize="small" className={styles.icon} />{' '}
        <p className={styles.iconText}>{SIDE_NAV_OPTIONS.SESSIONS}</p>
      </div>
    );
  }
  function BusinessHours() {
    return (
      <div
        className={`${styles.iconContainer} ${
          option === SIDE_NAV_OPTIONS.BUSINESS_HOURS && styles.selected
        }`}
        onClick={() => select(SIDE_NAV_OPTIONS.BUSINESS_HOURS)}
      >
        <CalendarMonthIcon fontSize="small" className={styles.icon} />{' '}
        <p className={styles.iconText}>{SIDE_NAV_OPTIONS.BUSINESS_HOURS}</p>
      </div>
    );
  }
  function Revenue() {
    return (
      <div
        className={`${styles.iconContainer} ${
          option === SIDE_NAV_OPTIONS.REVENUE && styles.selected
        }`}
        onClick={() => select(SIDE_NAV_OPTIONS.REVENUE)}
      >
        <PaymentIcon fontSize="small" className={styles.icon} />{' '}
        <p className={styles.iconText}>{SIDE_NAV_OPTIONS.REVENUE}</p>
      </div>
    );
  }
  function Support() {
    return (
      <div
        className={`${styles.iconContainer} ${
          option === SIDE_NAV_OPTIONS.SUPPORT && styles.selected
        }`}
        onClick={() => select(SIDE_NAV_OPTIONS.SUPPORT)}
      >
        <FavoriteBorderIcon fontSize="small" className={styles.icon} />{' '}
        <p className={styles.iconText}>{SIDE_NAV_OPTIONS.SUPPORT}</p>
      </div>
    );
  }
  return (
    showNav && (
      <div className={styles.container}>
        <Home />
        <Sessions />
        <BusinessHours />
        <Revenue />
        <Support />
      </div>
    )
  );
}
