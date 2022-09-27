import { http } from "./axios-helper";

export const createUser = (data) => {
  return http.post(`/users/`, data).then((response) => response.data);
};

export const generateToken = (loginData) => {
  return http.post(`/auth/login`, loginData).then((response) => response.data);
};
