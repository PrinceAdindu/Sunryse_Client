import PropTypes from 'prop-types';
import styles from './Avator.module.scss';
export default function Avator({
  imgUrl,
  size = 'small',
  initials,
  bgColor,
  width,
  height,
}) {
  return (
    <div
      className={` ${styles.avator} ${styles[size]}`}
      style={{ backgroundColor: bgColor, width, height }}
    >
      {imgUrl ? <img src={imgUrl} alt="Avatar" /> : <span>{initials}</span>}
    </div>
  );
}

Avator.propTypes = {
  imgUrl: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  initials: PropTypes.string,
  bgColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
