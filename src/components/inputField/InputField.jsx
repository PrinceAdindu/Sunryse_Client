import PropTypes from 'prop-types';

import ErrorMessage from '../errorMessage/ErrorMessage';

import styles from './InputField.module.scss';

InputField.propTypes = {
  classname: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string,
  resetError: PropTypes.func,
  type: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.string,
  maxLength: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};

export default function InputField({
  classname,
  placeholder,
  title,
  value,
  setValue,
  error = '',
  resetError = () => {},
  type = 'text',
  description = '',
  size = 'md',
  maxLength = 300,
  minValue = 0,
}) {
  const Header = () => (
    <div className={styles.header}>
      <p className={styles.title}>{title}</p>
      {error && <ErrorMessage error={error} data-testid={error} />}
    </div>
  );

  const setInputValue = (newValue) => {
    let sanitizedValue = newValue;
    if (newValue !== '') {
      sanitizedValue =
        type === 'text' || type === 'password'
          ? newValue.toString()
          : parseInt(newValue);
    }
    setValue(sanitizedValue);
    resetError();
  };

  return (
    <div className={`${styles.container} ${classname}`}>
      <Header />
      <input
        className={`${styles.inputField} ${size === 'sm' && styles.smallInput}`}
        placeholder={placeholder}
        type={type}
        onChange={(e) => setInputValue(e.target.value)}
        value={value}
        maxLength={maxLength}
        min={minValue}
      />
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
}

// import PropTypes from 'prop-types';

// import styles from './InputField.module.scss';

// InputField.propTypes = {
//   header: PropTypes.string,
//   placeholder: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
//   type: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   maxLength: PropTypes.number,
//   size: PropTypes.string,
// };

// export default function InputField({
//   header = '',
//   placeholder,
//   type = 'text',
//   onChange,
//   value,
//   maxLength = 300,
//   size = 'md',
// }) {
//   return (
//     <>
//       {header && <p className={styles.header}>{header}</p>}
//       <input
//         className={`${styles.inputField} ${size === 'sm' && styles.smallInput}`}
//         placeholder={placeholder}
//         type={type}
//         onChange={onChange}
//         value={value}
//         maxLength={maxLength}
//       />
//     </>
//   );
//}
