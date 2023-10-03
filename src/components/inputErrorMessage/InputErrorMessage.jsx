import PropTypes from 'prop-types';
import RedX from '../../assets/RedX.png';

import styles from './InputErrorMessage.module.scss';

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default function ErrorMessage({ error, visible, className = '' }) {
  if (!visible) return null;
  return (
    <div className={`${styles.container} ${className}`}>
      <img className={styles.image} src={RedX} alt="error" />
      <p className={styles.message}>{error}</p>
    </div>
  );
}
