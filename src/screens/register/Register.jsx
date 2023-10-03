import { useState } from 'react';
import logo from '../../assets/TerraLogoFull.png';
import InputBlock from '../../components/inputBlock/InputBlock';
import StyledButton from '../../components/styledButton/StyledButton';
import verifyInputs, { onRegister } from './registerHelper';

import styles from './Register.module.scss';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);

  const [isValid, setIsValid] = useState(false);

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
    setIsValid(valid);
    if (valid) {
      await onRegister(email, password, firstname, lastname);
    }
  }

  const Header = () => (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>Create a Terra ID</p>
      <p className={styles.subtitle}>One last step before we begin.</p>
    </div>
  );

  const Footer = () => (
    <span className={styles.footer}>
      By proceeding, you agree to the{' '}
      <a className={styles.link} href="terrapractice.com" target="_blank">
        Terms and Conditions
      </a>{' '}
      and{' '}
      <a className={styles.link} href="terrapractice.com" target="_blank">
        Privacy Policy.
      </a>
    </span>
  );

  return (
    <div className={styles.screen}>
      <div className={styles.card}>
        <Header />
        <InputBlock
          id="email_input"
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
          id="password_input"
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
            id="firstname_input"
            classname={styles.firstnameInput}
            title="First Name"
            description="Legal First Name"
            errors={[
              {
                errorId: 'invalid_firstname',
                text: 'Please make sure to enter a first name.',
                visible: firstnameError,
                setError: setFirstnameError,
              },
            ]}
            value={firstname}
            setValue={setFirstname}
          />
          <InputBlock
            id="lastname_input"
            classname={styles.input}
            title="Last Name"
            description="Legal Last Name"
            errors={[
              {
                errorId: 'invalid_lastname',
                text: 'Please make sure to enter a last name.',
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
          disabled={!isValid}
        />
        <Footer />
      </div>
    </div>
  );
};
