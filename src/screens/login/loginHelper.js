import axios from '../../api/axios';

export async function onLogin(
  email,
  password,
  toastInstance,
  setAuth,
  navigate,
  location,
) {
  const data = { email, password };
  const from = location.state?.from?.pathname || '/';
  try {
    const res = await axios.post('/login', data);
    const accessToken = res?.data?.accessToken;
    setAuth({ accessToken });
    navigate(from, { replace: true });
  } catch (err) {
    if (err?.response?.status === 400)
      toastInstance.error('Your email or password is incorrect');
    else if (err?.response?.status === 401)
      toastInstance.error('Unable to login, please refresh and retry');
    else
      toastInstance.error(
        'There was an error on our end, please notify support',
      );
  }
}
