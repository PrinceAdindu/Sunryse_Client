import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

Loading.propTypes = {
  loaderStyles: PropTypes.object,
  containerStyles: PropTypes.object,
};

export default function Loading({ loaderStyles = '', containerStyles = '' }) {
  return (
    <Box
      id="Loading"
      sx={
        containerStyles || {
          position: 'absolute',
          top: '50%',
          left: '60%',
          transform: 'translate(-60%, -50%)',
        }
      }
    >
      <CircularProgress sx={loaderStyles || { color: '#ff5c5f' }} size={80} />
    </Box>
  );
}
