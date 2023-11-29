import { useState, useEffect } from 'react';
import InputBlock from '../../components/inputBlock/InputBlock';
import StyledButton from '../../components/styledButton/StyledButton';
import verifyInputs, { onRegister } from './registerHelper';
import useToast from '../../hooks/useToast';

import logo from '../../assets/TerraLogoFull.png';
import styles from './Register.module.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);

  const toastInstance = useToast();
  const navigate = useNavigate();

  async function submit() {
    const valid = await verifyInputs(
      email,
      setEmailError,
      password,
      setPasswordError,
      firstname,
      setFirstnameError,
      lastname,
      setLastnameError,
    );
    if (valid)
      await onRegister(email, password, firstname, lastname, toastInstance);
    navigate('/login');
  }

  useEffect(() => {
    document.body.classList.add(styles.background);
    return () => document.body.classList.remove(styles.background);
  }, []);

  const Header = () => (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>Create a Terra ID</p>
      <p className={styles.subtitle}>One last step before we begin.</p>
    </div>
  );

  const Terms = () => (
    <span className={styles.span}>
      By proceeding, you agree to the{' '}
      <a
        className={styles.link}
        href="https://terrapractice.com"
        target="_blank"
        rel="noreferrer"
      >
        Terms and Conditions
      </a>{' '}
      and{' '}
      <a
        className={styles.link}
        href="https://terrapractice.com"
        target="_blank"
        rel="noreferrer"
      >
        Privacy Policy.
      </a>
    </span>
  );

  const LoginOption = () => (
    <span className={styles.span}>
      Already have a Terra ID?{' '}
      <Link className={styles.link} to="/login">
        Log in
      </Link>
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
          errors={[
            {
              errorId: 'invalid_email',
              text: 'Please enter a valid email',
              visible: emailError,
              setError: setEmailError,
            },
          ]}
          value={email}
          setValue={setEmail}
        />
        <InputBlock
          inputId="password_input"
          classname={styles.input}
          title="Password"
          description="Your password must be at least 8 characters."
          type="password"
          errors={[
            {
              errorId: 'invalid_password',
              text: 'Please make sure your password is at least 8 characters',
              visible: passwordError,
              setError: setPasswordError,
            },
          ]}
          value={password}
          setValue={setPassword}
        />
        <div className={styles.nameContainer}>
          <InputBlock
            inputId="firstname_input"
            classname={styles.firstnameInput}
            title="First Name"
            description="Legal First Name"
            errors={[
              {
                errorId: 'invalid_firstname',
                text: 'Required',
                visible: firstnameError,
                setError: setFirstnameError,
              },
            ]}
            value={firstname}
            setValue={setFirstname}
          />
          <InputBlock
            inputId="lastname_input"
            classname={styles.input}
            title="Last Name"
            description="Legal Last Name"
            errors={[
              {
                errorId: 'invalid_lastname',
                text: 'Required',
                visible: lastnameError,
                setError: setLastnameError,
              },
            ]}
            value={lastname}
            setValue={setLastname}
          />
        </div>
        <StyledButton
          className={styles.button}
          text="Create Terra ID"
          onClick={() => submit()}
        />
        <Terms />
        <LoginOption />
      </div>
    </div>
  );
}
