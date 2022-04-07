import axios from "axios";

export const registerUser = (params) => {
  return axios.post("http://192.168.0.177:80/api/auth/register", {
    ...params,
    client_id: "2",
    client_secret: "0A07guEq8itvcfz0dpcvSL4lflmPUIIdnEJ7MXWh",
    scope: "*",
  });
};

export const loginUser = (params) => {
  return axios.post("http://192.168.0.177:80/api/auth/login", {
    ...params,
    client_id: "2",
    client_secret: "0A07guEq8itvcfz0dpcvSL4lflmPUIIdnEJ7MXWh",
    scope: "*",
  });
};

export const createEvent = (params) => {
  return axios.post("http://192.168.0.177:80/api/event", {
    ...params,
  });
};

export default { registerUser, loginUser, createEvent };
