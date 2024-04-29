import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import logo from '../../assets/NewSunryseLogoWideNameFill.png';
import InputField from '../../components/inputField/InputField';
import StyledButton from '../../components/styledButton/StyledButton';
import useToast from '../../hooks/useToast';
import { onPasswordReset, validateData } from './resetPasswordHelper';
import styles from './ResetPassword.module.scss';

export default function ResetPassword() {
  const location = useLocation();
  const toastInstance = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: '',
    passwordConf: '',
    email: location?.state?.email || '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordConf: '',
  });

  const updateForm = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const updateErrors = (field, value) => {
    setErrors((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const Header = () => (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>Reset your Password</p>
      <p className={styles.subtitle}>Please Enter a new password</p>
    </div>
  );

  async function submit() {
    const valid = validateData(formData, setErrors);
    if (valid) {
      await onPasswordReset(formData, toastInstance, navigate);
    }
  }
  return (
    <div className={styles.screen}>
      <div className={styles.card}>
        <Header />
        <InputField
          inputId="password_input"
          classname={styles.input}
          title="Password"
          type="password"
          description="Your password must be at least 8 characters"
          value={formData.password}
          setValue={(value) => updateForm('password', value)}
          error={errors.password}
          resetError={() => updateErrors('password', '')}
        />
        <InputField
          inputId="password_conf_input"
          classname={styles.input}
          title="Confirm password"
          type="password"
          value={formData.passwordConf}
          setValue={(value) => updateForm('passwordConf', value)}
          error={errors.passwordConf}
          resetError={() => updateErrors('passwordConf', '')}
        />
        <StyledButton className={styles.button} text="Reset" onClick={submit} />
      </div>
    </div>
  );
}
