import { Routes, Route } from 'react-router-dom';

import Login from './screens/login/Login';
import Unauthorized from './screens/Unauthorized';
import Missing from './screens/Missing';
import Home from './screens/home/Home';
import Register from './screens/register/Register';
import ToastMessage from './components/toastMessage/ToastMessage';
// import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

import styles from './App.module.scss';
import Setup from './screens/setup/Setup';
import Navbar from './components/navbar/Navbar';
import SideNavbar from './components/sideNavbar/SideNavbar';

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.contentContainer}>
        <SideNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </div>
      <ToastMessage />
    </>
  );
}

export default App;
