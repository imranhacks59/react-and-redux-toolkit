import axiosInstance from "../../api/axios";
import { refreshToken } from "../userAction";
// import TokenService from "./token.service";
// import { refreshToken } from "../userAction/refreshToken";
// import { useNavigate, useNavigation } from "react-router-dom";
const setup = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      // console.log('Request interceptor is called');
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.token;
      // TokenService.getLocalAccessToken();
    // const user = JSON.parse(localStorage.getItem("user"));
    // const token=user?.access
      if (token) {
        // console.log(token)
        config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        // config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      // console.log(config)
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const { dispatch } = store;
  axiosInstance.interceptors.response.use(
    (res) => {
      // console.log('31 in inteceptor')
      // console.log(res)
      return res;
    },
    async (err) => {
      // const navigate = useNavigation();
      const originalConfig = err.config;
      // console.log('37 in inteceptor')
      // console.log(err);
      // console.log(err.response);
      if (originalConfig.url !== "/api/login/" && err.response) {
        console.log('41 in inteceptor')
        // Access Token was expired
        console.log(err?.response?.data.detail)
        if(err?.response?.data.detail === "Token is invalid or expired"){
          console.log('response in expiredd1')
          //  navigate('/login')
          localStorage.removeItem("user");
          window.location.href = "/login"
          return;
        }
        if (err.response.status === 401 && !originalConfig._retry) {
          // console.log('44 in inteceptor')
          originalConfig._retry = true;

          try {
            let user = JSON.parse(localStorage.getItem("user"))
            // console.log('49 in inteceptor')
            const rs = await axiosInstance.post("/api/token/refresh/", {
              refresh:user?.refresh
              //  TokenService.getLocalRefreshToken(),
            });

            const { access } = rs.data;

            dispatch(refreshToken(access));
            // TokenService.updateLocalAccessToken(access);
            //  user = JSON.parse(localStorage.getItem("user"));
            user.access = access;
            localStorage.setItem("user", JSON.stringify(user));
            return axiosInstance(originalConfig);
          } catch (_error) {
            // if (_error.response && _error.response.data.detail === "Token is invalid or expired") {
            //   // Redirect to the login page when refresh token is invalid or expired
            //   // You may use your preferred navigation library here
            //   console.log('in errroooooooorrrrrrrr')
            //   window.location.href = "/login";
            // }
            return Promise.reject(_error);

          }
        }
        // if(err?.response?.data.detail==="Token is invalid or expired"){
        //   console.log('response in expiredd2')
        //   window.location.href = "/login";
        // }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;