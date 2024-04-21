import { useState } from 'react';
import logo from '../../assets/NewSunryseLogoWideNameFill.png';
import StyledButton from '../../components/styledButton/StyledButton';
import OTPInput from '../../components/otpInput/OtpInput';

import styles from './OtpVerification.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export default function OtpVerification() {
  const [otp, setOtp] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const Header = () => (
    <div>
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>One-Time Password</p>
      <p className={styles.subtitle}>
        Please enter the One-Time Password sent to your email
      </p>
    </div>
  );

  //Only for testing redirecting routes will be replaced when the API finshed;

  function onsubmit() {
    let to = '/home';
    const from = location.state?.from;
    // Incase they came from login
    if (from && from === '/login') to = '/home';

    if (from && from === '/verify') to = '/resetPassword';
    navigate(to, { replace: true });
  }
  return (
    <div className={styles.screen}>
      <div className={styles.card}>
        <Header />
        <div className={styles.formContainer}>
          <OTPInput setValue={(value) => setOtp(() => value)} numInputs={6} />
          <StyledButton
            className={styles.button}
            text="Submit"
            onClick={onsubmit}
            disabled={otp.length < 6}
          />
          <p className={styles.text}>
            {/*
            TODO
                OTP resend functionality
            */}
            Did not receive code ?
            <span className={styles.resendText}> Resend </span>
          </p>
        </div>
      </div>
    </div>
  );
}
