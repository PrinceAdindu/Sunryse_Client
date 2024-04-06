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

  const SideNavs = () => {
    const sideBarDatas = [
      {
        link: SIDE_NAV_OPTIONS.HOME,
        Icon: HomeIcon,
      },
      {
        link: SIDE_NAV_OPTIONS.BOOKINGS,
        Icon: ChairIcon,
      },
      {
        link: SIDE_NAV_OPTIONS.BUSINESS_HOURS,
        Icon: CalendarMonthIcon,
      },
      {
        link: SIDE_NAV_OPTIONS.SERVICES,
        Icon: SellIcon,
      },
      {
        link: SIDE_NAV_OPTIONS.FINANCES,
        Icon: AccountBalanceIcon,
      },
      {
        link: SIDE_NAV_OPTIONS.MARKETING,
        Icon: CampaignIcon,
        IconProps: {
          fontSize: 'medium',
        },
      },
      {
        link: SIDE_NAV_OPTIONS.SUPPORT,
        Icon: FavoriteBorderIcon,
      },
      {
        link: SIDE_NAV_OPTIONS.SETTINGS,
        Icon: SettingsIcon,
      },
    ];

    return sideBarDatas.map((sideBar) => {
      const {
        Icon,
        link: { url, label },
      } = sideBar;
      const selected = tab.url === url;
      return (
        <div
          className={`${styles.iconContainer} ${selected && styles.selected}`}
          onClick={() => navigate(url)}
        >
          <Icon
            fontSize='small'
            {...(sideBar.IconProps && sideBar.IconProps)}
            className={selected ? styles.iconSelected : styles.icon}
          />
          <p className={selected ? styles.iconTextSelected : styles.iconText}>
            {label}
          </p>
        </div>
      );
    });
  };

  return (
    showNav && (
      <div className={styles.sideNavcontainer}>
        <img src={SunryseLogo} className={styles.logoImage} />
        <SideNavs />
      </div>
    )
  );
}
