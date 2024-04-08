import HomeIcon from '@mui/icons-material/Home';
import ChairIcon from '@mui/icons-material/Chair';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import SellIcon from '@mui/icons-material/Sell';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const SIDE_NAV_OPTIONS = {
  HOME: { url: '/home', label: 'Home' },
  BOOKINGS: { url: '/bookings', label: 'Bookings' },
  BUSINESS_HOURS: { url: '/hours', label: 'Business Hours' },
  SERVICES: { url: '/services', label: 'Services' },
  FINANCES: { url: '/finances', label: 'Finances' },
  MARKETING: { url: '/marketing', label: 'Marketing' },
  SUPPORT: { url: '/support', label: 'Support' },
  SETTINGS: { url: '/settings', label: 'Settings' },
};

export function getCurrentTab(currUrl) {
  if (currUrl.includes(SIDE_NAV_OPTIONS.HOME.url)) {
    return SIDE_NAV_OPTIONS.HOME;
  } else if (currUrl.includes(SIDE_NAV_OPTIONS.BOOKINGS.url)) {
    return SIDE_NAV_OPTIONS.BOOKINGS;
  } else if (currUrl.includes(SIDE_NAV_OPTIONS.BUSINESS_HOURS.url)) {
    return SIDE_NAV_OPTIONS.BUSINESS_HOURS;
  } else if (currUrl.includes(SIDE_NAV_OPTIONS.SERVICES.url)) {
    return SIDE_NAV_OPTIONS.SERVICES;
  } else if (currUrl.includes(SIDE_NAV_OPTIONS.FINANCES.url)) {
    return SIDE_NAV_OPTIONS.FINANCES;
  } else if (currUrl.includes(SIDE_NAV_OPTIONS.MARKETING.url)) {
    return SIDE_NAV_OPTIONS.MARKETING;
  } else if (currUrl.includes(SIDE_NAV_OPTIONS.SUPPORT.url)) {
    return SIDE_NAV_OPTIONS.SUPPORT;
  } else if (currUrl.includes(SIDE_NAV_OPTIONS.SETTINGS.url)) {
    return SIDE_NAV_OPTIONS.SETTINGS;
  }

  return SIDE_NAV_OPTIONS.HOME;
}

export const SIDE_NAV_DATA = [
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
