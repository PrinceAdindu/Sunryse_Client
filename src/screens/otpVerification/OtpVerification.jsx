import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import StyledButton from '../../components/styledButton/StyledButton';
import OTPInput from '../../components/otpInput/OtpInput';
import LoadingHOC from '../../components/loading/LoadingHOC';

import useToast from '../../hooks/useToast';
import { verifyOtp, sendOtp } from './otpVerificationHelper';

import logo from '../../assets/NewSunryseLogoWideNameFill.png';
import styles from './OtpVerification.module.scss';

OtpVerification.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export function OtpVerification({ setLoading }) {
  const [otpCode, setOtpCode] = useState('');

  const navigate = useNavigate();
  const toast = useToast();

  const isDisabled = otpCode.length < 6;
  const { from, email, callback } = useSelector((state) => state.otp);

  useEffect(() => {
    const sendOtpOnMount = async () => {
      setLoading(true);
      if (!email) {
        const revertTo = from || '/login';
        navigate(revertTo);
      }
      await sendOtp(email, toast);
      setLoading(false);
    };
    sendOtpOnMount();
  }, []);

  async function submit() {
    await verifyOtp(email, otpCode, callback, toast);
  }

  async function resendOtp() {
    await sendOtp(email, toast);
  }

  const Header = () => (
    <div>
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>One-Time Password</p>
      <p className={styles.subtitle}>
        Please enter the One-Time Password sent to your email
      </p>
    </div>
  );

  return (
    <div className={styles.screen}>
      <div id="Otp" className={styles.card}>
        <Header />
        <div className={styles.formContainer}>
          <OTPInput
            setValue={(value) => setOtpCode(() => value)}
            numInputs={6}
          />
          <StyledButton
            className={isDisabled ? styles.disabledButton : styles.button}
            text="Submit"
            onClick={() => submit()}
            disabled={isDisabled}
          />
          <p className={styles.text}>
            Did not receive code?
            <span className={styles.resendText} onClick={() => resendOtp()}>
              {' '}
              Resend{' '}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

const loaderStyles = {
  color: 'white',
};
const containerStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default LoadingHOC(
  OtpVerification,
  'Otp',
  false,
  loaderStyles,
  containerStyles,
);
