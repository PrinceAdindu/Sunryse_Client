import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/NewSunryseLogoWideNameFill.png';
import StyledButton from '../../components/styledButton/StyledButton';
import InputField from '../../components/inputField/InputField';
import useToast from '../../hooks/useToast';
import { verifyEmail } from './emailVerifierhelper';
import styles from './EmailVerification.module.scss';

export default function EmailVerification() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
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

  const submit = useCallback(async () => {
    await verifyEmail({ email, toastInstance, navigate, setEmailError });
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
          error={emailError}
          resetError={() => setEmailError('')}
          setValue={setEmail}
          minValue={8}
        />
        <StyledButton className={styles.button} text="Next" onClick={submit} />
      </div>
    </div>
  );
}
