import { Routes, Route } from 'react-router-dom';

import Login from './screens/login/Login';
import Register from './screens/register/Register';
import ResetPassword from './screens/resetPassword/ResetPassword';
import OtpVerification from './screens/otpVerification/OtpVerification';
import EmailVerification from './screens/emailVerification/EmailVerification';
import Unauthorized from './screens/Unauthorized';
import Missing from './screens/Missing';
import Home from './screens/home/Home';
import BusinessHours from './screens/businessHours/BusinessHours';
import Bookings from './screens/bookings/Bookings';
import Finances from './screens/finances/Finances';
import Marketing from './screens/marketing/Marketing';
import Services from './screens/services/Services';
import NewService from './screens/services/newService/NewService';
import ToastMessage from './components/toastMessage/ToastMessage';
import PrivateRouteLayout from './screens/layout/PrivateRouteLayout';

import './App.module.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/resetPassword/email" element={<EmailVerification />} />
        <Route path="/" element={<PrivateRouteLayout />}>
          <Route index path="/home/*" element={<Home />} />
          <Route path="/hours/*" element={<BusinessHours />} />
          <Route path="/bookings/*" element={<Bookings />} />
          <Route path="/finances/*" element={<Finances />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/services/new" element={<NewService />} />
          <Route path="/marketing/*" element={<Marketing />} />
        </Route>
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <ToastMessage />
    </div>
  );
}

export default App;
