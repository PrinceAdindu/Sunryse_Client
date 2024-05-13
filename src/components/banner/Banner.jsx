import PropTypes from 'prop-types';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CustomSwitch from '../customSwitch/CustomSwitch';
import styles from './Banner.module.scss';
const Banner = ({
  status = 'off',
  title = '',
  checkbox,
  onChange = () => {},
  text,
  bannerClass,
}) => {
  const isOff = status.toLowerCase() === 'off';
  return (
    <div className={`${styles.banner} ${bannerClass}`}>
      <div className={styles.heading}>
        {isOff && <ErrorOutlineIcon sx={{ color: 'red', fontSize: 18 }} />}
        <h4>{title}</h4>
      </div>
      <span className={styles.text}>{text}</span>
      {checkbox && (
        <span style={{ marginLeft: '15%' }}>
          <CustomSwitch onChange={onChange} />
        </span>
      )}
    </div>
  );
};

Banner.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  checkbox: PropTypes.bool,
  onChange: PropTypes.func,
  text: PropTypes.string.isRequired,
  bannerClass: PropTypes.string,
};
export default Banner;
