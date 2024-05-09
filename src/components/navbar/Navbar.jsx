import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import LockIcon from '@mui/icons-material/Lock';
import logout, { getClinicName } from './navbarHelpers';

import styles from './Navbar.module.scss';
import useToast from '../../hooks/useToast';

export default function Navbar() {
  const [clinicName, setClinicName] = useState('');

  const navigate = useNavigate();
  const axios = useAxiosPrivate();
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      const name = await getClinicName(axios, toast);
      setClinicName(name);
    };
    fetchData();
  }, []);

  function Notifications() {
    return (
      <div className={styles.iconContainer}>
        <NotificationsIcon className={styles.icon} />
      </div>
    );
  }
  function Logout() {
    return (
      <div className={styles.iconContainer}>
        <LockIcon
          className={styles.icon}
          onClick={() => logout(axios, navigate, toast)}
        />{' '}
      </div>
    );
  }
  return (
    <div className={styles.navBarContainer}>
      <p className={styles.clinicName}>{clinicName}</p>
      <div className={styles.navOptionsContainer}>
        <Notifications />
        <Logout />
      </div>
    </div>
  );
}
