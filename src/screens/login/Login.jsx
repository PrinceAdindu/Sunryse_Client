import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingHOC from '../../components/loading/LoadingHOC';
import InputField from '../../components/inputField/InputField';
import StyledButton from '../../components/styledButton/StyledButton';

import { onLogin } from './loginHelper';
import useToast from '../../hooks/useToast';
import useAuth from '../../hooks/useAuth';

import logo from '../../assets/NewSunryseLogoWideNameFill.png';

import styles from './Login.module.scss';

function Login({ loading, setLoading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setAuth } = useAuth();
  const toastInstance = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const submit = useCallback(async () => {
    setLoading(true);
    await onLogin(email, password, toastInstance, setAuth, navigate, location);
    setLoading(false);
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
      New to Sunryse?{' '}
      <Link className={styles.link} to="/register">
        Get started
      </Link>
    </span>
  );

  const Help = () => (
    <span className={styles.span}>
      Forgot your email or password?{' '}
      <Link to="/resetPassword/email" className={styles.link}>
        Reset
      </Link>
    </span>
  );

  return (
    <div className={styles.screen}>
      <div id="Login" className={styles.card}>
        <Header />
        <InputField
          classname={styles.input}
          title="Email"
          value={email}
          setValue={setEmail}
        />
        <InputField
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

const loaderStyles = {
  color: 'white',
};
const containerStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default LoadingHOC(Login, 'Login', false, loaderStyles, containerStyles);
