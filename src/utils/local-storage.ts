export const setToLocalStorage = (key: string, token: string) => {
  if (!key || !token) return "";
  return window.localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key) return "";
  return window.localStorage.getItem(key);
};
