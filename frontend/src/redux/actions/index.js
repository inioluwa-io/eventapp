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

export const getEvents = () => {
  return axios.get("http://192.168.0.177:80/api/event");
};

export const getOneEvent = (id) => {
  return axios.get("http://192.168.0.177:80/api/event/" + id);
};

export const deleteOneEvent = (id) => {
  return axios.delete("http://192.168.0.177:80/api/event/" + id);
};

export const getAllEvents = (params) => {
  return axios.post("http://192.168.0.177:80/api/event/range", { ...params });
};

export default {
  registerUser,
  loginUser,
  createEvent,
  getOneEvent,
  deleteOneEvent,
};
