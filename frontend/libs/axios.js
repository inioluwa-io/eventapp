import axios from "axios";
import config from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToast } from "../utils";

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
    if (token) {
      axiosConfig.headers.common.Authorization = `Bearer ${token}`;
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
      showToast("error", error.response.data);
      throw error.response.data;
    }
    showToast("error", error);
    throw error;
  }
);

export default axios;
