import axios from '../../api/axios';
import config from '../../config';

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
      console.log('1');
      setAuth({ accessToken });
      console.log('2');
      const to = config.externalRoutes.includes(location.state.from)
        ? '/home'
        : location.state.from;
      console.log('3', to);
      navigate(to);
    });
    navigate('/otp');
  } catch (error) {
    if (error?.response?.status === 400)
      toastInstance.error('Your email or password is incorrect');
    else if (error?.response?.status === 401)
      toastInstance.error('Unable to login, please refresh and retry');
    else {
      console.log(error);
      toastInstance.error(
        'There was an error on our end, please notify support',
      );
    }
  }
}
