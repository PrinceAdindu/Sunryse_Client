import PropTypes from 'prop-types';
import RedX from '../../assets/RedX.png';

import styles from './ErrorMessage.module.scss';

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function ErrorMessage({ error, className = '' }) {
  if (!error) return null;
  return (
    <div className={`${styles.container} ${className}`}>
      <img className={styles.image} src={RedX} alt="error" />
      <p className={styles.message}>{error}</p>
    </div>
  );
}
