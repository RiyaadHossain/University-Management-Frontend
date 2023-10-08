import { authToken } from "@/constant/local-storage";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";
import { decodeToken } from "@/utils/jwt";

export const storeUserInfo = (token: string) => {
  if (!token) return "";

  setToLocalStorage(authToken, token);
};

export const getUserInfo = () => {
  const accessToken = getFromLocalStorage(authToken);
  if (!accessToken) return "";

  const decodedData = decodeToken(accessToken);
  return decodedData;
};

export const removeUserInfo = () => {
  return removeFromLocalStorage(authToken);
};

export const isLoggedIn = () => {
  const userInfo = getUserInfo();
  return !!userInfo;
};
