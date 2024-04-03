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
