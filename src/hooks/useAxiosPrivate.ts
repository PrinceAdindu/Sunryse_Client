import {useEffect} from "react";
import {axiosPrivate} from "../services/api/axios";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuthContext";
import {AxiosRequestConfig} from "axios";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const {auth} = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (config.headers && !config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config as AxiosRequestConfig & {
          sent?: Boolean;
        };
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          try {
            const newAccessToken = await refresh();
            prevRequest.headers = {
              ...prevRequest.headers,
              Authorization: `Bearer ${newAccessToken}`,
            };
            return axiosPrivate(prevRequest); // Retry request
          } catch (refreshError) {
            return Promise.reject(refreshError); // Propogates error to be caught at source
          }
        }
        return Promise.reject(error); // Propogates error to be caught at source
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, location, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
