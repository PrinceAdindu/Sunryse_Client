import React, { useState } from 'react';
import logo from '../../assets/NewSunryseLogoWideNameFill.png';
import styles from './Verification.module.scss';
import StyledButton from '../../components/styledButton/StyledButton';
import OTPInput from '../../components/otpInput/OtpInput';
export default function OtpVerification() {
  const [otp, setOtp] = useState('');

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
          <div className={styles.inputContainer}>
            <OTPInput
              getOTPValue={(value) => setOtp(() => value)}
              numInputs={6}
            />
          </div>
          <StyledButton
            className={styles.button}
            text="Submit"
            onClick={() => {}}
            // disabled={otp.length < 6}
          />
          <p className={styles.p}>
            {/*
            TODO
                OTP resend functionality
            */}
            Did not receive code ?<b> Resend Again</b>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
