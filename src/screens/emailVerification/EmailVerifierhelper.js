import axios from '../../api/axios';

function validateEmail(email) {
  const validRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  return validRegex.test(email);
}

async function verifyEmail(args) {
  const { email, toastInstance, navigate, setEmailError } = args;
  const valid = validateEmail(email);
  if (valid) {
    try {
      const response = await axios.post('/resetPassword/email', {
        data: { email },
      });
      if (response.data?.isEmailFound)
        navigate('/otp', {
          state: { from: '/resetPassword/email', email },
          replace: true,
        });
      else toastInstance.error('Email was not found');
    } catch (error) {
      toastInstance.error('Please try again');
    }
  } else {
    setEmailError('Email format is incorrect.');
  }
}

export { verifyEmail, validateEmail };
