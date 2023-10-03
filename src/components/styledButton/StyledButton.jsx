import PropTypes from 'prop-types';

import styles from './StyledButton.module.scss';

StyledButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default function StyledButton({
  text,
  onClick,
  disabled = false,
  className = '',
}) {
  return (
    <button
      className={`${styles.button} ${
        disabled ? styles.disabled : styles.styled
      } ${className}`}
      onClick={() => {
        onClick();
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
