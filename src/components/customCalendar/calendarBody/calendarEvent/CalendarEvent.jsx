import PropTypes from 'prop-types';

CalendarEvent.propTypes = {
  eventData: PropTypes.shape({
    service: PropTypes.shape({
      name: PropTypes.string,
      duration: PropTypes.number,
    }).isRequired,
    clientName: PropTypes.string.isRequired,
    startTime: PropTypes.instanceOf(Date).isRequired,
    endTime: PropTypes.instanceOf(Date).isRequired,
    location: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }),
};

export default function CalendarEvent({ eventData }) {
  let todayMorning = new Date();
  todayMorning.setHours(7);
  const durationInHours = eventData.service.duration / 60;
  const backgroundColor = eventData.status === true ? '#e5f8eb' : '#ffebeb';
  const topDiff = eventData.startTime.getHours() - todayMorning.getHours();
  const heightCalculation = durationInHours * 50 - 5;
  const eventContainerStyles = {
    position: 'absolute',
    top: `${topDiff * 50}px`,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: `${heightCalculation}px`,
    marginRight: '5px',
    padding: '5px',
    boxSizing: 'border-box',
    backgroundColor,
    border: 'solid',
    borderWidth: '0px 0px 0px 2px',
    borderColor: eventData.status === true ? '#06ba34' : '#c5514f',
    borderRadius: '3px',
    cursor: 'pointer',
  };
  const eventTextStyles = {
    fontSize: '11px',
    fontWeight: '500',
    color: eventData.status === true ? '#06ba34' : '#c5514f',
  };
  const getTimeString = (dateObj) =>
    dateObj.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

  return (
    <div style={eventContainerStyles}>
      <p style={eventTextStyles}>{eventData.clientName}</p>
      {heightCalculation > 20 && (
        <p style={{ ...eventTextStyles }}>
          {getTimeString(eventData.startTime)} -{' '}
          {getTimeString(eventData.endTime)}
        </p>
      )}
      {heightCalculation > 40 && (
        <p style={eventTextStyles}>{eventData.location}</p>
      )}
    </div>
  );
}
