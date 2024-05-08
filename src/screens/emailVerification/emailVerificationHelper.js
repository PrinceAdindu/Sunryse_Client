import axios from '../../api/axios';

function validateEmail(email) {
  const validRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return validRegex.test(email);
}

async function verifyEmail(email, otpInstance, navigate, toastInstance) {
  const valid = validateEmail(email);
  if (valid) {
    otpInstance.store('/resetPassword/email');
    otpInstance.storeEmail(email);
    otpInstance.storeCallback(() => navigate('/resetPassword'));
    try {
      const res = await axios.post('/resetPassword/email', {
        data: { email },
      });
      const isEmailFound = res.data.isEmailFound;
      if (isEmailFound) navigate('/otp');
      else toastInstance.error('Email was not found');
    } catch (error) {
      toastInstance.error('There was an error on our end, please try again');
      navigate('/login');
    }
  } else {
    toastInstance.error('Invalid email');
  }
}

export { verifyEmail, validateEmail };
