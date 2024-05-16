import PropTypes from 'prop-types';

import styles from './StyledButton.module.scss';

StyledButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  disabledClassname: PropTypes.string,
  baseClassname: PropTypes.string,
};

export default function StyledButton({
  text,
  onClick,
  disabled = false,
  disabledClassname = '',
  baseClassname = '',
}) {
  const disabledStyle = `${disabledClassname} ${styles.disabled}`;
  const baseStyle = `${baseClassname} ${styles.base}`;
  return (
    <button
      className={`${styles.button} ${disabled ? disabledStyle : baseStyle}`}
      onClick={() => {
        onClick();
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
