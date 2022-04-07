import { AuthReducerStateProps } from "../reducers/authReducers";
import { UIReducerStateProps } from "../reducers/uiReducers";
import { userReducerStateProps } from "../reducers/userReducer";

export const SET_LOGGED_IN_USER: string = "SET_LOGGED_IN_USER";
export const LOGOUT: string = "LOGOUT";
export const SET_LOADING: string = "SET_LOADING";
export const SET_LOGGED_IN: string = "SET_LOGGED_IN";
export const SET_USER: string = "SET_USER";
export const SET_ALL_ADDRESSES: string = "SET_ALL_ADDRESSES";
export const SET_SHOW_FILTER: string = "SET_SHOW_FILTER";
export const SET_FILTERS: string = "SET_FILTERS";

const ActionTypes = {
  SET_LOGGED_IN_USER,
  SET_LOGGED_IN,
  LOGOUT,
  SET_LOADING,
  SET_ALL_ADDRESSES,
  SET_USER,
};

export type ReducerRootState = {
  ui: UIReducerStateProps;
  auth: AuthReducerStateProps;
  user: userReducerStateProps;
};

export default ActionTypes;
