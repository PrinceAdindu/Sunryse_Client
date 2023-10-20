import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  async function refresh() {
    const res = await axios.post('/login/refresh');
    if (res.status === 200) {
      const accessToken = res?.data?.accessToken;
      setAuth({ accessToken });
    }
    return res?.data?.accessToken;
  }
  return refresh;
};

export default useRefreshToken;
