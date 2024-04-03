import PropTypes from 'prop-types';
import Select from 'react-select';

import styles from './Dropdown.module.scss';
import ErrorMessage from '../errorMessage/ErrorMessage';

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
  error: PropTypes.string,
  resetError: PropTypes.func,
  title: PropTypes.string,
  indicator: PropTypes.bool,
  classname: PropTypes.string,
  selectClassname: PropTypes.string,
};

export default function Dropdown({
  id,
  value,
  options,
  onChange,
  error = '',
  resetError = () => {},
  title = '',
  indicator = false,
  classname = '',
  selectClassname = '',
}) {
  const selectComponents = indicator
    ? { IndicatorSeparator: () => null }
    : {
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: 'black',
      backgroundColor: state.isSelected
        ? '#f1f1f1'
        : state.isFocused
        ? '#f1f1f1'
        : 'white',
      margin: '0px',
    }),
    control: (provided, state) => ({
      ...provided,
      borderColor: '#B1B1B1',
      borderWidth: '1.5px',
    }),
    menuList: (provided, state) => ({
      ...provided,
      padding: '0px',
      borderRadius: '5px',
    }),
  };

  const Header = () => (
    <div className={styles.header}>
      <p className={styles.title}>{title}</p>
      {error && <ErrorMessage error={error} data-testid={error} />}
    </div>
  );

  return (
    <div className={`${styles.container} ${classname}`}>
      {title && <Header />}
      <Select
        id={id}
        className={`${styles.customSelect} ${selectClassname}`}
        components={selectComponents}
        value={options.find((option) => option.value === value) ?? ''}
        options={options}
        onChange={(option) => {
          resetError();
          onChange(option.value);
        }}
        styles={customStyles}
      />
    </div>
  );
}
