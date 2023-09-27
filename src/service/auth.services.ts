import jwtDecode from "jwt-decode";
import { authToken } from "@/constant/local-storage";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = (token: string) => {
  if (!token) return "";

  setToLocalStorage(authToken, token);
};

export const getUserInfo = () => {
  const accessToken = getFromLocalStorage(authToken);
  if (!accessToken) return "";

  const decodedData = jwtDecode(accessToken);
  return decodedData;
};

export const isLoggedIn = () => {
  const userInfo = getUserInfo();
  return !!userInfo;
};
