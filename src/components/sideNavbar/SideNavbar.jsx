import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SunryseLogo from '../../assets/NewSunryseLogoTallNameFill.png';
import { getCurrentTab, SIDE_NAV_DATA } from './sideNavbarHelper';
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

  const SideNavOptions = () =>
    SIDE_NAV_DATA.map((sideBar) => {
      const {
        Icon,
        link: { url, label },
      } = sideBar;
      const selected = tab.url === url;
      return (
        <div
          key={label}
          className={`${styles.iconContainer} ${selected && styles.selected}`}
          onClick={() => navigate(url)}
        >
          <Icon
            fontSize="small"
            {...(sideBar.IconProps && sideBar.IconProps)}
            className={selected ? styles.iconSelected : styles.icon}
          />
          <p className={selected ? styles.iconTextSelected : styles.iconText}>
            {label}
          </p>
        </div>
      );
    });

  return (
    showNav && (
      <div className={styles.sideNavcontainer}>
        <img src={SunryseLogo} className={styles.logoImage} />
        <SideNavOptions />
      </div>
    )
  );
}
