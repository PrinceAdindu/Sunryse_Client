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
  indicator: PropTypes.bool,
  classNames: PropTypes.string,
};

export default function Dropdown({
  id,
  value,
  options,
  onChange,
  indicator = false,
  classNames = '',
}) {
  const selectComponents = indicator
    ? { IndicatorSeparator: () => null }
    : {
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      };

  return (
    <Select
      className={`${styles.customSelect} ${classNames}`}
      components={selectComponents}
      id={id}
      value={options.find((option) => option.value === value) ?? ''}
      options={options}
      onChange={(option) => onChange(option.value)}
    />
  );
}
