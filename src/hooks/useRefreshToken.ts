import {useNavigate} from "react-router-dom";
import axios from "../services/api/axios";
import useAuth from "./useAuthContext";

type RefreshTokenResponse = {
  accessToken: string;
};

const useRefreshToken = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();

  async function refresh(): Promise<string | undefined> {
    try {
      const res = await axios.post<RefreshTokenResponse>("/login/refresh");
      if (res.status === 200) {
        const accessToken = res?.data?.accessToken;
        setAuth({accessToken});
      }
      return res?.data?.accessToken;
    } catch (error) {
      navigate("/login"); // Refresh token expired - login required
      throw error;
    }
  }
  return refresh;
};

export default useRefreshToken;
