import {useNavigate} from "react-router-dom";
import axios from "../api/axios";
import useAuth from "./useAuthContext";

const useRefreshToken = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();

  async function refresh() {
    try {
      const res = await axios.post("/login/refresh");
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
