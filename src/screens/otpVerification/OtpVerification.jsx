import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/NewSunryseLogoWideNameFill.png';
import StyledButton from '../../components/styledButton/StyledButton';
import OTPInput from '../../components/otpInput/OtpInput';

import useToast from '../../hooks/useToast';
import { authenticateUser, sendOTP } from './otpVerificationHelper';
import styles from './OtpVerification.module.scss';

export default function OtpVerification() {
  const [otp, setOtp] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();
  const email = location?.state?.email || '';

  const isDisabled = otp.length < 6;

  useEffect(() => {
    const sendOtpOnMount = async () => {
      await sendOTP(email, toast);
    };
    sendOtpOnMount();
  }, []);

  async function submit() {
    await authenticateUser(otp, toast, location, navigate);
  }

  async function resendOtp() {
    await sendOTP(email, toast);
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
      <div className={styles.card}>
        <Header />
        <div className={styles.formContainer}>
          <OTPInput setValue={(value) => setOtp(() => value)} numInputs={6} />
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
