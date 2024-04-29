export async function sendOTP(email, toast) {
  /*
 TODO
 API for sending OTP User
 */
  console.log('otp sent to', email);
}

export async function authenticateUser(otp, toast, location, navigate) {
  /*
  TODO
  Check user Input otp and generated otp is a match.
  check whether otp is expired or not
  if expired, Let user know to resend again 
  if passed all redirect them to the desired route
  */

  // This below code will be replaced when the backend API finshed.

  if (location?.state?.from === '/resetPassword/email') {
    console.log('user redirected to resetPassword');
    return navigate('/resetPassword', {
      state: { from: '/otp', email: location?.state?.email },
    });
  }
  if (location?.state?.from === '/login') {
    console.log('user redirected to home');
    return navigate('/home', {
      state: { from: '/otp', email: location?.state?.email },
    });
  }
}
