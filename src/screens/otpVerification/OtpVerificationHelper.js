import axios from '../../api/axios';

export async function sendOtp(email, toast) {
  try {
    await axios.post('/otp', { data: { email: email } });
  } catch (error) {
    toast.error(
      'There was an error sending the one time password, please try again.',
    );
  }
}

export async function verifyOtp(email, code, callback, toast) {
  try {
    const data = { email, code };
    const res = await axios.post('/otp/verify', { data });
    const isVerified = res.data.isVerified;
    if (isVerified) {
      callback();
    }
  } catch (error) {
    console.log(error);
    if (error?.response?.status === 401)
      toast.error('Verification code is incorrect');
    else
      toast.error(
        'There was an error validating the verification code, please try again.',
      );
  }
}
