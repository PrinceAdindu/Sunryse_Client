import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../components/inputField/InputField';
import StyledButton from '../../components/styledButton/StyledButton';
import LoadingHOC from '../../components/loading/LoadingHOC';

import useToast from '../../hooks/useToast';
import { validateData, onRegister } from './registerHelper';

import logo from '../../assets/SunryseLogoWideFillBlue.png';

import styles from './Register.module.scss';

Register.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

function Register({ setLoading }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConf: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordConf: '',
  });

  const toast = useToast();
  const navigate = useNavigate();

  async function submit() {
    const valid = validateData(formData, setErrors);
    if (valid) {
      setLoading(true);
      await onRegister(formData, toast, navigate);
      setLoading(false);
    }
  }

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

  useEffect(() => {
    document.body.classList.add(styles.background);
    return () => document.body.classList.remove(styles.background);
  }, []);

  const Header = () => (
    <div className={styles.headerContainer}>
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>Create a Sunryse ID</p>
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
        Terms
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
      Already have a Sunryse ID?{' '}
      <Link className={styles.link} to="/login">
        Log in
      </Link>
    </span>
  );

  return (
    <div className={styles.screen}>
      <div id="Register" className={styles.card}>
        <Header />
        <InputField
          inputId="email_input"
          classname={styles.input}
          title="Email"
          value={formData.email}
          setValue={(value) => updateForm('email', value)}
          error={errors.email}
          resetError={() => updateErrors('email', '')}
        />
        <InputField
          inputId="password_input"
          classname={styles.input}
          title="Password"
          description="Your password must be at least 8 characters."
          type="password"
          value={formData.password}
          setValue={(value) => updateForm('password', value)}
          error={errors.password}
          resetError={() => updateErrors('password', '')}
        />
        <InputField
          inputId="password_conf_input"
          classname={styles.input}
          title="Confirm Password"
          type="password"
          value={formData.passwordConf}
          setValue={(value) => updateForm('passwordConf', value)}
          error={errors.passwordConf}
          resetError={() => updateErrors('passwordConf', '')}
        />
        <StyledButton
          baseClassname={styles.button}
          text="Create Terra ID"
          onClick={() => submit()}
        />
        <Terms />
        <LoginOption />
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

export default LoadingHOC(
  Register,
  'Register',
  false,
  loaderStyles,
  containerStyles,
);
