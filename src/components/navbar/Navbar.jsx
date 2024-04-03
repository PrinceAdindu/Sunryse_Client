import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logout, { getClinicName } from './navbarHelpers';

import styles from './Navbar.module.scss';
import useToast from '../../hooks/useToast';

export default function Navbar() {
  const [clinicName, setClinicName] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxiosPrivate();
  const toast = useToast();

  const noNavRoutes = ['/login', '/register'];
  const showNav = !noNavRoutes.includes(location.pathname);

  useEffect(() => {
    const fetchData = async () => {
      if (showNav) {
        const name = await getClinicName(axios, toast);
        setClinicName(name);
      }
    };

    fetchData();
  }, [showNav]);

  function Notifications() {
    return (
      <div className={styles.iconContainer}>
        <NotificationsIcon className={styles.icon} />
      </div>
    );
  }
  function Account() {
    return (
      <div className={styles.iconContainer}>
        <AccountCircleIcon
          className={styles.icon}
          onClick={() => logout(axios, navigate, toast)}
        />{' '}
      </div>
    );
  }
  return (
    showNav && (
      <div className={styles.navBarContainer}>
        <p className={styles.clinicName}>{clinicName}</p>
        <div className={styles.navOptionsContainer}>
          <Notifications />
          <Account />
        </div>
      </div>
    )
  );
}
