import axios from "axios";
import config from "../config";
import { showToast } from "../../utils";
import { strToCapitalize } from "./string";
import AsyncStorage from "@react-native-async-storage/async-storage";

const parseError = (values, keys, obj) => {
  keys.forEach((key) => {
    if (typeof obj[key] !== "string") {
      showToast("error", strToCapitalize(key), `${obj[key][0]}`);
    } else {
      showToast("error", values);
    }
  });
};

/**
 * Axios defaults
 */
axios.defaults.baseURL = config.baseUrl;

// Headers
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common.Accept = "application/json";

/**
 * Request Interceptor
 */
axios.interceptors.request.use(
  async (inputConfig) => {
    const axiosConfig = inputConfig;

    // Check for and add the stored Auth Token to the header request
    let token = "";
    try {
      token = await AsyncStorage.getItem("@Auth:token");
    } catch (error) {
      /* Nothing */
    }
    axios.defaults.headers["Referer"] = config.baseUrl;
    if (token) {
      axiosConfig.headers.common.Authorization = `Bearer ${token}`;
      axiosConfig.headers.common["X-CSRF-TOKEN"] = token;
    }

    return axiosConfig;
  },
  (error) => {
    throw error;
  }
);

/**
 * Response Interceptor
 */
axios.interceptors.response.use(
  (res) => {
    // Status code isn't a success code - throw error
    if (!`${res.status}`.startsWith("2")) {
      throw res.data;
    }

    // Otherwise just return the data
    return res;
  },
  (error) => {
    // Pass the response from the API, rather than a status code
    if (error && error.response && error.response.data) {
      const errorMessagesKey = Object.keys(error.response.data);
      const errorMessages = Object.values(error.response.data);
      if (errorMessages.length > 0) {
        parseError(errorMessages, errorMessagesKey, error.response.data);
      }
      throw error.response.data;
    }
    const errorMessages = Object.values(error);
    const errorMessagesKey = Object.keys(error);
    if (errorMessages.length > 0) {
      parseError(errorMessages, errorMessagesKey, error);
    }
    throw error;
  }
);

export default axios;
