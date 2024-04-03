import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ChairIcon from '@mui/icons-material/Chair';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import SellIcon from '@mui/icons-material/Sell';
import CampaignIcon from '@mui/icons-material/Campaign';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NavTerraLogo from '../../assets/TerraLogoLong.png';
import SunryseLogo from '../../assets/NewSunryseLogoTallNameFill.png';
import { SIDE_NAV_OPTIONS, getCurrentTab } from './sideNavbarHelper';

import styles from './SideNavbar.module.scss';
import config from '../../config';

export default function SideNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [tab, setTab] = useState(getCurrentTab(location.pathname));

  useEffect(() => {
    const currentTab = getCurrentTab(location.pathname);
    setTab(currentTab);
  }, [location.pathname]);

  const showNav = !config.externalRoutes.includes(location.pathname);

  function select(selectedTab) {
    navigate(selectedTab.url);
  }

  function Home() {
    const selected = tab === SIDE_NAV_OPTIONS.HOME;
    return (
      <div
        className={`${styles.iconContainer} ${selected && styles.selected}`}
        onClick={() => select(SIDE_NAV_OPTIONS.HOME)}
      >
        <HomeIcon
          fontSize="small"
          className={selected ? styles.iconSelected : styles.icon}
        />{' '}
        <p className={selected ? styles.iconTextSelected : styles.iconText}>
          {SIDE_NAV_OPTIONS.HOME.label}
        </p>
      </div>
    );
  }
  function Bookings() {
    const selected = tab === SIDE_NAV_OPTIONS.BOOKINGS;
    return (
      <div
        className={`${styles.iconContainer} ${selected && styles.selected}`}
        onClick={() => select(SIDE_NAV_OPTIONS.BOOKINGS)}
      >
        <ChairIcon
          fontSize="small"
          className={selected ? styles.iconSelected : styles.icon}
        />{' '}
        <p className={selected ? styles.iconTextSelected : styles.iconText}>
          {SIDE_NAV_OPTIONS.BOOKINGS.label}
        </p>
      </div>
    );
  }
  function BusinessHours() {
    const selected = tab === SIDE_NAV_OPTIONS.BUSINESS_HOURS;
    return (
      <div
        className={`${styles.iconContainer} ${selected && styles.selected}`}
        onClick={() => select(SIDE_NAV_OPTIONS.BUSINESS_HOURS)}
      >
        <CalendarMonthIcon
          fontSize="small"
          className={selected ? styles.iconSelected : styles.icon}
        />{' '}
        <p className={selected ? styles.iconTextSelected : styles.iconText}>
          {SIDE_NAV_OPTIONS.BUSINESS_HOURS.label}
        </p>
      </div>
    );
  }
  function Services() {
    const selected = tab === SIDE_NAV_OPTIONS.SERVICES;
    return (
      <div
        className={`${styles.iconContainer} ${selected && styles.selected}`}
        onClick={() => select(SIDE_NAV_OPTIONS.SERVICES)}
      >
        <SellIcon
          fontSize="small"
          className={selected ? styles.iconSelected : styles.icon}
        />{' '}
        <p className={selected ? styles.iconTextSelected : styles.iconText}>
          {SIDE_NAV_OPTIONS.SERVICES.label}
        </p>
      </div>
    );
  }
  function Finances() {
    const selected = tab === SIDE_NAV_OPTIONS.FINANCES;
    return (
      <div
        className={`${styles.iconContainer} ${selected && styles.selected}`}
        onClick={() => select(SIDE_NAV_OPTIONS.FINANCES)}
      >
        <AccountBalanceIcon
          fontSize="small"
          className={selected ? styles.iconSelected : styles.icon}
        />{' '}
        <p className={selected ? styles.iconTextSelected : styles.iconText}>
          {SIDE_NAV_OPTIONS.FINANCES.label}
        </p>
      </div>
    );
  }
  function Marketing() {
    const selected = tab === SIDE_NAV_OPTIONS.MARKETING;
    return (
      <div
        className={`${styles.iconContainer} ${selected && styles.selected}`}
        onClick={() => select(SIDE_NAV_OPTIONS.MARKETING)}
      >
        <CampaignIcon
          fontSize="medium"
          className={selected ? styles.iconSelected : styles.icon}
        />{' '}
        <p className={selected ? styles.iconTextSelected : styles.iconText}>
          {SIDE_NAV_OPTIONS.MARKETING.label}
        </p>
      </div>
    );
  }
  function Support() {
    const selected = tab === SIDE_NAV_OPTIONS.SUPPORT;
    return (
      <div
        className={`${styles.iconContainer} ${selected && styles.selected}`}
        onClick={() => select(SIDE_NAV_OPTIONS.SUPPORT)}
      >
        <FavoriteBorderIcon
          fontSize="small"
          className={selected ? styles.iconSelected : styles.icon}
        />{' '}
        <p className={selected ? styles.iconTextSelected : styles.iconText}>
          {SIDE_NAV_OPTIONS.SUPPORT.label}
        </p>
      </div>
    );
  }
  function Settings() {
    const selected = tab === SIDE_NAV_OPTIONS.SETTINGS;
    return (
      <div
        className={`${styles.iconContainer} ${selected && styles.selected}`}
        onClick={() => select(SIDE_NAV_OPTIONS.SETTINGS)}
      >
        <SettingsIcon
          fontSize="small"
          className={selected ? styles.iconSelected : styles.icon}
        />{' '}
        <p className={selected ? styles.iconTextSelected : styles.iconText}>
          {SIDE_NAV_OPTIONS.SETTINGS.label}
        </p>
      </div>
    );
  }
  return (
    showNav && (
      <div className={styles.sideNavcontainer}>
        <img src={SunryseLogo} className={styles.logoImage} />
        <Home />
        <Bookings />
        <BusinessHours />
        <Services />
        <Finances />
        <Marketing />
        <Support />
        <Settings />
      </div>
    )
  );
}
