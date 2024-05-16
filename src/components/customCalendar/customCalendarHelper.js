export function getCurrWeekDates() {
  const week = [];
  const today = new Date();

  let sunday = new Date(today);
  sunday.setDate(
    today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 0),
  );
  week.push(new Date(sunday));

  for (let i = 1; i < 7; i++) {
    const day = new Date(sunday);
    day.setDate(sunday.getDate() + i);
    week.push(new Date(day));
  }
  return week;
}

export function getDatesInMonth(month, year) {
  const date = new Date(year, month, 1);
  const dates = [];
  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return dates;
}

export function getDatesInYear(year) {
  let yearDates = [];
  for (let i = 0; i <= 11; i++) {
    const monthDates = getDatesInMonth(i, year);
    yearDates.push(monthDates);
  }
  return yearDates;
}
