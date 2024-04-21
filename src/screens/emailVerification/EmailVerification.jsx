import React, { useState, useEffect, useCallback } from 'react';
import styles from './EmailVerification.module.scss';
import logo from '../../assets/NewSunryseLogoWideNameFill.png';
import InputField from '../../components/inputField/InputField';
import StyledButton from '../../components/styledButton/StyledButton';
import { sendOtpToEmail } from './EmailVerifierhelper';
import useToast from '../../hooks/useToast';
import { useNavigate } from 'react-router-dom';

export default function EmailVerification() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const toastInstance = useToast();
  const navigate = useNavigate();

  const Header = () => (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>Forgot your password ?</p>
      <p className={styles.subtitle}>
        Enter your Email Address to Reset Your password
      </p>
    </div>
  );

  // Automatically Redirect to OTP Screen page on success
  useEffect(() => {
    function shouldNavigate() {
      if (success) {
        navigate('/login/otp', { state: { from: '/verify' }, replace: true });
      }
    }
    shouldNavigate();
  }, [success]);

  const submit = useCallback(async () => {
    await sendOtpToEmail({ email, toastInstance, setSuccess });
  }, [email, toastInstance]);

  return (
    <div className={styles.screen}>
      <div className={styles.card}>
        <Header />
        <InputField
          classname={styles.input}
          title="Email"
          type="text"
          value={email}
          setValue={setEmail}
          description=""
          minValue={8}
        />
        <StyledButton
          className={styles.button}
          text="Submit"
          onClick={submit}
        />
      </div>
    </div>
  );
}
