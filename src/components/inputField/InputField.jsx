import PropTypes from 'prop-types';

import styles from './InputField.module.scss';

InputField.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  split: PropTypes.bool,
  maxLength: PropTypes.number,
};

export default function InputField({
  placeholder,
  type,
  onChange,
  value,
  maxLength,
}) {
  return (
    <input
      className={styles.inputField}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength || 300}
    />
  );
}
