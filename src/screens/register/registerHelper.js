// export async function isEmailInUse(email) {
//   const res = await axios.post('/signUp/available/email', {
//     email,
//   });
//   const available = res.data;
//   return !available;
// }

export async function onRegister(email, password, firstname, lastname) {
  return;
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
) {
  resetAllErrors([setEmailError, setPasswordError]);
  let valid = true;

  // let emailInUse = false;
  // try {
  //   emailInUse = await isEmailInUse(email);
  // } catch (error) {
  //   setUnavailableEmailError(true);
  //   valid = false;
  // }

  // if (emailInUse) {
  //   setUnavailableEmailError(true);
  //   valid = false;
  // }

  if (!regexTests.EMAIL.test(email)) {
    setEmailError(true);
    valid = false;
  }

  if (password.length < 8) {
    setPasswordError(true);
    valid = false;
  }

  return valid;
}
