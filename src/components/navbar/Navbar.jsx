import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavTerraLogo from '../../assets/TerraLogoLong.png';
import logout from './navbarHelpers';

import styles from './Navbar.module.scss';
import useToast from '../../hooks/useToast';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxiosPrivate();
  const toast = useToast();

  const noNavRoutes = ['/login', '/register'];
  const showNav = !noNavRoutes.includes(location.pathname);

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
        <img src={NavTerraLogo} className={styles.logo} />
        <div className={styles.navOptionsContainer}>
          <Notifications />
          <Account />
        </div>
      </div>
    )
  );
}
