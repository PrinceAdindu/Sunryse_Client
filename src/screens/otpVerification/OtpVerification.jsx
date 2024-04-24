import { useState } from 'react';
import logo from '../../assets/NewSunryseLogoWideNameFill.png';
import StyledButton from '../../components/styledButton/StyledButton';
import OTPInput from '../../components/otpInput/OtpInput';

import styles from './OtpVerification.module.scss';

export default function OtpVerification() {
  const [otp, setOtp] = useState('');

  const isDisabled = otp.length < 6;

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
            onClick={() => {}}
            disabled={isDisabled}
          />
          <p className={styles.text}>
            {/*
            TODO
                OTP resend functionality
            */}
            Did not receive code?
            <span className={styles.resendText}> Resend </span>
          </p>
        </div>
      </div>
    </div>
  );
}
