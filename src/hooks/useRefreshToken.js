import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function refresh() {
    try {
      const res = await axios.post('/login/refresh');
      if (res.status === 200) {
        const accessToken = res?.data?.accessToken;
        setAuth({ accessToken });
      }
      return res?.data?.accessToken;
    } catch (error) {
      navigate('/login', { state: { from: location } }); // Refresh token expired - login required
      throw error;
    }
  }
  return refresh;
};

export default useRefreshToken;
