import axios from '../../api/axios';

export async function onLogin(
  email,
  password,
  toastInstance,
  setAuth,
  navigate,
  location,
) {
  const sanitizedEmail = email.toLowerCase();
  const data = { email: sanitizedEmail, password };
  try {
    const res = await axios.post('/login', data);
    const accessToken = res?.data?.accessToken;
    setAuth({ accessToken });
    navigate('/otp', { state: { from: '/login' }, replace: true });
  } catch (error) {
    if (error?.response?.status === 400)
      toastInstance.error('Your email or password is incorrect');
    else if (error?.response?.status === 401)
      toastInstance.error('Unable to login, please refresh and retry');
    else
      toastInstance.error(
        'There was an error on our end, please notify support',
      );
  }
}
