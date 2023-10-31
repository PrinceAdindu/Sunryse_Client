import PropTypes from 'prop-types';
import Select from 'react-select';

import styles from './Dropdown.module.scss';

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string || PropTypes.number.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string || PropTypes.number,
      label: PropTypes.string,
    }).isRequired,
  ),
  onChange: PropTypes.func.isRequired,
  classNames: PropTypes.string,
};

export default function Dropdown({
  id,
  value,
  options,
  onChange,
  classNames = '',
}) {
  return (
    <Select
      className={`${styles.customSelect} ${classNames}`}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      id={id}
      value={options.find((option) => option.value === value) ?? ''}
      options={options}
      onChange={(option) => onChange(option.value)}
    />
  );
}
