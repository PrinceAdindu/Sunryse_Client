import axios from '../../api/axios';

export async function onLogin(
  email,
  password,
  setAuth,
  navigate,
  location,
  otpInstance,
  toastInstance,
) {
  const sanitizedEmail = email.toLowerCase();
  const data = { email: sanitizedEmail, password };
  try {
    const res = await axios.post('/login', data);
    const accessToken = res.data.accessToken;
    otpInstance.storeFrom('/login');
    otpInstance.storeEmail(sanitizedEmail);
    otpInstance.storeCallback(() => {
      setAuth({ accessToken });
      // TODO: add in last route return
      // const to = config.externalRoutes.includes(location.pathname)
      //   ? '/home'
      //   : location.pathname;
      navigate('/home');
    });
    navigate('/otp');
  } catch (error) {
    if (error?.response?.status === 400)
      toastInstance.error('Your email or password is incorrect');
    else if (error?.response?.status === 401)
      toastInstance.error('Unable to login, please refresh and retry');
    else {
      toastInstance.error(
        'There was an error on our end, please notify support',
      );
    }
  }
}
