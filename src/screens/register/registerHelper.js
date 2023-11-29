import axios from '../../api/axios';

export async function onRegister(
  email,
  password,
  firstname,
  lastname,
  toastInstance,
) {
  const data = { email, password, firstname, lastname };
  try {
    await axios.post('/register/clinic', data);
  } catch (error) {
    if (error?.response?.status === 409)
      toastInstance.error('This email is already registered with a Terra ID.');
    else if (error?.response?.status === 400)
      toastInstance.error('Please fill in all the required information.');
    else
      toastInstance.error(
        'There was an error creating your Terra ID, please try again.',
      );
  }
}

const regexTests = {
  EMAIL: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
};

function resetAllErrors(errorHandlers) {
  errorHandlers.forEach((setError) => {
    setError(false);
  });
}

export default async function verifyInputs(
  email,
  setEmailError,
  password,
  setPasswordError,
  firstname,
  setFirstnameError,
  lastname,
  setLastnameError,
) {
  resetAllErrors([
    setEmailError,
    setPasswordError,
    setFirstnameError,
    setLastnameError,
  ]);
  let valid = true;

  if (!regexTests.EMAIL.test(email)) {
    setEmailError(true);
    valid = false;
  }

  if (password.length < 8) {
    setPasswordError(true);
    valid = false;
  }

  if (firstname.length < 1) {
    setFirstnameError(true);
    valid = false;
  }

  if (lastname.length < 1) {
    setLastnameError(true);
    valid = false;
  }

  return valid;
}
