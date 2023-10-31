import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavTerraLogo from '../../assets/TerraLogoLong.png';
import { useLocation } from 'react-router-dom';

import styles from './Navbar.module.scss';

export default function Navbar() {
  const location = useLocation();
  const noNavRoutes = ['/login', '/register'];
  const showNav = !noNavRoutes.includes(location.pathname);

  function Account() {
    return (
      <div className={styles.iconContainer}>
        <AccountCircleIcon className={styles.icon} />{' '}
      </div>
    );
  }
  function Notifications() {
    return (
      <div className={styles.iconContainer}>
        <NotificationsIcon className={styles.icon} />
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
