import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import StyledButton from '../../components/styledButton/StyledButton';
import InputField from '../../components/inputField/InputField';

import useToast from '../../hooks/useToast';
import useOtp from '../../hooks/useOtp';
import { validateEmail, verifyEmail } from './emailVerificationHelper';

import logo from '../../assets/NewSunryseLogoWideNameFill.png';
import styles from './EmailVerification.module.scss';

export default function EmailVerification() {
  const [email, setEmail] = useState('');
  const toastInstance = useToast();
  const otpInstance = useOtp();
  const navigate = useNavigate();
  const isValidEmail = validateEmail(email);

  const Header = () => (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>Forgot your password ?</p>
      <p className={styles.subtitle}>
        Enter your Email Address to Reset Your password
      </p>
    </div>
  );

  const submit = useCallback(async () => {
    await verifyEmail(email, otpInstance, navigate, toastInstance);
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
          minValue={8}
        />
        <StyledButton
          className={`${styles.button} ${
            isValidEmail ? styles.notdisabledBtn : styles.disabledBtn
          }`}
          text="Next"
          onClick={submit}
          disabled={!isValidEmail}
        />
      </div>
    </div>
  );
}
