function validateEmail(email) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return validRegex.test(email);
}

function sendOtpToEmail(args) {
  const { email, toastInstance, setSuccess } = args;
  if (validateEmail(email)) {
    // TODO:
    // intergating to the backend.
    toastInstance.success(
      'Please check your email addrees for 6 digit OTP code.',
    );
    setSuccess(true);
  } else {
    toastInstance.error('Please provide a valid Email address');
    setSuccess(false);
  }
}

export { sendOtpToEmail, validateEmail };
