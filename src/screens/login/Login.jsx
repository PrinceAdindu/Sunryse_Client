import { useState, useEffect, useCallback } from 'react';
import InputBlock from '../../components/inputBlock/InputBlock';
import StyledButton from '../../components/styledButton/StyledButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { onLogin } from './loginHelper';
import useToast from '../../hooks/useToast';
import useAuth from '../../hooks/useAuth';

import logo from '../../assets/TerraLogoFull.png';
import styles from './Login.module.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setAuth } = useAuth();
  const toastInstance = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const submit = useCallback(async () => {
    await onLogin(email, password, toastInstance, setAuth, navigate, location);
  }, [email, location, navigate, password, setAuth, toastInstance]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') submit();
    };
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [submit]);

  const Header = () => (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>Log in</p>
      <p className={styles.subtitle}>Continue to Terra account</p>
    </div>
  );

  const RegisterOption = () => (
    <span className={styles.span}>
      New to Terra?{' '}
      <Link className={styles.link} to="/register">
        Get started
      </Link>
    </span>
  );

  const Help = () => (
    <span className={styles.span}>
      Forgot your email or password?{' '}
      <a
        className={styles.link}
        href="https://terrapractice.com"
        target="_blank"
        rel="noreferrer"
      >
        Reset
      </a>
    </span>
  );

  return (
    <div className={styles.screen}>
      <div className={styles.card}>
        <Header />
        <InputBlock
          inputId="email_input"
          classname={styles.input}
          title="Email"
          value={email}
          setValue={setEmail}
        />
        <InputBlock
          inputId="password_input"
          classname={styles.input}
          title="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <StyledButton
          className={styles.button}
          text="Log in"
          onClick={() => submit()}
        />
        <Help />
        <RegisterOption />
      </div>
    </div>
  );
}
