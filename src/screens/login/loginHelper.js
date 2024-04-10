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
  console.log(sanitizedEmail);
  const data = { email: sanitizedEmail, password };
  //let to = '/home';
  let to = '/verify-otp';
  const from = location.state?.from?.pathname;

  // Incase they came from login
  if (from && from !== '/login') {
    to = location.state?.from?.pathname;
  }
  try {
    const res = await axios.post('/login', data);
    const accessToken = res?.data?.accessToken;
    setAuth({ accessToken });
    navigate(to, { replace: true });
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
