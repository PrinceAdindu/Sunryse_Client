import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/NewSunryseLogoWideNameFill.png';
import StyledButton from '../../components/styledButton/StyledButton';
import InputField from '../../components/inputField/InputField';
import useToast from '../../hooks/useToast';
import { validateEmail, verifyEmail } from './emailVerifierhelper';
import styles from './EmailVerification.module.scss';

export default function EmailVerification() {
  const [email, setEmail] = useState('');
  const toastInstance = useToast();
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
    await verifyEmail({ email, toastInstance, navigate });
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
