import { authToken } from "@/constant/local-storage";
import { IResponseError, IResponseSuccess } from "@/interface/common";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const axiosInstance = axios.create({});
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Request Intercepter
axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authToken);
    if (accessToken) config.headers.Authorization = accessToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response Intercepter
axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const resObject: IResponseSuccess = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };

    return resObject;
  },
  function (error) {
    const responseObject: IResponseError = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      errorMessages: error?.response?.data?.errorMessages || [],
    };
    return responseObject;
  }
);

export default axiosInstance;
