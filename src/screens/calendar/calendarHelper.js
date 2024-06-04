export function getDummyEvents() {
  return [
    {
      id: 1,
      startTime: new Date('May 28, 2024, 07:00'),
      endTime: new Date('May 28, 2024, 08:00'),
      title: 'Harry Potter',
      subtitle: 'Virtual',
      classNames: getEventStyles(true),
    },
    {
      id: 2,
      startTime: new Date('May 29, 2024, 18:00'),
      endTime: new Date('May 29, 2024, 19:00'),
      title: 'Lily Potter',
      subtitle: 'Virtual',
      classNames: getEventStyles(true),
    },
    {
      id: 3,
      startTime: new Date('May 29, 2024, 10:00'),
      endTime: new Date('May 29, 2024, 12:00'),
      title: 'James Potter',
      subtitle: 'Virtual',
      classNames: getEventStyles(true),
    },
    {
      id: 4,
      startTime: new Date('May 29, 2024, 12:00'),
      endTime: new Date('May 29, 2024, 13:00'),
      title: 'Ginny Potter',
      subtitle: 'Virtual',
      classNames: getEventStyles(false),
    },
    {
      id: 5,
      startTime: new Date('May 26, 2024, 09:00'),
      endTime: new Date('May 26, 2024, 12:00'),
      title: 'Albus Potter',
      subtitle: 'Virtual',
      classNames: getEventStyles(true),
    },
    {
      id: 6,
      startTime: new Date('May 27, 2024, 10:00'),
      endTime: new Date('May 27, 2024, 11:00'),
      title: 'Lily Potter',
      subtitle: 'Virtual',
      classNames: getEventStyles(true),
    },
    {
      id: 7,
      startTime: new Date('May 25, 2024, 11:00'),
      endTime: new Date('May 25, 2024, 11:30'),
      title: 'Sevrus Potter',
      subtitle: 'Virtual',
      classNames: getEventStyles(true),
    },
    {
      id: 8,
      startTime: new Date('May 31, 2024, 12:00'),
      endTime: new Date('May 31, 2024, 12:45'),
      title: 'Harry Potter',
      subtitle: 'Virtual',
      classNames: getEventStyles(false),
    },
    {
      id: 9,
      startTime: new Date('Jun 1, 2024, 18:00'),
      endTime: new Date('Jun 1, 2024, 18:45'),
      title: 'Lily Potter',
      subtitle: 'Virtual',
      classNames: getEventStyles(false),
    },
    {
      id: 10,
      startTime: new Date('Jun 1, 2024, 10:00'),
      endTime: new Date('Jun 1, 2024, 12:45'),
      title: 'Draco Malfoy',
      subtitle: 'Virtual',
      classNames: getEventStyles(false),
    },
  ];
}

function getEventStyles(status) {
  let styles = {};
  styles = status
    ? {
        backgroundColor: '#e5f8eb',
        borderColor: '#06ba34',
        color: '#06ba34',
      }
    : {
        backgroundColor: '#ffebeb',
        borderColor: '#c5514f',
        color: '#c5514f',
      };
  return styles;
}
