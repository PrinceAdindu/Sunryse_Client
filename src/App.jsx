import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Login from './screens/login/Login';
import Register from './screens/register/Register';
import Home from './screens/home/Home';
import BusinessHours from './screens/businessHours/BusinessHours';
import Bookings from './screens/bookings/Bookings';
import Finances from './screens/finances/Finances';
import Services from './screens/services/Services';
import Unauthorized from './screens/Unauthorized';
import Missing from './screens/Missing';
import Navbar from './components/navbar/Navbar';
import SideNavbar from './components/sideNavbar/SideNavbar';
import ToastMessage from './components/toastMessage/ToastMessage';

import useRefreshToken from './hooks/useRefreshToken';
import config from './config';

import styles from './App.module.scss';
import NewService from './screens/services/newService/NewService';

function App() {
  const refresh = useRefreshToken();
  const location = useLocation();

  // Authenticate on refresh
  useEffect(() => {
    const onRefresh = async () => {
      await refresh();
    };
    // Only check auth when inside the app
    if (!config.externalRoutes.includes(location.pathname)) {
      onRefresh();
    }
  }, []);

  return (
    <div className={styles.app}>
      <SideNavbar />
      <div className={styles.contentContainer}>
        <Navbar />
        <Routes>
          <Route path="/home/*" element={<Home />} />
          <Route path="/hours/*" element={<BusinessHours />} />
          <Route path="/bookings/*" element={<Bookings />} />
          <Route path="/finances/*" element={<Finances />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/services/new" element={<NewService />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </div>
      <ToastMessage />
    </div>
  );
}

export default App;
