import { SET_LOGGED_IN } from "../types";

export type AuthReducerStateProps = {
  isLoggedIn: boolean;
};

const initialState: AuthReducerStateProps = {
  isLoggedIn: false,
};

export type ActionType = {
  readonly type: typeof SET_LOGGED_IN;
  readonly payload: any;
};

const authReducer: any = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
