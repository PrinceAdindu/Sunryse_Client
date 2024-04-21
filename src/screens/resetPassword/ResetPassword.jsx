import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useToast from '../../hooks/useToast';
import styles from './ResetPassword.module.scss';
import InputField from '../../components/inputField/InputField';
import logo from '../../assets/NewSunryseLogoWideNameFill.png';
import StyledButton from '../../components/styledButton/StyledButton';
import { CONFIRM_PASSWORD, MIN_LENGTH, PASSWORD } from './resetPasswordHelper';
export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const toastInstance = useToast();

  const navigate = useNavigate();

  const getPasswordValidationClass = (typeOfPassword) => {
    switch (typeOfPassword) {
      case PASSWORD:
        // Password.length is used to not display any class before user start typing.
        return password.length
          ? password.length >= MIN_LENGTH
            ? styles.pass
            : styles.fail
          : '';
      case CONFIRM_PASSWORD:
        return confirmPassword.length
          ? confirmPassword === password
            ? styles.pass
            : styles.fail
          : '';
      default:
        return '';
    }
  };

  // const submit = () => {
  //   if (confirmPassword != password) {
  //     toastInstance.error('password should match');
  //     return;
  //   } else {
  //     navigate('/login');
  //   }
  // };
  const Header = () => (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>Reset your Password</p>
      <p className={styles.subtitle}>Please Enter a new password</p>
    </div>
  );

  return (
    <div className={styles.screen}>
      <div className={styles.card}>
        <Header />
        <InputField
          classname={`${styles.input} ${getPasswordValidationClass(PASSWORD)}`}
          title="Password"
          type="password"
          value={password}
          setValue={setPassword}
          description="Your password must be at least 8 characters"
          minValue={MIN_LENGTH}
        />
        <InputField
          classname={`${styles.input} ${getPasswordValidationClass(
            CONFIRM_PASSWORD,
          )}`}
          title="Confirm password"
          type="password"
          value={confirmPassword}
          minValue={MIN_LENGTH}
          setValue={setConfirmPassword}
        />
        <StyledButton
          className={styles.button}
          text="Reset"
          disabled={!(confirmPassword === password && password.length)}
          // onClick={submit}
        />
      </div>
    </div>
  );
}
