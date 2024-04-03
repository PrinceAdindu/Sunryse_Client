import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default function CheckBox({ checked, onChange = () => {} }) {
  return (
    <Checkbox
      checked={checked}
      onChange={(event) => onChange(event)}
      sx={{
        color: '#ff7073',
        '&.Mui-checked': {
          color: '#ff7073',
        },
      }}
    />
  );
}
